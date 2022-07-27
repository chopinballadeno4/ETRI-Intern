import "./styles/board.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import { Link } from "gatsby";
import ItemList from "components/ItemList";

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
