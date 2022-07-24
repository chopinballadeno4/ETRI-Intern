import "./styles/research.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "components/Layout";
import ResearchList from "components/ResearchList";

function research() {
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
			<div className="research-wrapper">
				<div className="research-main">
					<div className="research-side-nav">
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
					<ResearchList />
				</div>
			</div>
		</Layout>
	);
}

export default research;
