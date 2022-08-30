import Layout from "components/Layout";
import { graphql } from "gatsby";
import "./styles/blogtemplate.scss";
import "../styles/common.scss";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { useEffect, useState } from "react";

interface IBlogTemplateNode {
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
			date: string;
		};
	};
}

interface IBlogTemplate {
	data: {
		allMarkdownRemark: {
			edges: IBlogTemplateNode[];
		};
	};
}

function BlogTemplate({
	data: {
		allMarkdownRemark: { edges },
	},
}: IBlogTemplate) {
	const [blogitem, setBlogItem] = useState<IBlogTemplateNode>();
	const [html, setHtml] = useState<string>("");

	useEffect(() => {
		setBlogItem(edges[0]);
		if (blogitem !== undefined) {
			setHtml(blogitem?.node.html);
		}
	}, []);

	const RenderThumbnail = () => {
		if (blogitem !== undefined) {
			return (
				<div id="blogtemplate-thumbnail">
					<GatsbyImage
						image={
							blogitem.node.frontmatter.thumbnail.childImageSharp
								.gatsbyImageData
						}
						alt="thumbnail"
					/>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<Layout>
			<div className="Wrapper">
				<main id="blogtemplate-main">
					<div id="blogtemplate-title">
						<span>{blogitem?.node.frontmatter.title}</span>
					</div>
					<div id="blogtemplate-date">
						<div className="BlogItem-date">
							<span>{blogitem?.node.frontmatter.date}</span>
						</div>
					</div>
					{RenderThumbnail()}
					<main
						id="blogtemplate-html"
						dangerouslySetInnerHTML={{ __html: html }}
					></main>
				</main>
			</div>
		</Layout>
	);
}

export default BlogTemplate;

export const queryMarkdownDataBySlug = graphql`
	query queryMarkdownDataBySlug($slug: String) {
		allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
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
								gatsbyImageData
							}
						}
						date(formatString: "YYYY.MM.DD.")
					}
				}
			}
		}
	}
`;
