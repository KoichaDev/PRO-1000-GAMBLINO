import { useState, useEffect } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Icon, Tooltip } from "@wordpress/components";

const FeatureBodyContentEdit = ({ attributes, setAttributes }) => {
    const { featureTitle, featureListText } = attributes;

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
                <ul>
                    {featureListText.map((featureList, index) => {
                        return (
                            <li key={index}>
                                <RichText
                                    tagName={"p"}
                                    value={featureList.text}
                                    onChange={(value) =>
                                        onChangeTextHandler(index, "text", value)
                                    }
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
