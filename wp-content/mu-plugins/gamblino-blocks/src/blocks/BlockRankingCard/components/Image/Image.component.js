import { __ } from "@wordpress/i18n";

import { MediaPlaceholder } from "@wordpress/block-editor";

import { BsImage } from "react-icons/bs";

const ImageEdit = ({ attributes, setAttributes }) => {
    console.log(attributes);
    return (
        <>
            <MediaPlaceholder
                icon={BsImage}
                onSelect={(value) => console.log(value)}
                onSelectURL={(value) => console.log(value)}
                onError={(value) => console.log(value)}
                accept="image/*"
                allowedTypes={["image"]}
            />
        </>
    );
};

export default ImageEdit;
