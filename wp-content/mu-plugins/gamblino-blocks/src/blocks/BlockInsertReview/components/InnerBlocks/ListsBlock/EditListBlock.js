import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useBlockProps, RichText, BlockControls } from "@wordpress/block-editor";
import { Icon, Tooltip } from "@wordpress/components";

import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";

const Lists = (props) => {
    const { attributes, setAttributes, isFocusOutside, setIsFocusOutside } = props;
    const { lists } = attributes;
    const [selectedText, setSelectedText] = useState(undefined);

    const onChangeTextHandler = (selectedIndexPosition, key, value) => {
        const listsCopy = [...lists];

        [(listsCopy[selectedIndexPosition][key] = value)];

        setAttributes({
            content: listsCopy,
        });
    };

    const newListHandler = () => {
        setAttributes({
            lists: [...lists, { content: "" }],
        });
    };

    const onRemoveTextHandler = (selectedTextIndexPosition) => {
        setAttributes({
            lists: [
                /* This is a JavaScript method called `splice`. It allows you to remove an item from an array and
                replace it with another item. */
                ...lists.slice(0, selectedTextIndexPosition),
                ...lists.slice(selectedTextIndexPosition + 1),
            ],
        });
    };

    return (
        <>
            {!isFocusOutside && (
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
            <ul className="[ block-insert-review__lists ]">
                {lists.map((list, index) => {
                    return (
                        <li
                            key={index}
                            onKeyDown={(e) => e.key === "enter" && setSelectedText(index)}
                            onClick={() => {
                                setSelectedText(index);
                                setIsFocusOutside(false);
                            }}
                        >
                            <RichText
                                tagName="p"
                                value={list.content}
                                onChange={(value) =>
                                    onChangeTextHandler(index, "content", value)
                                }
                                allowedFormats={[
                                    "core/bold",
                                    "core/italic",
                                    "core/link",
                                    "core/image",
                                ]} // Allow the content to be made bold or italic, but do not allow other formatting options
                                placeholder={__("Add a text...", "block-gamblino")}
                            />
                        </li>
                    );
                })}
                <li>
                    <Tooltip text={__("Add feature text", "block-gamblino")}>
                        <button
                            type="button"
                            className="mt-10"
                            aria-label={__("Add feature text", "block-gamblino")}
                            onClick={newListHandler}
                        >
                            <Icon icon="plus" />
                        </button>
                    </Tooltip>
                </li>
            </ul>
        </>
    );
};

export default ElementWithFocusOutside(Lists);
