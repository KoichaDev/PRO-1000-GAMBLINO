import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

const EditSummary = ({ attributes, setAttributes }) => {
    const { summary, content } = attributes;

    return (
        <details {...useBlockProps()}>
            <RichText
                tagName="summary"
                value={summary}
                onChange={(value) => setAttributes({ summary: value })}
                placeholder={__("Details text...", "block-gamblino")}
            />
            <RichText
                tagName="p"
                value={content}
                onChange={(value) => setAttributes({ content: value })}
                placeholder={__("Provide more info..", "block-gamblino")}
            />
        </details>
    );
};

export default EditSummary;
