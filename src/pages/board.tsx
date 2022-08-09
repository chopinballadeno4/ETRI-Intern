import "./styles/board.scss";
import React, { FunctionComponent, useEffect, useState } from "react";
import Layout from "components/Layout";
import { Link } from "gatsby";
import ItemList from "components/ItemList";

import { config } from "./../firebase";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";

interface IContent {
	content: string,
	id: string,
	pw: number,
	title: string,
}

function board() {
	const [content, setContent] = useState<IContent []>([]);

	const getItem = async () => {
		const dbService = getFirestore(initializeApp(config));
		const querySnapshot = await getDocs(collection(dbService, "board"));
		querySnapshot.forEach((doc) => {
			const tempObj = {
				content: doc.data().content,
				id: doc.data().id,
				pw: doc.data().pw,
				title: doc.data().title,
			}
			setContent([...content, tempObj]);
		});
		console.log(content);
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
