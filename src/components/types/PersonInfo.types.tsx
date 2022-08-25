import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IPersonInfo {
	page: string;
	order: number;
	name: string;
	contact: string;
	work: string;
	department: string;
	image: {
		childImageSharp: {
			gatsbyImageData: IGatsbyImageData;
		};
	};
	// thumbnail: string;
}

export interface IPersonListType {
	node: {
		id: string;
		frontmatter: IPersonInfo;
	};
}
