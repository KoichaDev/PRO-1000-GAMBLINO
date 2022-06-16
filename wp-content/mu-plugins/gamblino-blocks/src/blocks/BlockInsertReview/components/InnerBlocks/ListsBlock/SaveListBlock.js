import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const SaveListBlock = ({ attributes }) => {
    const { lists } = attributes;
    return (
        <>
            {lists.length > 0 && (
                <ul className="block-insert-review__lists">
                    {lists.map((list, index) => {
                        return (
                            <li key={index}>
                                <RichText.Content tagName="p" value={list.content} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
};

export default SaveListBlock;
