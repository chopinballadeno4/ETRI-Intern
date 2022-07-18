import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

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
