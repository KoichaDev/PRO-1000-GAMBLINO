// Wordpress components
import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";

const BorderRadius = ({ ...props }) => {
    const { attributes, setAttributes } = props;

    const { buttonBackgroundColor, buttonColor, isBorderRadiusMenuOpen, buttonBorderRadius } = attributes;

    const onChangeButtonBorderRadiusHandler = (value) => {
        setAttributes({
            buttonBackgroundColor: buttonBackgroundColor,
            buttonColor: buttonColor,
            buttonBorderRadius: value,
        });
    };

    return (
        <>
            {isBorderRadiusMenuOpen && (
                <PanelBody title={__("Border Radius")}>
                    <RangeControl
                        label={__("Border Radius")}
                        value={buttonBorderRadius}
                        onChange={onChangeButtonBorderRadiusHandler}
                        step={1}
                        min={1}
                        max={40}
                    />
                </PanelBody>
            )}
        </>
    );
};

export default BorderRadius;
