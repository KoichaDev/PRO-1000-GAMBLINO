// WP Dependencies
import {
    MediaPlaceholder,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { Spinner } from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";
import { useSelect } from "@wordpress/data";

import InspectorControlsImage from "../../../components/InspectorControls/ControlsImage";
import BlockControlsMediaReplaceFlow from "../../../components/BlockControls/BlockControlsMediaReplaceFlow";

const HeaderImage = ({ blobURL, setBlobURL, ...props }) => {
    const { attributes, setAttributes } = props;
    const { id, url, alt, noticeUI } = attributes;

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

    const onErrorUploadHandler = (messageError) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(messageError);
    };

    const onClickRemoveImageHandler = () => {
        setAttributes({ id: undefined, url: undefined, alt: "" });
    };

    const onChangeAltImageTextHandler = (altValue) => {
        setAttributes({ alt: altValue });
    };

    // prettier-ignore
    const selectImageObject = useSelect((select) => {
        const { getMedia } = select("core");

        return id ? getMedia(/* `id` is the image id from the media library. */
            id) : null;
    }, [id]); // the imageId is the dependency that will check for this custom hook. It's like useEffect

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
                onError={onErrorUploadHandler}
                onClickRemoveImage={onClickRemoveImageHandler}
            />
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
                onError={onErrorUploadHandler}
                accept={"image/*"} //Will disable files that is not image
                allowedTypes={["image"]} // This will show on the computer the files are not image will be disabled (can't be selected)
                disableMediaButtons={url} // This will disable the media upload if there is a image being selected
                notices={noticeUI}
            />
        </>
    );
};

export default HeaderImage;
