import "./styles/researchlist.scss";
import React from "react";
import ResearchItem from "./ResearchItem";

function ResearchList() {
	const Item = {
		title: "test1",
		content: "content1",
	};

	const Item2 = {
		title: "test2",
		content: "centent2",
	};

	return (
		<section className="ResearchList-wrapper">
			<ResearchItem {...Item}></ResearchItem>
			<ResearchItem {...Item2}></ResearchItem>
		</section>
	);
}

export default ResearchList;
