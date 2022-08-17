import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import "./styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, navigate } from "gatsby";
import ViewMore from "../components/ViewMore";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IHomeNode {
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

interface IHome {
	data: {
		allMarkdownRemark: {
			edges: IHomeNode[];
		};
	};
}

function IndexPage({
	data: {
		allMarkdownRemark: { edges },
	},
}: IHome) {
	const [bloglist, setBlogList] = useState<IHomeNode[]>([]);

	useEffect(() => {
		let tempArr: IHomeNode[] = [];
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
	}, []);

	return (
		<Layout>
			<div className="home-wrapper">
				<section className="home-research">
					<StaticImage src="../../static/home.jpg" alt="img" />
					<div className="home-image-text">
						<span>
							Continuous local adaptation to user response in real environment
							service situations (Local) Robot intelligence technology
							development
						</span>
						<ViewMore source="research" />
					</div>
				</section>
				<section className="home-blog">
					<div className="home-blog1">
						<div>
							<GatsbyImage
								image={
									bloglist[0]?.node.frontmatter.thumbnail.childImageSharp
										.gatsbyImageData
								}
								className="home-image"
								alt="img"
							/>
							<div>
								<span>{bloglist[0]?.node.frontmatter.title}</span>
								<ViewMore source="research" />
							</div>
						</div>
					</div>
					<div className="home-blog2">
						<div>
							<div>
								<span>{bloglist[1]?.node.frontmatter.title}</span>
								<ViewMore source="research" />
							</div>
							<GatsbyImage
								image={
									bloglist[1]?.node.frontmatter.thumbnail.childImageSharp
										.gatsbyImageData
								}
								className="home-image"
								alt="img"
							/>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default IndexPage;

export const HomeQuery = graphql`
	query homeQuery {
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
