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
	const RenderList = (type: string) => {
		const result: JSX.Element[] = [];
		posts.forEach(item => {
			if (item.node.frontmatter.department == type) {
				result.push(<PersonInfo {...item.node.frontmatter} />);
			}
		});
		return result;
	};

	return <div className="PersonList-wrapper">{RenderList(type)}</div>;
}

export default PersonList;
