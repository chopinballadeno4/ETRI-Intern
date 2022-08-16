import React, { FunctionComponent, useEffect, useState } from "react";
import { Link } from "gatsby";
import "./styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {
	GatsbyImage,
	IGatsbyImageData,
	StaticImage,
} from "gatsby-plugin-image";

const Header: FunctionComponent = function () {
	const [isDark, setIsDark] = useState(false);
	useEffect(() => {
		if (window.localStorage.getItem("isDark") === null) {
			setIsDark(false);
			document.querySelector(".root")?.classList.remove("dark");
		} else {
			setIsDark(true);
			document.querySelector(".root")?.classList.add("dark");
		}
	}, []);

	const darkmodeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (window.localStorage.getItem("isDark") === null) {
			window.localStorage.setItem("isDark", "yes");
			document.querySelector(".root")?.classList.add("dark");
		} else {
			window.localStorage.removeItem("isDark");
			document.querySelector(".root")?.classList.remove("dark");
		}
		console.log(document.querySelector(".root")?.classList);
	};

	return (
		<div className="header-wrapper">
			<header className="header-div">
				<div>
					<Link to={"/"} id="header-logo">
						<StaticImage src="../../static/logo.png" alt="logo" />
					</Link>
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
					<button onClick={darkmodeClick} className="mode-change-button">
						<FontAwesomeIcon icon={faMoon} className="darkmode-icon" />
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
