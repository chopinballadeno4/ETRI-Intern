import "./styles/researchitem.scss";
import React from "react";
import logo from "../../static/test2.png";

interface IResearchItem {
	title: string;
	content: string;
}

function ResearchItem({ title, content }: IResearchItem) {
	return (
		<div className="ResearchItem-wrapper">
			<div className="ResearchItem-img">
				<img src={logo} alt="img"></img>
			</div>
			<div className="ResearchItem-content">
				<span>{title}</span>
				<span>{content}</span>
			</div>
		</div>
	);
}

export default ResearchItem;
