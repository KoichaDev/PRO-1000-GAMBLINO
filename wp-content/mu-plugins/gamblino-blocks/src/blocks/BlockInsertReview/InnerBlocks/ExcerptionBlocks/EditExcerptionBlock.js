import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const EditExcerptionBlock = ({ attributes, setAttributes }) => {
    const { excerption } = attributes;
    return (
        <RichText
            tagName="p"
            className="block-insert-review__description"
            value={excerption}
            onChange={(value) => setAttributes({ excerption: value })}
            placeholder={__("Add description...", "block-gamblino")}
        />
    );
};

export default EditExcerptionBlock;
