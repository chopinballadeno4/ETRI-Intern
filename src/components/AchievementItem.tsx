import "./styles/achievementitem.scss";
import React from "react";
import logo from "../../static/test2.png";

interface IAchievementItem {
	title: string;
	content: string;
}

function AchievementItem({ title, content }: IAchievementItem) {
	return (
		<div className="AchievementItem-wrapper">
			<div className="AchievementItem-img">
				<img src={logo} alt="img"></img>
			</div>
			<div className="AchievementItem-content">
				<span>{title}</span>
				<span>{content}</span>
			</div>
		</div>
	);
}

export default AchievementItem;
