// WP Dependencies
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import {
    MediaPlaceholder,
    store as blockEditorStore,
} from "@wordpress/block-editor";
import { Spinner } from "@wordpress/components";
import { isBlobURL } from "@wordpress/blob";
import { useSelect } from "@wordpress/data";

import InspectorControlsImage from "../../../components/InspectorControls/ControlsImage";
import InspectorControlsRangeControl from "../../../components/InspectorControls/ControlsRangeControl";
import BlockControlsMediaReplaceFlow from "../../../components/BlockControls/BlockControlsMediaReplaceFlow";

import "./RangeScoreEdit.scss";

const RangeScoreImage = ({ attributes, setAttributes }) => {
    // prettier-ignore
    const { rangeScore, rangeScoreImgId, rangeScoreImgUrl, rangeScoreImgAlt, noticeUI } = attributes;

    const [blobURL, setBlobURL] = useState(undefined);
    const [countImages, setCountImages] = useState([1, rangeScore]);

    /* This is to set the countImages array. */
    useEffect(() => {
        for (let i = 0; i < rangeScore; i++) {
            setCountImages((prevCountImages) => [...prevCountImages, i]);
        }
    }, [rangeScore, rangeScoreImgId, rangeScoreImgUrl]);

    const onChangeImageSizeHandler = (newImageURL) => {
        setAttributes({ rangeScoreImgUrl: newImageURL });
    };
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
            return setAttributes({ rangeScoreImgId: undefined, rangeScoreImgUrl: undefined, rangeScoreImgAlt: '' })
        }
        return setAttributes({ rangeScoreImgId: image.id, rangeScoreImgUrl: image.url, rangeScoreImgAlt: image.alt })
    };

    const onSelectURLImageHandler = (urlImage) => {
        setAttributes({
            rangeScoreImgId: undefined,
            rangeScoreImgUrl: urlImage,
            rangeScoreImgAlt: undefined,
        });
    };

    const onErrorUploadHandler = (messageError) => {
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice(messageError);
    };

    const onClickRemoveImageHandler = () => {
        setAttributes({
            rangeScoreImgId: undefined,
            rangeScoreImgUrl: undefined,
            rangeScoreImgAlt: "",
        });
    };

    const onChangeAltImageTextHandler = (altValue) => {
        setAttributes({ rangeScoreImgAlt: altValue });
    };

    // prettier-ignore
    const selectImageObject = useSelect((select) => {
        const { getMedia } = select("core");

        return rangeScoreImgId ? getMedia(rangeScoreImgId) : null;
    }, [rangeScoreImgId]); // the imageId is the dependency that will check for this custom hook. It's like useEffect

    return (
        <>
            <InspectorControlsImage
                imageId={rangeScoreImgId}
                imageUrl={rangeScoreImgUrl}
                blobURL={blobURL}
                setBlobURL={setBlobURL}
                onChangeImageSize={onChangeImageSizeHandler}
                imageAlt={rangeScoreImgAlt}
                onChangeAlt={onChangeAltImageTextHandler}
                getImageSizeOptions={getImageSizeOptions()}
            />

            <InspectorControlsRangeControl
                label={__("Score Range", "team-members")}
                value={rangeScore}
                onChange={(rangeValue) => setAttributes({ rangeScore: rangeValue })}
                min={1}
                max={6}
            />

            <BlockControlsMediaReplaceFlow
                imageId={rangeScoreImgId}
                imageUrl={rangeScoreImgUrl}
                onSelectImage={onSelectImageHandler}
                onSelectURL={onSelectURLImageHandler}
                onError={onErrorUploadHandler}
                onClickRemoveImage={onClickRemoveImageHandler}
            />

            {rangeScoreImgUrl && (
                <div
                    className={`score-range ${isBlobURL(rangeScoreImgUrl) ? " is-loading" : ""
                        }`}
                >
                    <div className="score-range__original-image">
                        {[1, 2, 3, 4, 5, 6].map((_item, _index) => {
                            return <img src={rangeScoreImgUrl} alt={rangeScoreImgAlt} />;
                        })}
                    </div>
                    <div className="score-range__dynamic-image">
                        {countImages.map((_countImage) => {
                            return <img src={rangeScoreImgUrl} alt={rangeScoreImgAlt} />;
                        })}
                        {isBlobURL(rangeScoreImgUrl) && <Spinner />}
                    </div>
                </div>
            )}
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelectImageHandler}
                onSelectURL={onSelectURLImageHandler}
                onError={onErrorUploadHandler}
                accept={"image/*"} //Will disable files that is not image
                allowedTypes={["image"]} // This will show on the computer the files are not image will be disabled (can't be selected)
                disableMediaButtons={rangeScoreImgUrl} // This will disable the media upload if there is a image being selected
                notices={noticeUI}
            />
        </>
    );
};

export default RangeScoreImage;
