import "../styles/common.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link, navigate } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface IViewMore {
	slug: string;
}

function ViewMore({ slug }: IViewMore) {
	return (
		<Link to={slug} className="ViewMore_Link">
			<FontAwesomeIcon icon={faArrowRightLong} />
			<span>View more</span>
		</Link>
	);
}

export default ViewMore;
