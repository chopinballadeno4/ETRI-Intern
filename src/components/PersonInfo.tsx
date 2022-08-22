import "./styles/personInfo.scss";
import React from "react";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType, IPersonInfo } from "./types/PersonInfo.types";

function PersonInfo({ page, order, name, contact, work, image }: IPersonInfo) {
	return (
		<div className="PersonInfo-wrapper">
			<GatsbyImage
				image={image.childImageSharp.gatsbyImageData}
				alt="image"
				className="PersonInfo-image"
			/>
			<span>{name}</span>
			<span>{contact}</span>
			<span>{work}</span>
		</div>
	);
}

export default PersonInfo;
