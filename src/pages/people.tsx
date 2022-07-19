import "../scss/people.scss";
import Layout from "components/Layout";
import React, { FunctionComponent, useEffect } from "react";
import PersonInfo from "components/PersonInfo";

function people() {
	return (
		<Layout>
			<div className="people-wrapper">
				<section className="people-group1">
					<span>
						Electronics and Telecommunications Research Institute, South Korea
					</span>
					<ul>
						<li>
							<PersonInfo role="rororo" />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
						<li>
							<PersonInfo />
						</li>
					</ul>
				</section>
				<section className="people-group2"></section>
			</div>
		</Layout>
	);
}
export default people;
