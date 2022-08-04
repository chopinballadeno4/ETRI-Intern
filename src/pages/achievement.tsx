import "./styles/achievement.scss";
import React, { FunctionComponent, useState } from "react";
import Layout from "components/Layout";
import ItemList from "components/ItemList";

function achievement() {
	const [isDataSet, setIsDataset] = useState(false);
	const [isSourceCode, setIsSourceCode] = useState(false);

	const resetButton = () => {
		setIsDataset(false);
		setIsSourceCode(false);
	};

	const content = [
		{
			title: "test1",
			content: "content1",
		},
		{
			title: "test2",
			content: "centent2",
		},
	];

	return (
		<Layout>
			<div className="achievement-wrapper">
				<div className="achievement-main">
					<div className="achievement-side-nav">
						<ul>
							<li>
								{isDataSet ? (
									<button
										className="clicked-button"
										onClick={() => {
											resetButton();
											setIsDataset(prev => !prev);
										}}
									>
										<span>data set</span>
									</button>
								) : (
									<button
										className="noneclicked-button"
										onClick={() => {
											resetButton();
											setIsDataset(prev => !prev);
										}}
									>
										<span>data set</span>
									</button>
								)}
							</li>
							<li>
								{isSourceCode ? (
									<button
										className="clicked-button"
										onClick={() => {
											resetButton();
											setIsSourceCode(prev => !prev);
										}}
									>
										<span>source code</span>
									</button>
								) : (
									<button
										className="noneclicked-button"
										onClick={() => {
											resetButton();
											setIsSourceCode(prev => !prev);
										}}
									>
										<span>source code</span>
									</button>
								)}
							</li>
						</ul>
					</div>
					<ItemList headertype={"achievement"} content={content} />
				</div>
			</div>
		</Layout>
	);
}

export default achievement;
