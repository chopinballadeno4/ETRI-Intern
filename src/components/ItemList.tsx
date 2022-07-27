import "./styles/itemlist.scss";
import { boardcontent } from "./types/ItemList.types";
import React from "react";
import BoardItem from "./BoardItem";
import AchievementItem from "./AchievementItem";

interface IItemList {
	headertype: string;
	content: boardcontent[];
}

function ItemList({ headertype, content }: IItemList) {
	return (
		<main className="ItemList-wrapper">
			{headertype == "board" ? (
				content.map(item => <BoardItem {...item}></BoardItem>)
			) : (
				<></>
			)}
			{headertype == "achievement" ? (
				content.map(item => <AchievementItem {...item}></AchievementItem>)
			) : (
				<></>
			)}
		</main>
	);
}

export default ItemList;
