import "./styles/achievement.scss";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "components/Layout";
import ItemList from "components/ItemList";
import { graphql } from "gatsby";

interface IAchievement {
	data: {
		allMarkdownRemark: {
			edges: IAchievementNode[];
		};
	};
}

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

function achievement({
	data: {
		allMarkdownRemark: { edges },
	},
}: IAchievement) {
	const [category, setCategory] = useState("");
	const [dissertation, setDissertation] = useState(true);
	const [patent, setPatent] = useState(false);
	const [program, setProgram] = useState(false);
	const [opensw, setOpenSW] = useState(false);
	const [dataset, setDataSet] = useState(false);
	const [achievement, setAchievement] = useState<IAchievementNode[]>();

	useEffect(() => {
		if (dissertation) setCategory("dissertation");
		if (patent) setCategory("patent");
		if (program) setCategory("program");
		if (opensw) setCategory("opensw");
		if (dataset) setCategory("dataset");
	}, [dissertation, patent, program, opensw, dataset]);

	useEffect(() => {
		edges.forEach(item => {
			if (item.node.frontmatter.category === category) {
				setAchievement([...(achievement || []), item]);
			}
		});
	}, [category]);

	const resetButton = () => {
		setDissertation(false);
		setPatent(false);
		setProgram(false);
		setOpenSW(false);
		setDataSet(false);
	};

	const RenderItemList = () => {
		if (achievement !== undefined) {
			return (
				<ItemList
					headertype={"achievement"}
					category={category}
					content={achievement}
				/>
			);
		} else {
			return null;
		}
	};

	return (
		<Layout>
			<div className="Wrapper">
				<div id="achievement-main">
					<ul id="achievement-side-list">
						<li>
							{dissertation ? (
								<button
									className="clicked-button"
									onClick={() => {
										resetButton();
										setDissertation(prev => !prev);
									}}
								>
									<span>dissertation</span>
								</button>
							) : (
								<button
									className="noneclicked-button"
									onClick={() => {
										resetButton();
										setDissertation(prev => !prev);
									}}
								>
									<span>dissertation</span>
								</button>
							)}
						</li>
						<li>
							{patent ? (
								<button
									className="clicked-button"
									onClick={() => {
										resetButton();
										setPatent(prev => !prev);
									}}
								>
									<span>patent</span>
								</button>
							) : (
								<button
									className="noneclicked-button"
									onClick={() => {
										resetButton();
										setPatent(prev => !prev);
									}}
								>
									<span>patent</span>
								</button>
							)}
						</li>
						<li>
							{program ? (
								<button
									className="clicked-button"
									onClick={() => {
										resetButton();
										setProgram(prev => !prev);
									}}
								>
									<span>program</span>
								</button>
							) : (
								<button
									className="noneclicked-button"
									onClick={() => {
										resetButton();
										setProgram(prev => !prev);
									}}
								>
									<span>program</span>
								</button>
							)}
						</li>
						<li>
							{opensw ? (
								<button
									className="clicked-button"
									onClick={() => {
										resetButton();
										setOpenSW(prev => !prev);
									}}
								>
									<span>open SW</span>
								</button>
							) : (
								<button
									className="noneclicked-button"
									onClick={() => {
										resetButton();
										setOpenSW(prev => !prev);
									}}
								>
									<span>open SW</span>
								</button>
							)}
						</li>
						<li>
							{dataset ? (
								<button
									className="clicked-button"
									onClick={() => {
										resetButton();
										setDataSet(prev => !prev);
									}}
								>
									<span>dataset</span>
								</button>
							) : (
								<button
									className="noneclicked-button"
									onClick={() => {
										resetButton();
										setDataSet(prev => !prev);
									}}
								>
									<span>dataset</span>
								</button>
							)}
						</li>
					</ul>
					{RenderItemList()}
				</div>
			</div>
		</Layout>
	);
}

export const achievementQuery = graphql`
	query achievementQuery {
		allMarkdownRemark(
			filter: { frontmatter: { page: { eq: "achievement" } } }
			sort: { order: ASC, fields: [frontmatter___no] }
		) {
			edges {
				node {
					html
					frontmatter {
						page
						category
						no
						thumbnail {
							childImageSharp {
								gatsbyImageData
							}
						}
					}
				}
			}
		}
	}
`;

export default achievement;
