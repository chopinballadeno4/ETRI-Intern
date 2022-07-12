import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import "../scss/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Header: FunctionComponent = function () {
	const [isDark, setIsDark] = useRecoilState(isDarkAtom);

	return (
		<div className="wrapper">
			<header className="header">
				<div>
					<Link to={"/"}>logo</Link>
				</div>
				<nav className="header-link">
					<Link to={"/research"}>
						<span>Our research</span>
					</Link>
					<Link to={"/achievement"}>
						<span>Achievement</span>
					</Link>
					<Link to={"/blog"}>
						<span>Blog</span>
					</Link>
					<Link to={"/board"}>
						<span>Board</span>
					</Link>
					<Link to={"/people"}>
						<span>People</span>
					</Link>
					<Link to={"/join"}>
						<span>Join us</span>
					</Link>
					<button
						onClick={() => setIsDark(prev => !prev)}
						className="mode-change"
					>
						<FontAwesomeIcon icon={faMoon} className="darkmode-icon" />
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
