import "./styles/boardlist.scss";
import React from "react";
import BoardItem from "./BoardItem";

function BoardList() {
	const Item = {
		title: "test1",
		content: "content1",
	};

	const Item2 = {
		title: "test2",
		content: "centent2",
	};

	return (
		<section className="BoardList-wrapper">
			<BoardItem {...Item}></BoardItem>
			<BoardItem {...Item2}></BoardItem>
		</section>
	);
}

export default BoardList;
