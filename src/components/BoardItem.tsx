import "./styles/boarditem.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

interface IBoardItem {
	title: string;
	content: string;
}

function BoardItem({ title, content }: IBoardItem) {
	return (
		<div className="BoardItem-item">
			<div className="BoardItem-header">
				<span>{title}</span>
				<div className="BoardItem-answer">
					<FontAwesomeIcon icon={faCommentDots} className="BoardItem-icon" />
					<span>1</span>
				</div>
			</div>
			<span className="BoardItem-content">{content}</span>
		</div>
	);
}

export default BoardItem;
