import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";
import DuplicateImageSetting from "./DuplicateImageSetting";
import ToggledDuplicatedImageSettings from "./ToggledDuplicatedImageSettings";
import AltTextImageSetting from "./AltTextImageSetting";
import FilterColorDuplicateImageSetting from "./FilterColorDuplicateImageSetting";
import OpacityLevelImageSetting from "./OpacityLevelImageSetting";
import OrientationDuplicatedImageSetting from "./OrientationDuplicatedImageSetting";

const PanelBodySetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isToggledImageDuplication } = attributes;
    return (
        <PanelBody title={__("Image Settings", "block-gamblino")}>
            <ToggledDuplicatedImageSettings {...props} />

            {isToggledImageDuplication && (
                <>
                    <DuplicateImageSetting {...props} />
                    <FilterColorDuplicateImageSetting {...props} />
                    <OpacityLevelImageSetting {...props} />
                    <OrientationDuplicatedImageSetting {...props} />
                </>
            )}

            <AltTextImageSetting {...props} />
        </PanelBody>
    );
};

export default PanelBodySetting;
