import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import DuplicateImageSetting from './DuplicateImageSetting'
import AltTextImageSetting from "./AltTextImageSetting";
import FilterColorDuplicateImageSetting from './FilterColorDuplicateImageSetting';

const PanelBodySetting = ({ ...props }) => {
    return (
        <PanelBody title={__("Image Settings", "block-gamblino")}>
            <DuplicateImageSetting {...props} />
            <FilterColorDuplicateImageSetting {...props} />
            <AltTextImageSetting {...props} />
        </PanelBody>
    );
};

export default PanelBodySetting;
