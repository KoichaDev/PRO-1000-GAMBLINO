import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { Icon, Tooltip } from "@wordpress/components";

import './ProsCons.scss';

const ListPros = ({ prosTextLists, setAttributes }) => {
    const [selectedText, setSelectedText] = useState(undefined);

    const onChangeTextHandler = (selectedIndexPosition, key, value) => {
        const prosTextListsCopy = [...prosTextLists];

        [(prosTextListsCopy[selectedIndexPosition][key] = value)];

        setAttributes({
            text: prosTextListsCopy,
        });
    };

    const newListHandler = () => {
        setAttributes({
            prosTextLists: [...prosTextLists, { text: "" }],
        });
    };

    const onRemoveTextHandler = (selectedTextIndexPosition) => {
        setAttributes({
            prosTextLists: [
                /* This is a JavaScript method called `splice`. It allows you to remove an item from an array and
                replace it with another item. */
                ...prosTextLists.slice(0, selectedTextIndexPosition),
                ...prosTextLists.slice(selectedTextIndexPosition + 1),
            ],
        });
    };

    return (
        <div {...useBlockProps()}>

            <div className="gamblino-feature-list">
                {prosTextLists[selectedText] && (
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
                    {prosTextLists.map((featureList, index) => {
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
                                    allowedFormats={['core/bold', 'core/italic', 'core/link']} // Allow the content to be made bold or italic, but do not allow other formatting options
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
}

export default ListPros