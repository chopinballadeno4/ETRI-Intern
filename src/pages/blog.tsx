import "./styles/blog.scss";
import "../styles/className.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import ViewMore from "../components/ViewMore";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import "../styles/className.scss";

interface IBlogNode {
	node: {
		html: string;
		fields: {
			slug: string;
		};
		frontmatter: {
			page: string;
			language: string;
			title: string;
			thumbnail: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
			date: string | Date;
		};
	};
}

interface IBlog {
	data: {
		allMarkdownRemark: {
			edges: IBlogNode[];
		};
	};
}

function blog({
	data: {
		allMarkdownRemark: { edges },
	},
}: IBlog) {
	const [bloglist, setBlogList] = useState<IBlogNode[]>([]);

	useEffect(() => {
		let tempArr: IBlogNode[] = [];
		edges.forEach(item => {
			if (item.node.frontmatter.page === "blog") {
				const tempObj = { ...item };
				tempObj.node.frontmatter.date = new Date(item.node.frontmatter.date);
				//setBlogList([...bloglist, tempObj]);
				tempArr = [...tempArr, tempObj];
			}
		});
		setBlogList([...tempArr]);
	}, []);

	const RenderBlogHeader = () => {
		const result = [];
		if (bloglist.length > 0) {
			result.push(
				<div id="BlogTopic-image">
					<GatsbyImage
						image={
							bloglist[0].node.frontmatter.thumbnail.childImageSharp
								.gatsbyImageData
						}
						alt="image"
					/>
				</div>,
				<div id="BlogTopic-Text">
					<span className="BlogItem-title" id="BlogTopic-titleID">
						{bloglist[0].node.frontmatter.title}
					</span>
					<div>
						<ViewMore node={bloglist[0]?.node} />
						<span className="BlogItem-date">
							{typeof bloglist[0].node.frontmatter.date !== "string"
								? bloglist[0].node.frontmatter.date.toDateString()
								: null}
						</span>
					</div>
				</div>,
			);
		}

		return result;
	};

	const RenderBlogList = () => {
		const result = [];
		for (let i = 1; i < bloglist.length; i++) {
			result.push(<BlogItem {...bloglist[i]} />);
		}
		return result;
	};

	return (
		<Layout>
			<div className="blog-wrapper">
				<section className="blog-header">
					<div className="blog-header-span">
						<FontAwesomeIcon icon={faBookBookmark} className="blog-icon" />
						<span>New</span>
					</div>
					<div className="blog-topic">{RenderBlogHeader()}</div>
				</section>
				<div className="blog-list">{RenderBlogList()}</div>
			</div>
		</Layout>
	);
}

export default blog;

export const BlogQuery = graphql`
	query blogQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
		) {
			edges {
				node {
					html
					fields {
						slug
					}
					frontmatter {
						page
						language
						title
						thumbnail {
							childImageSharp {
								gatsbyImageData(width: 768, height: 400)
							}
						}
						date(formatString: "YYYY.MM.DD.")
					}
				}
			}
		}
	}
`;
