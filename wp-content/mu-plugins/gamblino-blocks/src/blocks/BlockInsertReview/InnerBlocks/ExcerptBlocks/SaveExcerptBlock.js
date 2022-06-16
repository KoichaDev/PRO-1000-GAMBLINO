// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const SaveExcerptBlock = ({ attributes }) => {
    const { excerption } = attributes;
    return (
        <>
            {excerption ? (
                <RichText.Content
                    className="block-insert-review__description"
                    tagName="p"
                    value={excerption}
                />
            ) : null}
        </>
    );
};

export default SaveExcerptBlock;
