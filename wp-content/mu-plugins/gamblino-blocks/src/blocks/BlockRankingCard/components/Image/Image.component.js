import { __ } from "@wordpress/i18n";

import { useState, useEffect } from "@wordpress/element";

import { useSelect } from "@wordpress/data";

import {
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
    InspectorControls,
    store as BlockEditorStore,
} from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";
import {
    Spinner,
    withNotices,
    ToolbarButton,
    PanelBody,
    TextareaControl,
    SelectControl,
} from "@wordpress/components";

import { BsCheckLg, BsImage } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const ImageEdit = (props) => {
    const { attributes, setAttributes, noticeOperations, noticeUI } = props;
    const { id, url, alt } = attributes;
    const [blobURL, setblobURL] = useState(undefined);

    const imageObject = useSelect(
        (select) => {
            const { getMedia } = select("core");
            return id ? getMedia(id) : null;
        },
        [id]
    );

    const imageSizes = useSelect((select) => {
        return select(BlockEditorStore).getSettings().imageSizes;
    }, []);

    const getImageSizeOptions = () => {
        if (!imageObject) return [];

        const options = [];

        const sizes = imageObject.media_details.sizes;

        for (const key in sizes) {
            const size = sizes[key];

            const imageSize = imageSizes.find((size) => size.slug === key);

            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url,
                });
            }
        }

        return options;
    };

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

    const removeImageHandler = () => {
        setAttributes({
            id: undefined,
            url: undefined,
            alt: "",
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Image Settings", "block-gamblino")}>
                    {id && (
                        <SelectControl
                            label={__("Image Size", "block-gamblino")}
                            options={getImageSizeOptions()}
                            value={url}
                            onChange={(newUrl) => setAttributes({ url: newUrl })}
                        />
                    )}

                    {url && !isBlobURL(url) && (
                        <TextareaControl
                            label={__("Alt Text", "block-gamblino")}
                            value={alt}
                            onChange={(value) => setAttributes({ alt: value })}
                            help={__(
                                "Alternative text describes your image to people can't see it. Add a short description with its key details. This alt text will only change for this block, and not in general whole image of the media replacement of it",
                                "block-gamblino"
                            )}
                        />
                    )}
                </PanelBody>
            </InspectorControls>
            {url && (
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
                    <ToolbarButton onClick={removeImageHandler}>
                        {__(
                            <>
                                <FaTrash /> Remove Image
                            </>,
                            "block-gamblino"
                        )}
                    </ToolbarButton>
                </BlockControls>
            )}

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
