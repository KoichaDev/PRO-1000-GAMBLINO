// WP Block Dependencies
import { useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

// Components
import Lists from "./component/Lists";
import Button from "@/common/wordpress/buttons/Button";

// WP Block styles
import "./editor.scss";

const Edit = (props) => {
	const { attributes, setAttributes } = props
	const { buttonTextAlignment } = attributes;
	const titleRef = useRef();

	useEffect(() => {
		titleRef.current.focus();
	}, []);

	return (
		<section {...useBlockProps()} className="[ block-insert-review ]">
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

			<Lists {...props} />

			<div class={`text-${buttonTextAlignment}`}>
				<Button
					className="mt-9"
					onChange={(value) => setAttributes({ buttonText: value })}
					value={attributes.buttonText}
					placeholder="Add text.."
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			</div>
		</section>
	);
};

export default Edit;
