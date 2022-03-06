import { useState, useEffect } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import {
    RichText,
    MediaPlaceholder,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";

import { Spinner, withNotices, ToolbarButton } from "@wordpress/components";

import { useSelect } from "@wordpress/data";

// Components
import InspectorControlsImage from "../../../components/InspectorControls/InspectorControlsImage";
import BlockControlsMediaReplaceFlow from "../../../components/BlockControls/BlockControlsMediaReplaceFlow";

import "./Header.scss";

const Header = ({ setAttributes, ...attributes }) => {
    const { headerTitle, id, url, alt, noticeUI } = attributes;
    const [blobURL, setBlobURL] = useState(undefined);

    useEffect(() => {
        // checking if there is no image ID
        if (!id && isBlobURL(url)) {
            setAttributes({ url: undefined, alt: "" });
        }
    }, []);

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
            <InspectorControlsImage
                imageId={id}
                imageUrl={url}
                blobURL={blobURL}
                setBlobURL={setBlobURL}
                onChangeImageSize={onChangeImageSizeHandler}
                imageAlt={alt}
                onChangeAlt={onChangeAltImageTextHandler}
                getImageSizeOptions={getImageSizeOptions()}
            />

            <BlockControlsMediaReplaceFlow
                imageId={id}
                imageUrl={url}
                onSelectImage={onSelectImageHandler}
                onSelectURL={onSelectURLImageHandler}
                onError={onUploadErrorHandler}
                onClickRemoveImage={onClickRemoveImageHandler}
            />

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
