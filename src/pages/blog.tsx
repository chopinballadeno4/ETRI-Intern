import "./styles/blog.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import BlogList from "components/BlogList";

function blog() {
	return (
		<Layout>
			<div className="blog-wrapper">
				<BlogList />
			</div>
		</Layout>
	);
}

export default blog;
