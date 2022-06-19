import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";
import ButtonImageSize from "./ImageSize/ButtonImageSize";
import SelectImageSize from './ImageSize/SelectImageSize'

const ImageSize = ({ ...props }) => {
    return (
        <PanelBody title={__("Image Size Settings", "block-gamblino")}>
            <SelectImageSize {...props} />
            <ButtonImageSize {...props} />
        </PanelBody>
    );
};

export default ImageSize;
