import "./styles/layout.scss";
import { Link } from "gatsby";
import React, { useEffect } from "react";
import Footer from "../common/Footer";
import Header from "../common/Header";

type LayoutProps = {
	//props: React.ComponentType;
	children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
	return (
		<div className="root">
			<Header />
			{props.children}
			<Footer />
		</div>
	);
}

export default Layout;
