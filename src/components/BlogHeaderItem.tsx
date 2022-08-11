import "./styles/blogheaderitem.scss";
import React, { useEffect, useState } from "react";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";
import ViewMore from "./Viewmore";

interface IBlogItemNode {
	node: {
		html?: string;
		frontmatter: {
			page: string;
			language: string;
			title: string;
			thumbnail: string;
			date: string | Date;
		};
	};
}

function BlogHeaderItem({
	node: {
		html,
		frontmatter: { page, language, title, thumbnail, date },
	},
}: IBlogItemNode) {
	const [imgroute, setImgroute] = useState<string>();

	useEffect(() => {
		setImgroute(`../../static/${thumbnail}.png`);
		console.log(thumbnail);
	}, []);

	return (
		<div className="BlogHeaderItem-wrapper">
			<StaticImage
				src="../../static/blog-1-thumbnail.jpg"
				className="BlogHeaderItem-image"
				alt="img"
			/>
			<span id="BlogHeaderItem-title">{title}</span>
			<ViewMore source="research" />
			<span id="BlogHeaderItem-date">
				{typeof date !== "string" ? date.toDateString() : null}
			</span>
		</div>
	);
}

export default BlogHeaderItem;
