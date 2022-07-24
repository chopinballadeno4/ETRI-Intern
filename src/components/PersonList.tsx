import "./styles/personlist.scss";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType, IPersonInfo } from "./types/PersonInfo.types";
import PersonInfo from "components/PersonInfo";

interface IPersonList {
	posts: IPersonListType[];
}

function PersonList({ posts }: IPersonList) {
	return (
		<div className="PersonList-wrapper">
			{posts.map(({ node: { id, frontmatter } }: IPersonListType) => (
				<PersonInfo {...frontmatter} key={id} />
			))}
		</div>
	);
}

export default PersonList;
