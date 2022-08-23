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
	useEffect(() => {
		if (window.localStorage.getItem("isDark") === null) {
			if (document.querySelector(".root")?.classList.contains("dark")) {
				document.querySelector(".root")?.classList.remove("dark");
			}
		} else {
			if (!document.querySelector(".root")?.classList.contains("dark")) {
				document.querySelector(".root")?.classList.add("dark");
			}
		}
	}, []);

	const darkmodeClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (window.localStorage.getItem("isDark") === null) {
			// set Darkmode
			window.localStorage.setItem("isDark", "yes");
			document.querySelector(".root")?.classList.add("dark");
		} else {
			// release Darkmode
			window.localStorage.removeItem("isDark");
			document.querySelector(".root")?.classList.remove("dark");
		}
	};

	return (
		<div id="header-wrapper">
			<header id="header-main">
				<div>
					<Link to={"/"} id="header-logo">
						<StaticImage src="../../static/logo.png" alt="logo" />
					</Link>
				</div>
				<nav id="header-link">
					<Link to={"/research"}>
						<span>Our research</span>
					</Link>
					<Link to={"/achievement"}>
						<span>Achievement</span>
					</Link>
					<Link to={"/blog"}>
						<span>Blog</span>
					</Link>
					<Link to={"/people"}>
						<span>People</span>
					</Link>
					<Link to={"/about"}>
						<span>About</span>
					</Link>
					<button onClick={darkmodeClick} id="header-button">
						<FontAwesomeIcon icon={faMoon} id="darkmode-icon" />
					</button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
