import "./styles/people.scss";
import Layout from "components/Layout";
import React from "react";
import { graphql } from "gatsby";
import PersonList from "../components/PersonList";
import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IPersonInfo {
	page: string;
	order: number;
	name: string;
	contact: string;
	work: string;
	department: string;
	image: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
}

export interface IPersonListType {
	node: {
		id: string;
		frontmatter: IPersonInfo;
	};
}

interface Ipeople {
	data: {
		allMarkdownRemark: {
			edges: IPersonListType[];
		};
	};
}

function people({
	data: {
		allMarkdownRemark: { edges },
	},
}: Ipeople) {
	return (
		<Layout>
			<div className="Wrapper">
				<main id="people-main">
					<section id="people-group">
						<span>
							Electronics and Telecommunications Research Institute, South Korea
						</span>
						<PersonList type="ETRI" posts={edges} />
					</section>
					<section id="people-group">
						<span>
							Korea Advanced Institute of Science and Technology, South Korea
						</span>
						<PersonList type="KAIST" posts={edges} />
					</section>
					<section id="people-group">
						<span>
							Korea Advanced Institute of Science and Technology, South Korea
						</span>
						<PersonList type="KAIST" posts={edges} />
					</section>
				</main>
			</div>
		</Layout>
	);
}

export const getPeopleList = graphql`
	query getPeopleList {
		allMarkdownRemark(
			filter: { frontmatter: { page: { eq: "people" } } }
			sort: { order: ASC, fields: [frontmatter___order] }
		) {
			edges {
				node {
					id
					frontmatter {
						page
						order
						name
						contact
						work
						department
						image {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`;

export default people;
