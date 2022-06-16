// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const SaveExcerptBlock = ({ attributes }) => {
    const { excerpt } = attributes;
    return (
        <>
            {excerpt ? (
                <RichText.Content
                    className="block-insert-review__description"
                    tagName="p"
                    value={excerpt}
                />
            ) : null}
        </>
    );
};

export default SaveExcerptBlock;
