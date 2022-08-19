import "./styles/itemlist.scss";
import { boardcontent } from "./types/ItemList.types";
import React from "react";
import AchievementItem from "./AchievementItem";

interface IAchievementNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			category: string;
		};
	};
}

interface IItemList {
	headertype: string;
	category: string;
	content: IAchievementNode;
}

function ItemList({ headertype, category, content }: IItemList) {
	const RenderItem = () => {
		return (
			<main
				className="ItemList-html"
				dangerouslySetInnerHTML={{ __html: content.node.html }}
			></main>
		);
	};

	return <main className="ItemList-wrapper">{RenderItem()}</main>;
}

export default ItemList;
