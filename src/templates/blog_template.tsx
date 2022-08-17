import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

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
			date: string | Date;
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
	console.log(edges);
	return <h1>is tomholy</h1>;
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
