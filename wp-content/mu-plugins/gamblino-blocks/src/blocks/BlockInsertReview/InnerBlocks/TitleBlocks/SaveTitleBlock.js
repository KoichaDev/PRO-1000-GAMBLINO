import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const SaveTitleBlock = ({ attributes }) => {
    const { title } = attributes;
    return (
        <>
            {title ? (
                <RichText.Content
                    className="block-insert-review__title"
                    tagName="h2"
                    value={title}
                />
            ) : null}
        </>
    );
};

export default SaveTitleBlock;
