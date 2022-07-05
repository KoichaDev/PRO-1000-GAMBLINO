import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import DuplicateImageSetting from "./DuplicateImageSetting";
import ToggledDuplicatedImageSettings from "./ToggledDuplicatedImageSettings";
import AltTextImageSetting from "./AltTextImageSetting";
import FilterColorDuplicateImageSetting from "./FilterColorDuplicateImageSetting";
import OpacityLevelImageSetting from "./OpacityLevelImageSetting";
import OrientationDuplicatedImageSetting from "./OrientationDuplicatedImageSetting";
import GapSizeImageSettings from './GapSizeImageSettings';

const PanelBodySetting = ({ ...props }) => {
    const { attributes } = props;
    const { isToggledImageDuplication } = attributes;
    return (
        <PanelBody title={__("Image Settings", "block-gamblino")}>
            <AltTextImageSetting {...props} />

            <ToggledDuplicatedImageSettings {...props} />

            {isToggledImageDuplication && (
                <>
                    <DuplicateImageSetting {...props} />
                    <FilterColorDuplicateImageSetting {...props} />
                    <OpacityLevelImageSetting {...props} />
                    <GapSizeImageSettings {...props} />
                    <OrientationDuplicatedImageSetting {...props} />
                </>
            )}

        </PanelBody>
    );
};

export default PanelBodySetting;
