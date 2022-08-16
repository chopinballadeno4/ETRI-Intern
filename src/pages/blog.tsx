import "./styles/blog.scss";
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
				console.log(tempObj);
			}
		});
		console.log(tempArr);
		setBlogList([...tempArr]);
		// const tempArr = [...bloglist];
		// // 정렬과정 query할 때 정렬해서 가져올 수 있는지
		// tempArr.sort((a, b) => {
		// 	if (a.node.frontmatter.date > b.node.frontmatter.date) {
		// 		return 1;
		// 	} else if (a.node.frontmatter.date < b.node.frontmatter.date) {
		// 		return -1;
		// 	} else {
		// 		return 0;
		// 	}
		// });
		// setBlogList([...tempArr]);
	}, []);

	const RenderBlogHeader = () => {
		const result = [];
		if (bloglist.length > 0) {
			result.push(
				<GatsbyImage
					image={
						bloglist[0].node.frontmatter.thumbnail.childImageSharp
							.gatsbyImageData
					}
					alt="image"
				/>,
			);
			result.push(
				<span className="BlogHeaderItem-title">
					{bloglist[0].node.frontmatter.title}
				</span>,
			);
			result.push(<ViewMore source="research" />);
			result.push(
				<span className="BlogHeaderItem-date">
					{typeof bloglist[0].node.frontmatter.date !== "string"
						? bloglist[0].node.frontmatter.date.toDateString()
						: null}
				</span>,
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
