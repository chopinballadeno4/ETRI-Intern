import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Header from "components/Header";
import Footer from "components/Footer";
import { RecoilRoot } from "recoil";
// import { useRecoilState } from "recoil";
// import { isDarkAtom } from "../atoms";

const IndexPage: FunctionComponent = function () {
	return (
		<div className="root">
			<RecoilRoot>
				<Header />
				<div style={{ width: "100%" }}></div>
				<Footer />
			</RecoilRoot>
		</div>
	);
};

export default IndexPage;
