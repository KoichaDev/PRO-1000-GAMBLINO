import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const OpacityLevelImageSetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { imageOpacityValue } = attributes;

    return (
        <RangeControl
            label={__("Opacity level", "block-gamblino")}
            min={0}
            max={1}
            step={0.01}
            value={imageOpacityValue}
            onChange={(value) => setAttributes({ imageOpacityValue: value })}
        />
    );
};

export default OpacityLevelImageSetting;
