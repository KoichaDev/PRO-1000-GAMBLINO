import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    RichText,
    BlockControls,
} from "@wordpress/block-editor";
import { Icon, Tooltip } from "@wordpress/components";

const FeatureBodyContentEdit = ({ attributes, setAttributes }) => {
    const { featureTitle, featureListText } = attributes;
    const [selectedText, setSelectedText] = useState(undefined);

    const onChangeTextHandler = (selectedIndexPosition, key, value) => {
        const featureListTextCopy = [...featureListText];

        [(featureListTextCopy[selectedIndexPosition][key] = value)];

        setAttributes({
            text: featureListTextCopy,
        });
    };

    const newListHandler = () => {
        setAttributes({
            featureListText: [...featureListText, { text: "" }],
        });
    };

    const onRemoveTextHandler = (selectedTextIndexPosition) => {
        setAttributes({
            featureListText: [
                /* This is a JavaScript method called `splice`. It allows you to remove an item from an array and
                replace it with another item. */
                ...featureListText.slice(0, selectedTextIndexPosition),
                ...featureListText.slice(selectedTextIndexPosition + 1),
            ],
        });
    };

    return (
        <div {...useBlockProps()}>
            <RichText
                tagName={"h2"}
                value={featureTitle}
                onChange={(titleValue) => setAttributes({ featureTitle: titleValue })}
                placeholder={__("Add a title...", "block-gamblino")}
            />
            <hr />

            <div className="gamblino-feature-list">
                {featureListText[selectedText] && (
                    <BlockControls
                        controls={[
                            {
                                title: __("Remove text", "block-gamblino"),
                                icon: "trash",
                                onClick: onRemoveTextHandler.bind(null, selectedText),
                            },
                        ]}
                    ></BlockControls>
                )}
                <ul>
                    {featureListText.map((featureList, index) => {
                        return (
                            <li
                                key={index}
                                onKeyDown={(e) => e.key === "enter" && setSelectedText(index)}
                                onClick={() => setSelectedText(index)}
                            >
                                <RichText
                                    tagName={"p"}
                                    value={featureList.text}
                                    onChange={(value) =>
                                        onChangeTextHandler(index, "text", value)
                                    }
                                    allowedFormats={[]} // Allow the content to be made bold or italic, but do not allow other formatting options
                                    placeholder={__("Add a text...", "block-gamblino")}
                                />
                            </li>
                        );
                    })}
                    <li>
                        <Tooltip text={__("Add feature text", "block-gamblino")}>
                            <button
                                type="button"
                                aria-label={__("Add feature text", "block-gamblino")}
                                onClick={newListHandler}
                            >
                                <Icon icon="plus" />
                            </button>
                        </Tooltip>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FeatureBodyContentEdit;
