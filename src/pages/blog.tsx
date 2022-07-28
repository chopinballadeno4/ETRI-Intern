import "./styles/blog.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import BlogList from "components/BlogList";
import BlogHeaderItem from "components/BlogHeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

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
				<BlogList />
			</div>
		</Layout>
	);
}

export default blog;
