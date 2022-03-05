import { useState, useEffect, useRef } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    RichText,
    MediaPlaceholder,
    BlockControls,
    MediaReplaceFlow,
    InspectorControls,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";

import {
    Spinner,
    withNotices,
    ToolbarButton,
    PanelBody,
    TextareaControl,
    SelectControl,
    Icon,
    Tooltip,
    TextControl,
    Button,
} from "@wordpress/components";

import { useSelect } from "@wordpress/data";

import "./Header.scss";

const Header = ({ setAttributes, ...attributes }) => {
    const { headerTitle, id, url, alt, noticeUI } = attributes;
    const [blobURL, setBlobURL] = useState(undefined);
    const [selectedSocialMediaLink, setSelectedSocialMediaLink] = useState(
        undefined
    );

    useEffect(() => {
        // checking if there is no image ID
        if (!id && isBlobURL(url)) {
            setAttributes({ url: undefined, alt: "" });
        }
    }, []);

    /* This is a way to revoke (basically free the memory and optimize it) the blob URL when the url is changed. */
    useEffect(() => {
        if (isBlobURL(url)) {
            setBlobURL(url);
        } else {
            // if it is not blob URL, but normal URL, then we need to revoke the old blobl URL
            revokeBlobURL(blobURL);
            setBlobURL(undefined);
        }
    }, [url]);

    // prettier-ignore
    const onSelectImageHandler = (image) => {
        if (!image || !image.url) {
            return setAttributes({ id: undefined, url: undefined, alt: '' })
        }
        return setAttributes({ id: image.id, url: image.url, alt: image.alt })
    };

    const onUploadErrorHandler = (messageError) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(messageError);
    };

    // prettier-ignore
    const onClickRemoveImageHandler = () => setAttributes({ id: undefined, url: undefined, alt: "" });

    // prettier-ignore
    const onChangeAltImageTextHandler = (altValue) => setAttributes(
        { headerImg: { alt: altValue } });

    const onSelectURLImageHandler = (urlImage) => {
        setAttributes({
            id: undefined,
            url: urlImage,
            alt: undefined,
        });
    };

    const selectImageObject = useSelect(
        (select) => {
            const { getMedia } = select("core");

            return id ? getMedia(id) : null;
        },
        [id]
    ); // the imageId is the dependency that will check for this custom hook. It's like useEffect

    const onChangeImageSizeHandler = (newImageURL) =>
        setAttributes({ url: newImageURL });
    // This is equivalent to the wordpress global object:
    // wp.data.select("core/block-editor").getSettings()
    // prettier-ignore
    const selectImageSizes = useSelect(select => {
        return select(blockEditorStore).getSettings().imageSizes;
    }, [])

    const getImageSizeOptions = () => {
        if (!selectImageObject) return [];
        const options = [];

        const imageMediaSizes = selectImageObject.media_details.sizes;

        /* This is to get the image size options. */
        for (const key in imageMediaSizes) {
            const size = imageMediaSizes[key];

            // prettier-ignore
            const imageSize = selectImageSizes.find((imageSize) => imageSize.slug === key);

            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url,
                });
            }
        }

        return options;
    };

    const setHeaderTitleHandler = (titleValue) =>
        setAttributes({ headerTitle: titleValue });

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Image settings", "team-members")}>
                    {id && (
                        <SelectControl
                            label={__("Image Size", "team-members")}
                            options={getImageSizeOptions()}
                            value={url}
                            onChange={onChangeImageSizeHandler}
                        />
                    )}

                    {url && !isBlobURL(url) && (
                        <TextareaControl
                            label={__("Alt Image text", "team-members")}
                            help={__(
                                "Alternative text describes your image to people can't see it. Add a short description with its key details.",
                                "team-members"
                            )}
                            value={alt}
                            onChange={onChangeAltImageTextHandler}
                        />
                    )}
                </PanelBody>
            </InspectorControls>

            {url && (
                <BlockControls group="inline">
                    {/* This component will ensure we can replace the old image value with new one */}
                    <MediaReplaceFlow
                        name={__("Replace Image", "team-member")}
                        onSelect={onSelectImageHandler}
                        onSelectURL={onSelectURLImageHandler}
                        onError={onUploadErrorHandler}
                        accept={"image/*"} //Will disable files that is not image
                        mediaId={id}
                        mediaUrl={url}
                    />

                    <ToolbarButton onClick={onClickRemoveImageHandler}>
                        {__("Remove Image", "team-members")}
                    </ToolbarButton>
                </BlockControls>
            )}
            <header className="header">
                {url && (
                    <div
                        className={`wp-block-blocks-course-team-member-img ${isBlobURL(url) ? " is-loading" : ""
                            }`}
                    >
                        <img src={url} alt={alt} />
                        {isBlobURL(url) && <Spinner />}
                    </div>
                )}
                <MediaPlaceholder
                    icon="admin-users"
                    onSelect={onSelectImageHandler}
                    onSelectURL={onSelectURLImageHandler}
                    onError={onUploadErrorHandler}
                    accept={"image/*"} //Will disable files that is not image
                    allowedTypes={["image"]} // This will show on the computer the files are not image will be disabled (can't be selected)
                    disableMediaButtons={url} // This will disable the media upload if there is a image being selected
                    notices={noticeUI}
                />
                <RichText
                    value={headerTitle}
                    onChange={setHeaderTitleHandler}
                    tagName={"h2"}
                    placeholder={__("Add a title...", "block-gamblino")}
                />
            </header>
        </>
    );
};

export default withNotices(Header);
