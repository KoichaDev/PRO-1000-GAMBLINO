// WP Block Dependencies
import { useEffect, useRef } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";

const EditTitleBlock = ({ attributes, setAttributes }) => {
    const titleRef = useRef();

    useEffect(() => {
        titleRef.current.focus();
    }, []);
    return (
        <RichText
            ref={titleRef}
            tagName="h2"
            className="block-insert-review__title"
            value={attributes.title}
            allowedFormats={["core/bold", "core/italic"]}
            onChange={(value) => setAttributes({ title: value })}
            placeholder={__("Add a title...", "block-gamblino")}
        />
    );
};

export default EditTitleBlock;
