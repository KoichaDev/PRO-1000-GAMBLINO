// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import { useState } from "@wordpress/element";

// Components
import Lists from "./component/Lists";
import Button from "./component/Button";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {


	return (
		<section
			{...useBlockProps({
				className: "[ block-insert-review ]",
			})}
		>
			<RichText
				tagName="h2"
				className="block-insert-review__title"
				value={attributes.title}
				onChange={(value) => setAttributes({ title: value })}
				placeholder={__("Add a title...", "block-gamblino")}
			/>
			<RichText
				tagName="p"
				className="block-insert-review__description"
				value={attributes.description}
				onChange={(value) => setAttributes({ description: value })}
				placeholder={__("Add description...", "block-gamblino")}
			/>

			<Lists lists={attributes.lists} setAttributes={setAttributes} />

			<Button
				onChange={(value) => setAttributes({ buttonText: value })}
				value={attributes.buttonText}
				placeholder="Add text.."
				{...attributes}
				setAttributes={setAttributes}
			/>
		</section>
	);
};

export default Edit;
