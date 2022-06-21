import { __ } from "@wordpress/i18n";

import { useBlockProps, RichText } from "@wordpress/block-editor";

const EditSummary = ({ attributes, setAttributes }) => {
    const { summary, content } = attributes;

    return (
        <details
            {...useBlockProps({
                className: "[ gamblino-block-faqs__details ] [ my-6! py-10! px-7! ]",
            })}
        >
            <summary className="flex-row">
                <RichText
                    tagName="span"
                    value={summary}
                    onChange={(value) => setAttributes({ summary: value })}
                    placeholder={__("Details", "block-gamblino")}
                />
            </summary>
            <RichText
                tagName="p"
                value={content}
                onChange={(value) => setAttributes({ content: value })}
                placeholder={__("Provide more info..", "block-gamblino")}
                style={{ padding: "0 2.3em" }}
            />
        </details>
    );
};

export default EditSummary;
