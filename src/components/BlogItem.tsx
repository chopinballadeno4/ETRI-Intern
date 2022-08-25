import "./styles/blogitem.scss";
import "../styles/common.scss";
import React, { useEffect, useState } from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import ViewMore from "./ViewMore";
import { node } from "prop-types";

interface IBlogItemNode {
	node: {
		html: string;
		fields: {
			slug: string;
		};
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

function BlogItem({ node }: IBlogItemNode) {
	return (
		<div id="BlogItem-wrapper">
			<GatsbyImage
				image={node.frontmatter.thumbnail.childImageSharp.gatsbyImageData}
				alt="img"
			/>
			<span className="BlogItem-title">{node.frontmatter.title}</span>
			<ViewMore slug={node?.fields.slug} />
			<span className="BlogItem-date">
				{typeof node.frontmatter.date !== "string"
					? node.frontmatter.date.toDateString()
					: null}
			</span>
		</div>
	);
}

export default BlogItem;
