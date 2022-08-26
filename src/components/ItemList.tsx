import "./styles/itemlist.scss";
import { boardcontent } from "./types/ItemList.types";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IAchievementNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			category: string;
			no: number;
			thumbnail: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
		};
	};
}

interface IItemList {
	headertype: string;
	category: string;
	content: IAchievementNode[];
}

function ItemList({ headertype, category, content }: IItemList) {
	const RenderItem = () => {
		const result = [];
		console.log(category);
		console.log(content);
		for (let i = 0; i < content.length; i++) {
			result.push(
				/* <GatsbyImage
						image={
							content[i].node.frontmatter.thumbnail.childImageSharp
								.gatsbyImageData
						}
						alt="image"
						className="PersonInfo-image"
					/> */
				<main
					dangerouslySetInnerHTML={{ __html: content[i].node.html }}
					id="ItemList-wrapper"
				></main>,
			);
		}
		return result;
	};

	return <>{RenderItem()}</>;
}

export default ItemList;
