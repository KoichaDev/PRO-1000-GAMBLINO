import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import DuplicateImageSetting from './DuplicateImageSetting'
import AltTextImageSetting from "./AltTextImageSetting";

const PanelBodySetting = ({ ...props }) => {
    return (
        <PanelBody title={__("Image Settings", "block-gamblino")}>
            <DuplicateImageSetting {...props} />
            <AltTextImageSetting {...props} />
        </PanelBody>
    );
};

export default PanelBodySetting;
