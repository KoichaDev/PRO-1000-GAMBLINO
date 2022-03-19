import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const HeaderSave = ({ attributes }) => {
    const { author } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {author && (
                <dl>
                    <dt>Author Name:</dt>
                    <RichText.Content value={author} tagName="dd" />
                </dl>
            )}
        </div>
    );
};

export default HeaderSave;
