import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IPersonInfo {
	name: string;
	contact: string;
	department: string;
	work: string;
	// thumbnail: string;
}

export interface IPersonListType {
	node: {
		id: string;
		frontmatter: IPersonInfo;
	};
}
