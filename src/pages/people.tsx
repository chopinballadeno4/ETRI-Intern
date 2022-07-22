import "../scss/people.scss";
import Layout from "components/Layout";
import React, { FunctionComponent, useEffect } from "react";
import PersonInfo from "components/PersonInfo";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType } from "types/PersonInfo.types";
import PersonList from "../main/PersonList";

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
				<section className="people-group1">
					<span>
						Electronics and Telecommunications Research Institute, South Korea
					</span>
					<PersonList posts={edges} />
				</section>
				<section className="people-group2"></section>
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
