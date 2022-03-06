import { useState, useEffect } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import { RichText, store as blockEditorStore } from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";

import { withNotices } from "@wordpress/components";

import { useSelect } from "@wordpress/data";

// WordpRess Sidebar Components
import InspectorControlsImage from "../../../components/InspectorControls/ControlsImage";
import BlockControlsMediaReplaceFlow from "../../../components/BlockControls/BlockControlsMediaReplaceFlow";
import InspectorControlsRangeControl from "../../../components/InspectorControls/ControlsRangeControl";

// Feature Blocks components
import HeaderImage from "./HeaderImage";

// Style
import "./Header.scss";

const Header = ({ ...props }) => {
    const { setAttributes, attributes } = props;
    const { headerTitle, reviewScore, id, url, alt, noticeUI } = attributes;
    const [blobURL, setBlobURL] = useState(undefined);

    const setHeaderTitleHandler = (titleValue) => {
        setAttributes({ headerTitle: titleValue });
    };

    useEffect(() => {
        // checking if there is no image ID
        if (!id && isBlobURL(url)) {
            setAttributes({ url: undefined, alt: "" });
        }
    }, []);

    useEffect(() => {
        setAttributes({ reviewScore });
    }, [reviewScore, id, url]);

    // prettier-ignore
    const onSelectImageHandler = (image) => {
        if (!image || !image.url) {
            return setAttributes({ id: undefined, url: undefined, alt: '' })
        }
        return setAttributes({ id: image.id, url: image.url, alt: image.alt })
    };

    const onSelectURLImageHandler = (urlImage) => {
        setAttributes({
            id: undefined,
            url: urlImage,
            alt: undefined,
        });
    };

    const onUploadErrorHandler = (messageError) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(messageError);
    };

    const onClickRemoveImageHandler = () =>
        setAttributes({ id: undefined, url: undefined, alt: "" });

    const onChangeAltImageTextHandler = (altValue) => {
        setAttributes({ alt: altValue });
    };

    // prettier-ignore
    const selectImageObject = useSelect((select) => {
        const { getMedia } = select("core");

        return id ? getMedia(id) : null;
    }, [id]); // the imageId is the dependency that will check for this custom hook. It's like useEffect

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

            <InspectorControlsRangeControl
                label={__("Score Range", "team-members")}
                value={reviewScore}
                onChange={(rangeValue) => setAttributes({ reviewScore: rangeValue })}
                min={1}
                max={6}
            />

            <header className="header">
                <HeaderImage
                    onSelect={onSelectImageHandler}
                    onSelectURL={onSelectURLImageHandler}
                    onError={onUploadErrorHandler}
                    {...attributes}
                />
                <RichText
                    tagName={"h2"}
                    value={headerTitle}
                    onChange={setHeaderTitleHandler}
                    placeholder={__("Add a title...", "block-gamblino")}
                />
            </header>
        </>
    );
};

export default withNotices(Header);
