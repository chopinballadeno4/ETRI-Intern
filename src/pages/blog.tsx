import "./styles/blog.scss";
import "../components/styles/blogItem.scss";
import "../styles/common.scss";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BlogItem from "../components/BlogItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import { graphql } from "gatsby";
import ViewMore from "../components/ViewMore";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

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
	const [isKor, setIsKor] = useState(false);

	useEffect(() => {
		let tempArr: IBlogNode[] = [];
		edges.forEach(item => {
			if (item.node.frontmatter.language === "kor" && isKor) {
				const tempObj = { ...item };
				tempObj.node.frontmatter.date = new Date(item.node.frontmatter.date);
				tempArr = [...tempArr, tempObj];
			}
			if (item.node.frontmatter.language === "eng" && !isKor) {
				const tempObj = { ...item };
				tempObj.node.frontmatter.date = new Date(item.node.frontmatter.date);
				tempArr = [...tempArr, tempObj];
			}
		});
		setBlogList([...tempArr]);
	}, [isKor]);

	const korClick = () => {
		if (!isKor) {
			setIsKor(!isKor);
		}
	};

	const engClick = () => {
		if (isKor) {
			setIsKor(!isKor);
		}
	};

	const RenderBlogHeader = () => {
		const result = [];
		if (bloglist.length > 0) {
			result.push(
				<div id="blog-topic-image">
					<GatsbyImage
						image={
							bloglist[0].node.frontmatter.thumbnail.childImageSharp
								.gatsbyImageData
						}
						alt="image"
					/>
				</div>,
				<div id="blog-topic-Text">
					<span className="BlogItem-title" id="BlogTopic-titleID">
						{bloglist[0].node.frontmatter.title}
					</span>
					<div>
						<ViewMore slug={bloglist[0]?.node.fields.slug} />
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
			<div className="Wrapper">
				<section id="blog-header">
					<div id="blog-header-span">
						<div>
							<FontAwesomeIcon icon={faBookBookmark} id="blog-icon" />
							<span>New</span>
						</div>
						<div style={{ display: "flex" }}>
							<button id="blog-language-button" onClick={korClick}>
								Kor
							</button>
							<button
								id="blog-language-button"
								onClick={engClick}
								style={{
									marginLeft: "10px",
								}}
							>
								Eng
							</button>
						</div>
					</div>
					<div id="blog-topic">{RenderBlogHeader()}</div>
				</section>
				<div id="blog-list">{RenderBlogList()}</div>
			</div>
		</Layout>
	);
}

export default blog;

export const BlogQuery = graphql`
	query blogQuery {
		allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
			filter: { frontmatter: { page: { eq: "blog" } } }
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
