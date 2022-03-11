import { useBlockProps } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

const HeaderSave = ({ attributes }) => {
    const { author } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {author && (
                <div>
                    <p>Author Name:</p>
                    <RichText.Content value={author} tagName="p" />
                </div>
            )}
        </div>
    );
};

export default HeaderSave;
