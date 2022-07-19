import "../scss/PersonInfo.scss";
import React from "react";

interface IPersonInfo {
	role?: string;
	contact?: string;
}

function PersonInfo({ role, contact }: IPersonInfo) {
	return (
		<div className="PersonInfo-wrapper">
			<img alt="img"></img>
			<span>{role}</span>
			<span>{contact}</span>
		</div>
	);
}

export default PersonInfo;
