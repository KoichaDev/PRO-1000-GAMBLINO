import { __ } from "@wordpress/i18n";

import { useState, useEffect } from "@wordpress/element";

import {
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
} from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import { Spinner, withNotices } from "@wordpress/components";

import { BsImage } from "react-icons/bs";

const ImageEdit = (props) => {
    const { attributes, setAttributes, noticeOperations, noticeUI } = props;
    const { id, url, alt } = attributes;
    const [blobURL, setblobURL] = useState(undefined);

    // Checking if the image is a blob url and if it is, it is setting the url to undefined and the alt
    // to an empty string. This is to avoid the spinner logo to "hang up" when reloading the current window of our block.
    // This edge case will happen if the user is trying to upload an image and reload the website right away
    useEffect(() => {
        if (!id && isBlobURL(url)) {
            setAttributes({
                url: undefined,
                alt: "",
            });
        }
    }, []);

    useEffect(() => {
        if (isBlobURL(url)) {
            setblobURL(url);
        } else {
            revokeBlobURL(blobURL);
            setblobURL();
        }
    }, [url]);

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
            alt: "",
        });
    };

    const onUploadErrorHandler = (message) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(message);
    };

    return (
        <>
            <BlockControls group="inline">
                <MediaReplaceFlow
                    name={__(
                        <>
                            <BsImage /> Replace Image
                        </>,
                        "block-gamblino"
                    )}
                    mediaId={id}
                    mediaURL={url}
                    onSelect={onSelectImageHandler}
                    onSelectURL={onSelectURLHandler}
                    onError={onUploadErrorHandler}
                    notices={noticeUI}
                    accept="image/*"
                    allowedTypes={["image"]}
                />
            </BlockControls>

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
                onError={onUploadErrorHandler}
                notices={noticeUI}
                accept="image/*"
                allowedTypes={["image"]}
                disableMediaButtons={url ? true : false}
            />
        </>
    );
};

export default withNotices(ImageEdit);
