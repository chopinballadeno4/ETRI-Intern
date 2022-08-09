import React from "react";
import Layout from "components/Layout";
import "./styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function IndexPage() {
	return (
		<Layout>
			<div className="home-wrapper">
				<section className="home-research">
					<StaticImage src="../../static/home.jpg" alt="img" />
					<div className="home-image-text">
						<span>
							Continuous local adaptation to user response in real environment
							service situations (Local) Robot intelligence technology
							development
						</span>
						<button>
							<FontAwesomeIcon icon={faArrowRightLong} />
							<span>View more</span>
						</button>
					</div>
				</section>
				<section className="home-blog">
					<div className="home-blog1">
						<div>
							<StaticImage
								src="../../static/basic.jpg"
								className="home-image"
								alt="img"
							/>
							<div>
								<span>title1</span>
								<button>
									<FontAwesomeIcon icon={faArrowRightLong} />
									<span>View more</span>
								</button>
							</div>
						</div>
					</div>
					<div className="home-blog2">
						<div>
							<div>
								<span>title2</span>
								<button>
									<FontAwesomeIcon icon={faArrowRightLong} />
									<span>View more</span>
								</button>
							</div>
							<StaticImage
								src="../../static/basic.jpg"
								className="home-image"
								alt="img"
							/>
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}

export default IndexPage;
