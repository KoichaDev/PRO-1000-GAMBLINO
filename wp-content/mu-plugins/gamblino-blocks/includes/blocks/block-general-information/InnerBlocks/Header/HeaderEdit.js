import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

// styles
import "./HeaderEdit.scss";

const HeaderEdit = ({ attributes, setAttributes }) => {
    const { author } = attributes;

    return (
        <div {...useBlockProps()}>
            <div>
                <p>Author Name:</p>
                <RichText
                    value={author}
                    onChange={(values) => setAttributes({ author: values })}
                    tagName="p"
                    placeholder={__("author name...", "block-gamblino")}
                />
            </div>
        </div>
    );
};

export default HeaderEdit;
