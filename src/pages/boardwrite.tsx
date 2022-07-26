import "./styles/boardwrite.scss";
import React, { FunctionComponent } from "react";
import Layout from "components/Layout";
import BoardList from "components/BoardList";
import { Link } from "gatsby";
import BoardWriteForm from "components/BoardWriteForm";

function boardwrite() {
	return (
		<Layout>
			<div className="boardwrite-wrapper">
				<main className="boardwrite-main">
					<BoardWriteForm />
				</main>
			</div>
		</Layout>
	);
}

export default boardwrite;
