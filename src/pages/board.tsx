import "./styles/board.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import BoardList from "components/BoardList";
import { Link } from "gatsby";

function board() {
	return (
		<Layout>
			<div className="board-wrapper">
				<main className="board-main">
					<div className="board-buttonsection">
						<Link to="/boardwrite">New</Link>
					</div>
					<div className="board-items">
						<BoardList />
					</div>
				</main>
			</div>
		</Layout>
	);
}

export default board;
