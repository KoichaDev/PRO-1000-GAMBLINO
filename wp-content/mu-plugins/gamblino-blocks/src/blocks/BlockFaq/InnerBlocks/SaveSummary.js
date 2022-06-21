import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

const SaveSummary = ({ attributes }) => {
    const { summary, content } = attributes;

    return (
        <details
            {...useBlockProps.save({
                className: "[ gamblino-block-faqs__details ] [ my-6 py-10 px-7 ]",
            })}
        >
            <summary className="flex-row">
                <RichText.Content
                    tagName="span"
                    value={summary}
                    style={{ marginTop: "-3px" }}
                />
            </summary>
            <RichText.Content
                tagName="p"
                value={content}
                style={{ padding: "0 2.3em" }}
            />
        </details>
    );
};

export default SaveSummary;
