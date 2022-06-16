// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import InspectorPanelControls from "./components/InspectorControls/InspectorPanelControls";
import { templateContent } from "./constants/templateContent";

// WP Block styles
import "./editor.scss";

const Edit = (props) => {
	const { attributes } = props;
	const { backgroundColor } = attributes;

	return (
		<>
			<InspectorPanelControls {...props} />

			<section
				{...useBlockProps({
					style: {
						backgroundColor,
					},
				})}
				className="[ block-insert-review ] [ my-10 ]"
			>
				<InnerBlocks template={templateContent} />
			</section>
		</>
	);
};

export default Edit;
