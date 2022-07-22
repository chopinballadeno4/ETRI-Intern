import "../scss/c-personInfo.scss";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { IPersonListType, IPersonInfo } from "types/PersonInfo.types";

function PersonInfo({ name, contact, department, work }: IPersonInfo) {
	return <div className="PersonInfo-wrapper"></div>;
}

export default PersonInfo;
