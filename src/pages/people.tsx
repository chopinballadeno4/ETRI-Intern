import "./styles/people.scss";
import Layout from "components/Layout";
import React, { FunctionComponent, useEffect } from "react";
import { graphql } from "gatsby";
import { IPersonListType } from "components/types/PersonInfo.types";
import PersonList from "../components/PersonList";

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
			<div className="people-wrapper">
				<main className="people-main">
					<section className="people-group1">
						<span>
							Electronics and Telecommunications Research Institute, South Korea
						</span>
						<PersonList type="ETRI" posts={edges} />
					</section>
					<section className="people-group2">
						<span>
							Korea Advanced Institute of Science and Technology, South Korea
						</span>
						<PersonList type="KAIST" posts={edges} />
					</section>
					<section className="people-group3">
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
