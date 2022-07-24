import "./styles/personInfo.scss";
import React from "react";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType, IPersonInfo } from "./types/PersonInfo.types";

function PersonInfo({ name, contact, department, work }: IPersonInfo) {
	return (
		<div className="PersonInfo-wrapper">
			<StaticImage
				src="../../static/basic.jpg"
				className="PersonInfo-image"
				alt="img"
			/>
			<span>{name}</span>
			<span>{contact}</span>
			<span>{department}</span>
			<span>{work}</span>
		</div>
	);
}

export default PersonInfo;
