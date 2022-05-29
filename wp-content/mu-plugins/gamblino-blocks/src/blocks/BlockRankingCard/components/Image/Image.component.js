import { __ } from "@wordpress/i18n";

import { MediaPlaceholder } from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";
import { Spinner } from "@wordpress/components";

import { BsImage } from "react-icons/bs";

const ImageEdit = ({ attributes, setAttributes }) => {
    const { url, alt } = attributes;

    const onSelectImageHandler = (image) => {
        if (!image || !image.url) {
            setAttributes({
                id: undefined,
                url: undefined,
                alt: "",
            });
        }

        setAttributes({
            id: image.id,
            url: image.url,
            alt: image.alt,
        });
    };

    const onSelectURLHandler = (newUrl) => {
        setAttributes({
            id: undefined,
            url: newUrl,
            alt: ''
        });
    };

    return (
        <>
            {url && (
                <div
                    className={`[ media-image ] ${isBlobURL(url) ? " [ is-loading ]" : ""
                        }`}
                >
                    <img src={url} alt={alt} />

                    {isBlobURL(url) && <Spinner />}
                </div>
            )}

            <MediaPlaceholder
                icon={BsImage}
                onSelect={onSelectImageHandler}
                onSelectURL={onSelectURLHandler}
                onError={(value) => console.log(value)}
                accept="image/*"
                allowedTypes={["image"]}
                disableMediaButtons={url ? true : false}
            />
        </>
    );
};

export default ImageEdit;
