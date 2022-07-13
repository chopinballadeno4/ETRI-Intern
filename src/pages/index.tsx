import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Header from "components/Header";
import { RecoilRoot } from "recoil";
import "../scss/reset.scss";
// import { useRecoilState } from "recoil";
// import { isDarkAtom } from "../atoms";

const IndexPage: FunctionComponent = function () {
	return (
		<RecoilRoot>
			<div className="root">
				<Header />
			</div>
		</RecoilRoot>
	);
};

export default IndexPage;
