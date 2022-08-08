import "./styles/board.scss";
import React, { FunctionComponent, useEffect } from "react";
import Layout from "components/Layout";
import { Link } from "gatsby";
import ItemList from "components/ItemList";

import { config } from "./../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

function board() {
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

	const getItem = async () => {
		const dbService = getFirestore(initializeApp(config));
		await addDoc(collection(dbService, "board"), {
			name: "kim",
			last: "bae",
		});
	}

	useEffect(() => {
		getItem();
	}, []);

	return (
		<Layout>
			<div className="board-wrapper">
				<main className="board-main">
					<div className="board-buttonsection">
						<Link to="/boardwrite">New</Link>
					</div>
					<div className="board-items">
						{/* <BoardList /> */}
						<ItemList headertype={"board"} content={content} />
					</div>
				</main>
			</div>
		</Layout>
	);
}

export default board;
