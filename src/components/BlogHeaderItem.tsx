import "./styles/blogheaderitem.scss";
import React, { useEffect, useState } from "react";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";

interface IBlogHeaderItem {
	img: string;
	title: string;
	day: Date;
}

function BlogHeaderItem({ img, title, day }: IBlogHeaderItem) {
	const [imgroute, setImgroute] = useState<string>();
	useEffect(() => {
		setImgroute(`../../static/${img}.png`);
		console.log(imgroute);
	}, []);

	return (
		<div className="BlogHeaderItem-wrapper">
			<StaticImage
				src="../../static/test2.png"
				className="BlogHeaderItem-image"
				alt="img"
			/>
			<span>{title}</span>
			<span>{day.toDateString()}</span>
		</div>
	);
}

export default BlogHeaderItem;
