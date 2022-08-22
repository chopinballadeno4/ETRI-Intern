import "./styles/personlist.scss";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType, IPersonInfo } from "./types/PersonInfo.types";
import PersonInfo from "components/PersonInfo";

interface IPersonList {
	type: string;
	posts: IPersonListType[];
}

function PersonList({ type, posts }: IPersonList) {
	return (
		<div className="PersonList-wrapper">
			{/* {type === "ETRI"
				? posts.map(({ node: { id, frontmatter } }: IPersonListType) => {
						<PersonInfo {...frontmatter} key={id} />;
				  })
				: null}
			{type === "KAIST"
				? posts.map(({ node: { id, frontmatter } }: IPersonListType) => (
						<PersonInfo {...frontmatter} key={id} />
				  ))
				: null} */}
		</div>
	);
}

export default PersonList;
