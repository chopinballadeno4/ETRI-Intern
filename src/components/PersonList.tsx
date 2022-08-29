import "./styles/personlist.scss";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { IPersonListType } from "../pages/people";

interface IPersonList {
	type: string;
	posts: IPersonListType[];
}

function PersonList({ type, posts }: IPersonList) {
	const RenderList = (type: string) => {
		const result: JSX.Element[] = [];
		posts.forEach(item => {
			if (item.node.frontmatter.department == type) {
				result.push(
					<div id="PersonInfo-wrapper">
						<GatsbyImage
							image={
								item.node.frontmatter.image.childImageSharp.gatsbyImageData
							}
							alt="image"
							className="PersonInfo-image"
						/>
						<span>{item.node.frontmatter.name}</span>
						<span>{item.node.frontmatter.contact}</span>
						<span>{item.node.frontmatter.work}</span>
					</div>,
				);
			}
		});
		return result;
	};

	return <div id="PersonList-wrapper">{RenderList(type)}</div>;
}

export default PersonList;
