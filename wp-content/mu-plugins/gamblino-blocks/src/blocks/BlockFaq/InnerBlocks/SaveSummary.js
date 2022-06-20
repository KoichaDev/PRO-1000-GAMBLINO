import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

const SaveSummary = ({ attributes }) => {
    const { summary, content } = attributes;

    return (
        <details {...useBlockProps.save()}>
            <RichText.Content tagName="summary" value={summary} />
            <RichText.Content tagName="p" value={content} />
        </details>
    );
};

export default SaveSummary;
