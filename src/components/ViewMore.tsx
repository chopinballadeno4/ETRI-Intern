import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link, navigate } from "gatsby";
import "./styles/viewmore.scss";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface IViewMore {
	node: {
		html: string;
		fields: {
			slug: string;
		};
		frontmatter: {
			page: string;
			language: string;
			title: string;
			thumbnail: {
				childImageSharp: {
					gatsbyImageData: IGatsbyImageData;
				};
			};
			date: string | Date;
		};
	};
}

function ViewMore({ node }: IViewMore) {
	return (
		<Link to={node?.fields.slug} className="ViewMore_Link">
			<FontAwesomeIcon icon={faArrowRightLong} />
			<span>View more</span>
		</Link>
	);
}

export default ViewMore;
