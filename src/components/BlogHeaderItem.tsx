import "./styles/blogheaderitem.scss";
import React, { useEffect, useState } from "react";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";

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
		console.log(imgroute);
	}, []);

	return (
		<div className="BlogHeaderItem-wrapper">
			<StaticImage
				src={`../../static/${thumbnail}.png`}
				className="BlogHeaderItem-image"
				alt="img"
			/>
			<span>{title}</span>
			<span>{typeof date !== "string" ? date.toDateString() : null}</span>
		</div>
	);
}

export default BlogHeaderItem;
