import "./styles/achievementlist.scss";
import React from "react";
import AchievementItem from "./AchievementItem";

function AchievementList() {
	const Item = {
		title: "test1",
		content: "content1",
	};

	const Item2 = {
		title: "test2",
		content: "centent2",
	};

	return (
		<section className="AchievementList-wrapper">
			<AchievementItem {...Item}></AchievementItem>
			<AchievementItem {...Item2}></AchievementItem>
		</section>
	);
}

export default AchievementList;
