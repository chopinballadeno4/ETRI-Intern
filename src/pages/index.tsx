import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import Header from "components/Header";
import { RecoilRoot } from "recoil";

const IndexPage: FunctionComponent = function () {
	return (
		<div>
			<RecoilRoot>
				<Header />
			</RecoilRoot>
		</div>
	);
};

export default IndexPage;
