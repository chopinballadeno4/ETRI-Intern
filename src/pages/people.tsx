import "./styles/people.scss";
import Layout from "components/Layout";
import React, { FunctionComponent, useEffect } from "react";
import PersonInfo from "components/PersonInfo";
import { IGatsbyImageData } from "gatsby-plugin-image";
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
						<PersonList posts={edges} />
					</section>
					<section className="people-group2">
						<span>
							Korea Advanced Institute of Science and Technology, South Korea
						</span>
						<PersonList posts={edges} />
					</section>
				</main>
			</div>
		</Layout>
	);
}

export const getPostList = graphql`
	query getPostList {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___name] }) {
			edges {
				node {
					id
					frontmatter {
						name
						contact
						department
						work
					}
				}
			}
		}
	}
`;

export default people;
