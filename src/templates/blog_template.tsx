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
	const [isKor, setIsKor] = useState(false);
	console.log(edges);

	useEffect(() => {
		setBlogItem(edges[0]);
		edges.map(item => {
			if (item.node.frontmatter.language === "kor" && isKor) {
				setHtml(item.node.html);
			}
			if (item.node.frontmatter.language === "eng" && !isKor) {
				setHtml(item.node.html);
			}
		});
		console.log(html);
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
					<div className="BlogItem-title" style={{ fontSize: "30px" }}>
						<span>{blogitem?.node.frontmatter.title}</span>
					</div>
					<div id="blogtemplate-date">
						<div className="BlogItem-date">
							<span>{blogitem?.node.frontmatter.date}</span>
						</div>
						<button className="language-button" onClick={korClick}>
							Kor
						</button>
						<button
							className="language-button"
							onClick={engClick}
							style={{ marginLeft: "10px" }}
						>
							Eng
						</button>
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
