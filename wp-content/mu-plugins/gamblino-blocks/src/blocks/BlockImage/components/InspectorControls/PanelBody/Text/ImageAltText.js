import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { PanelBody, TextareaControl } from "@wordpress/components";

const ImageAltText = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { url, alt } = attributes;
    return (
        <PanelBody title={__("Text Settings", "block-gamblino")} initialOpen={false}>
            {url && !isBlobURL(url) && (
                <TextareaControl
                    label={__("Alt text (alternative text)", "block-gamblino")}
                    value={alt}
                    onChange={(value) => setAttributes({ alt: value })}
                    help={__(
                        "Alternative text describes your image to people can't see it. Add a short description with its key details. This alt text will only change for this block, and not in general whole image of the media replacement of it",
                        "block-gamblino"
                    )}
                />
            )}
        </PanelBody>
    );
};

export default ImageAltText;
