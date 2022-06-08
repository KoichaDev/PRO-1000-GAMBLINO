// WP Block Dependencies
import { useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText, InnerBlocks } from "@wordpress/block-editor";

// Components
import Lists from "./component/Lists";

// WP Block styles
import "./editor.scss";

const Edit = (props) => {
	const { attributes, setAttributes } = props;
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

			<InnerBlocks template={[["gamblino-block/button"]]} />
		</section>
	);
};

export default Edit;
