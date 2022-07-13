import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import "../scss/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useRecoilState } from "recoil";
import { isDarkAtom } from "../atoms";

const Header: FunctionComponent = function () {
	const [isDark, setIsDark] = useRecoilState(isDarkAtom);

	//const [isDark, setIsDark] = useRecoilState(isDarkAtom);
	const root = document.querySelector(".root");

	if (isDark === true) {
		root?.classList.add("dark");
	} else {
		root?.classList.remove("dark");
	}

	const darkmodeClick = () => {
		setIsDark(prev => !prev);
		console.log(root?.classList);
	};

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
					<button onClick={darkmodeClick} className="mode-change-button">
						<FontAwesomeIcon icon={faMoon} className="darkmode-icon" />
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
