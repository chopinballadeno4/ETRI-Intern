import "./styles/achievementlist.scss";
import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

interface IAchievementNode {
	node: {
		html: string;
		frontmatter: {
			page: string;
			category: string;
			no: number;
			thumbnail: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
		};
	};
}

interface IAchievementList {
	content: IAchievementNode[];
}

function AchievementList({ content }: IAchievementList) {
	const RenderItem = () => {
		const result = [];
		console.log(content);
		for (let i = 0; i < content.length; i++) {
			result.push(
				<div id="AchievementList-wrapper">
					<GatsbyImage
						image={
							content[i].node.frontmatter.thumbnail.childImageSharp
								.gatsbyImageData
						}
						alt="image"
						id="achievement-image"
					/>
					<main
						dangerouslySetInnerHTML={{ __html: content[i].node.html }}
					></main>
				</div>,
			);
		}
		return result;
	};

	return <>{RenderItem()}</>;
}

export default AchievementList;
