import { __ } from "@wordpress/i18n";

import metaDataHeader from "./meta-data-header";
import metaDataBodyText from "./meta-data-body-text";
import metaDataProsCons from "./meta-data-pros-cons";
import metaDataButton from "./meta-data-button";

const metaDataBlock = {
	title: __("General Information Header", "block-gamblino"),
	description: __("General Information Header", "block-gamblino"),
	icon: "group",
	parent: ["gamblino-block/general-information"],
	supports: {
		reusable: false, //removing this block as reusable
		html: false, //removing this block to edit the HTMl itself
	},
	attributes: {
		...metaDataHeader,
		...metaDataBodyText,
		...metaDataProsCons,
		...metaDataButton,
	},
};

export default metaDataBlock;
