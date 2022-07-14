import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { RecoilRoot } from "recoil";

type LayoutProps = {
	//props: React.ComponentType;
	children?: React.ReactNode;
};

function Layout(props: LayoutProps) {
	console.log(props);

	return (
		<RecoilRoot>
			<div className="root">
				<Header />
				{props.children}
				<Footer />
			</div>
		</RecoilRoot>
	);
}

export default Layout;
