import "./styles/blog.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
//import BlogList from "components/BlogList";
import BlogHeaderItem from "components/BlogHeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import ItemList from "components/ItemList";

function blog() {
	const blogItem = [
		{
			img: "test2",
			title: "test1",
			day: new Date(),
		},
		{
			img: "test2",
			title: "test2",
			day: new Date(),
		},
		{
			img: "test2",
			title: "test3",
			day: new Date(),
		},
	];

	const blogListItem = [
		{
			img: ["basic.jpg", "test.jpg", "test2.jpg"],
			title: "title1",
			content: "content1",
		},
		{
			img: ["basic.jpg", "test.jpg", "test2.jpg"],
			title: "title2",
			content: "content2",
		},
		{
			img: ["basic.jpg", "test.jpg", "test2.jpg"],
			title: "title3",
			content: "content3",
		},
	];

	const content = [
		{
			title: "test1",
			content: "content1",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
		{
			title: "test2",
			content: "centent2",
		},
	];

	return (
		<Layout>
			<div className="blog-wrapper">
				<section className="blog-header">
					<div className="blog-header-span">
						<FontAwesomeIcon icon={faBookBookmark} className="blog-icon" />
						<span>Blog</span>
					</div>
					<div className="blog-topic">
						{blogItem.map(item => (
							<BlogHeaderItem {...item} />
						))}
					</div>
				</section>
				<div className="blog-list">
					<ItemList headertype={"achievement"} content={content} />
				</div>
			</div>
		</Layout>
	);
}

export default blog;
