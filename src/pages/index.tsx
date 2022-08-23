import React, { useEffect, useState } from "react";
import Layout from "components/Layout";
import "./styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, navigate, Link } from "gatsby";
import ViewMore from "../components/ViewMore";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

interface IHomeNode {
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
	return (
		<Layout>
			<div className="Wrapper">
				<section id="home-research">
					<StaticImage src="../../static/home.jpg" alt="img" />
					<div id="home-research-text">
						<span>
							Continuous local adaptation to user response in real environment
							service situations (Local) Robot intelligence technology
							development
						</span>
						<Link to={"/research"} className="ViewMore_Link">
							<FontAwesomeIcon icon={faArrowRightLong} />
							<span>View more</span>
						</Link>
					</div>
				</section>
				<section id="home-blog">
					<div id="home-blog1">
						<div>
							<GatsbyImage
								image={
									edges[0]?.node.frontmatter.thumbnail.childImageSharp
										.gatsbyImageData
								}
								alt="img"
							/>
							<div>
								<span>{edges[0]?.node.frontmatter.title}</span>
								<ViewMore slug={edges[0]?.node.fields.slug} />
							</div>
						</div>
					</div>
					<div id="home-blog2">
						<div>
							<div>
								<span>{edges[1]?.node.frontmatter.title}</span>
								<ViewMore slug={edges[1]?.node.fields.slug} />
							</div>
							<GatsbyImage
								image={
									edges[1]?.node.frontmatter.thumbnail.childImageSharp
										.gatsbyImageData
								}
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
			filter: { frontmatter: { page: { eq: "blog" } } }
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
