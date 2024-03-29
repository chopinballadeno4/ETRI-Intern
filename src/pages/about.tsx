import Layout from "components/Layout";
import { graphql } from "gatsby";
import { useEffect, useState } from "react";
import "./styles/about.scss";
import "../styles/common.scss";

interface IAbout {
	data: {
		allMarkdownRemark: { edges: IAboutNode[] };
	};
}

interface IAboutNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			language: string;
		};
	};
}

function about({
	data: {
		allMarkdownRemark: { edges },
	},
}: IAbout) {
	const [html, setHtml] = useState<string>("");
	const [isKor, setIsKor] = useState(false);
	console.log(edges);

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
				<div id="about-main">
					<div className="language-select">
						<button className="language-button" onClick={korClick}>
							Kor
						</button>
						<button className="language-button" onClick={engClick}>
							Eng
						</button>
					</div>
					<main
						className="html-style"
						dangerouslySetInnerHTML={{ __html: html }}
					></main>
				</div>
			</div>
		</Layout>
	);
}

export default about;

export const queryAbout = graphql`
	query queryAbout {
		allMarkdownRemark(filter: { frontmatter: { page: { eq: "about" } } }) {
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
