import { useEffect } from "@wordpress/element";
import { InspectorControls } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { isBlobURL, revokeBlobURL } from "@wordpress/blob";

import {
    PanelBody,
    TextareaControl,
    SelectControl,
} from "@wordpress/components";

const ControlsImage = (props) => {
    // prettier-ignore
    const { imageId, imageUrl, blobURL, setBlobURL, onChangeImageSize, imageAlt, onChangeAlt, getImageSizeOptions } = props;

    /* This is a way to revoke (basically free the memory and optimize it) the blob URL when the url is changed. */
    useEffect(() => {
        if (isBlobURL(imageUrl)) {
            setBlobURL(imageUrl);
        } else {
            // if it is not blob URL, but normal URL, then we need to revoke the old blobl URL
            revokeBlobURL(blobURL);
            setBlobURL(undefined);
        }
    }, [imageUrl]);

    return (
        <InspectorControls>
            <PanelBody title={__("Image settings", "team-members")}>
                {imageId && (
                    <SelectControl
                        label={__("Image Size", "team-members")}
                        options={getImageSizeOptions}
                        value={imageUrl}
                        onChange={onChangeImageSize}
                    />
                )}

                {imageUrl && !isBlobURL(imageUrl) && (
                    <TextareaControl
                        label={__("Alt Image text", "team-members")}
                        help={__(
                            "Alternative text describes your image to people can't see it. Add a short description with its key details.",
                            "team-members"
                        )}
                        value={imageAlt}
                        onChange={onChangeAlt}
                    />
                )}
            </PanelBody>
        </InspectorControls>
    );
};

export default ControlsImage;
