// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, } from "@wordpress/block-editor";

// WP Block styles
import "./editor.scss";

const Edit = (props) => {
	return (
		<section {...useBlockProps()} className="[ block-ranking-card ]">
			test
		</section>
	);
};

export default Edit;
