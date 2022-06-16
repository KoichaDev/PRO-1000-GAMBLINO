import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const EditExcerptBlock = ({ attributes, setAttributes }) => {
    const { excerpt } = attributes;
    return (
        <RichText
            tagName="p"
            className="block-insert-review__description"
            value={excerpt}
            onChange={(value) => setAttributes({ excerpt: value })}
            placeholder={__("Add description...", "block-gamblino")}
        />
    );
};

export default EditExcerptBlock;
