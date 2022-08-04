import "./styles/research.scss";
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
			if (item.node.frontmatter.page === "research") {
				if (item.node.frontmatter.language === "kor" && isKor) {
					setHtml(item.node.html);
				}
				if (item.node.frontmatter.language === "eng" && !isKor) {
					setHtml(item.node.html);
				}
			}
		});
		console.log(html);
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
			<div className="research-wrapper">
				<div className="research-language">
					<button className="research-button" onClick={korClick}>
						Kor
					</button>
					<button className="research-button" onClick={engClick}>
						Eng
					</button>
				</div>
				<main
					className="research-main"
					dangerouslySetInnerHTML={{ __html: html }}
				></main>
			</div>
		</Layout>
	);
}

export const researchQuery = graphql`
	query researchQuery {
		allMarkdownRemark {
			edges {
				node {
					html
					frontmatter {
						page
						language
						title
					}
				}
			}
		}
	}
`;

export default research;
