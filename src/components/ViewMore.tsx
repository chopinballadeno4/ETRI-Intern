import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";
import "./styles/viewmore.scss";

type ViewMore_type = {
	source: string;
};

function ViewMore({ source }: ViewMore_type) {
	return (
		<button
			onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
				event.preventDefault();
				void navigate(`/${source}`);
			}}
			className="ViewMore_button"
		>
			<FontAwesomeIcon icon={faArrowRightLong} />
			<span>View more</span>
		</button>
	);
}

export default ViewMore;
