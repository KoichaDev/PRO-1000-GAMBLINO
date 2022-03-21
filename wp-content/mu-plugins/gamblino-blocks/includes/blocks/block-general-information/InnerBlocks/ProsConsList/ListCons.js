import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import { Icon, Tooltip } from "@wordpress/components";

import './ProsCons.scss';

const ListPros = ({ consTextLists, setAttributes }) => {
    const [selectedText, setSelectedText] = useState(undefined);

    const onChangeTextHandler = (selectedIndexPosition, key, value) => {
        const consTextListsCopy = [...consTextLists];

        [(consTextListsCopy[selectedIndexPosition][key] = value)];

        setAttributes({
            text: consTextListsCopy,
        });
    };

    const newListHandler = () => {
        setAttributes({
            consTextLists: [...consTextLists, { text: "" }],
        });
    };

    const onRemoveTextHandler = (selectedTextIndexPosition) => {
        setAttributes({
            consTextLists: [
                /* This is a JavaScript method called `splice`. It allows you to remove an item from an array and
                replace it with another item. */
                ...consTextLists.slice(0, selectedTextIndexPosition),
                ...consTextLists.slice(selectedTextIndexPosition + 1),
            ],
        });
    };

    return (
        <div {...useBlockProps()}>

            <div className="wp-block-gamblino-list-cons">
                {consTextLists[selectedText] && (
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
                    {consTextLists.map((featureList, index) => {
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