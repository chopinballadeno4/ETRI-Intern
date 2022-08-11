import "./styles/blog.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "components/Layout";
//import BlogList from "components/BlogList";
import BlogHeaderItem from "components/BlogHeaderItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";
import ItemList from "components/ItemList";
import { graphql } from "gatsby";
import ViewMore from "../components/Viewmore";

interface IBlogNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			language: string;
			title: string;
			thumbnail: string;
			date: string | Date;
		};
	};
}

interface IBlog {
	data: {
		allMarkdownRemark: {
			edges: IBlogNode[];
		};
	};
}

function blog({
	data: {
		allMarkdownRemark: { edges },
	},
}: IBlog) {
	const [bloglist, setBlogList] = useState<IBlogNode[]>([]);

	useEffect(() => {
		edges.forEach(item => {
			if (item.node.frontmatter.page === "blog") {
				const tempObj = { ...item };
				tempObj.node.frontmatter.date = new Date(item.node.frontmatter.date);
				setBlogList([...bloglist, tempObj]);
			}
		});
		// const tempArr = [...bloglist];

		// // 정렬과정 query할 때 정렬해서 가져올 수 있는지
		// tempArr.sort((a, b) => {
		// 	if (a.node.frontmatter.date > b.node.frontmatter.date) {
		// 		return 1;
		// 	} else if (a.node.frontmatter.date < b.node.frontmatter.date) {
		// 		return -1;
		// 	} else {
		// 		return 0;
		// 	}
		// });

		// setBlogList([...tempArr]);
	}, []);

	return (
		<Layout>
			<div className="blog-wrapper">
				<section className="blog-header">
					<div className="blog-header-span">
						<FontAwesomeIcon icon={faBookBookmark} className="blog-icon" />
						<span>New</span>
					</div>
					<div className="blog-topic">
						{bloglist.map(item => (
							<BlogHeaderItem {...item} />
						))}
						{/* <BlogHeaderItem {...bloglist[0]} />
						<BlogHeaderItem {...bloglist[1]} />
						<BlogHeaderItem {...bloglist[2]} /> */}
					</div>
				</section>
				<div className="blog-list">
					{/* <ItemList headertype={"achievement"} content={content} /> */}
				</div>
			</div>
		</Layout>
	);
}

export default blog;

export const BlogQuery = graphql`
	query blogQuery {
		allMarkdownRemark {
			edges {
				node {
					html
					frontmatter {
						page
						language
						title
						thumbnail
						date
					}
				}
			}
		}
	}
`;
