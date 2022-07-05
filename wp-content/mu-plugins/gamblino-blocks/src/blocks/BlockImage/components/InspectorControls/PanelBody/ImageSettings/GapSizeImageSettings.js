import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

const GapSizeImageSettings = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { imageGapSizeValue } = attributes;

    return (
        <RangeControl
            label={__("Image Gap Size", "block-gamblino")}
            min={0}
            max={10}
            step={0.01}
            value={imageGapSizeValue}
            onChange={value => setAttributes({ imageGapSizeValue: value })}
        />
    );
};

export default GapSizeImageSettings;
