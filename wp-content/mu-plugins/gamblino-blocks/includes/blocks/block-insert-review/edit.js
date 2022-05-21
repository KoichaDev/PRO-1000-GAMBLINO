// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import Lists from "./component/Lists";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {
	const { title, excerpt, lists } = attributes
	return (
		<section {...useBlockProps({
			className: '[ block-insert-review ]'
		})}>
			<RichText
				tagName="h2"
				className="block-insert-review__title"
				value={title}
				onChange={(value) => setAttributes({ title: value })}
				placeholder={__("Add a title...", "block-gamblino")}
			/>
			<RichText
				tagName="p"
				className="block-insert-review__excerpt"
				value={excerpt}
				onChange={(value) => setAttributes({ excerpt: value })}
				placeholder={__("Add excerpt...", "block-gamblino")}
			/>

			<Lists lists={lists} setAttributes={setAttributes} />

		</section>
	);
};

export default Edit;
