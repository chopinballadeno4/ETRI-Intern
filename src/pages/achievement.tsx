import "./styles/achievement.scss";
import React, { FunctionComponent, useState } from "react";
import Layout from "components/Layout";
import AchievementList from "components/AchievementList";

function achievement() {
	const [isIntroduce, setIsIntroduce] = useState(false);
	const [isDataSet, setIsDataset] = useState(false);
	const [isSourceCode, setIsSourceCode] = useState(false);

	const resetButton = () => {
		setIsIntroduce(false);
		setIsDataset(false);
		setIsSourceCode(false);
	};

	return (
		<Layout>
			<div className="achievement-wrapper">
				<div className="achievement-main">
					<div className="achievement-side-nav">
						<ul>
							<li>
								{isIntroduce ? (
									<button
										className="clicked-button"
										onClick={() => {
											resetButton();
											setIsIntroduce(prev => !prev);
										}}
									>
										<span>introduce</span>
									</button>
								) : (
									<button
										className="noneclicked-button"
										onClick={() => {
											resetButton();
											setIsIntroduce(prev => !prev);
										}}
									>
										<span>introduce</span>
									</button>
								)}
							</li>
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
					<AchievementList />
				</div>
			</div>
		</Layout>
	);
}

export default achievement;
