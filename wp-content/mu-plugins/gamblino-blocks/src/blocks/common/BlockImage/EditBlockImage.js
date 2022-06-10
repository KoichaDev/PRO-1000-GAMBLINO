import { __ } from "@wordpress/i18n";

import { useState, useEffect } from "@wordpress/element";
import { Button, ButtonGroup } from "@wordpress/components";

import { useSelect } from "@wordpress/data";

import {
    useBlockProps,
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

import { BsImage } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const EditBlockImage = (props) => {
    const { attributes, setAttributes, noticeOperations, noticeUI } = props;
    const { id, url, alt, imageDimension, imageSizeVariant } = attributes;
    const [blobURL, setblobURL] = useState(undefined);

    const [buttons, setButtons] = useState({
        twentyFive: { id: 1, label: "25%", value: imageDimension === "25%" ? true : false },
        fifty: { id: 2, label: "50%", value: imageDimension === "50%" ? true : false },
        seevntyFive: { id: 3, label: "75%", value: imageDimension === "75%" ? true : false },
        oneHundred: { id: 4, label: "100%", value: imageDimension === "100%" ? true : false },
    });

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


    const setSelected = (id) => {
        setButtons((currentButtons) => {
            return Object.fromEntries(
                Object.entries(currentButtons).map(([key, button]) => {
                    const newValue = button.value ? false : id === button.id;
                    return [key, { ...button, value: newValue }];
                })
            );
        });
    };


    const getVariantButtonTypes = (value) => (!value ? "small" : imageSizeVariant);

    const buttonImageHandler = (button) => {
        setAttributes({ imageDimension: button.label })
        setSelected(button.id)
    }

    return (
        <div {...useBlockProps()}>
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

                <PanelBody title={__("Image Dimension", "block-gamblino")}>
                    <ButtonGroup>
                        {Object.values(buttons).map((button) => {
                            return (
                                <Button
                                    key={button.label}
                                    variant={getVariantButtonTypes(button.value)}
                                    onClick={buttonImageHandler.bind(null, button)}
                                >
                                    {button.label}
                                </Button>
                            );
                        })}
                    </ButtonGroup>
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
                    <img src={url} alt={alt} style={{ width: imageDimension }} />
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
        </div>
    );
};

export default withNotices(EditBlockImage);
