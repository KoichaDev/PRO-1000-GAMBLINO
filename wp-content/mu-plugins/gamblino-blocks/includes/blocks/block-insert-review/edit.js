// WP Block Dependencies
import { useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

// Components
import Lists from "./component/Lists";
import Button from "./component/Button";

// WP Block styles
import "./editor.scss";

const Edit = ({ attributes, setAttributes }) => {

	const titleRef = useRef();

	useEffect(() => {
		titleRef.current.focus();
	}, [])


	return (
		<section className="[ block-insert-review ]">
			<RichText
				ref={titleRef}
				tagName="h2"
				className="block-insert-review__title"
				value={attributes.title}
				allowedFormats={["core/bold", "core/italic"]}
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
