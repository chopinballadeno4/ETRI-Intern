import "./styles/research.scss";
import "../styles/common.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "components/Layout";
import { graphql } from "gatsby";

interface IResearchNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			language: string;
			title: string;
		};
	};
}

interface IResearch {
	data: {
		allMarkdownRemark: {
			edges: IResearchNode[];
		};
	};
}

function research({
	data: {
		allMarkdownRemark: { edges },
	},
}: IResearch) {
	const [html, setHtml] = useState<string>("");
	const [isKor, setIsKor] = useState(false);
	useEffect(() => {
		edges.map(item => {
			if (item.node.frontmatter.language === "kor" && isKor) {
				setHtml(item.node.html);
			}
			if (item.node.frontmatter.language === "eng" && !isKor) {
				setHtml(item.node.html);
			}
		});
	}, [isKor]);

	const korClick = () => {
		if (!isKor) {
			setIsKor(!isKor);
		}
	};

	const engClick = () => {
		if (isKor) {
			setIsKor(!isKor);
		}
	};

	return (
		<Layout>
			<div className="Wrapper">
				<div id="research-language">
					<button
						className="language-button"
						onClick={korClick}
						style={{ marginRight: "10px" }}
					>
						Kor
					</button>
					<button className="language-button" onClick={engClick}>
						Eng
					</button>
				</div>
				<main
					id="research-html"
					dangerouslySetInnerHTML={{ __html: html }}
				></main>
			</div>
		</Layout>
	);
}

export const researchQuery = graphql`
	query researchQuery {
		allMarkdownRemark(filter: { frontmatter: { page: { eq: "research" } } }) {
			edges {
				node {
					html
					frontmatter {
						page
						language
					}
				}
			}
		}
	}
`;

export default research;
