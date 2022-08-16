import "./styles/blogitem.scss";
//import "../styles/className.scss";
import React, { useEffect, useState } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ViewMore from "./ViewMore";

interface IBlogItemNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			language: string;
			title: string;
			thumbnail: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
			date: string | Date;
		};
	};
}

function BlogItem({
	node: {
		html,
		frontmatter: { page, language, title, thumbnail, date },
	},
}: IBlogItemNode) {
	return (
		<div className="BlogItem-wrapper">
			<GatsbyImage
				image={thumbnail.childImageSharp.gatsbyImageData}
				className="BlogHeaderItem-image"
				alt="img"
			/>
			<span className="BlogItem-title">{title}</span>
			<ViewMore source="research" />
			<span className="BlogItem-date">
				{typeof date !== "string" ? date.toDateString() : null}
			</span>
		</div>
	);
}

export default BlogItem;
