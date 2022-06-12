// Wordpress components
import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl } from "@wordpress/components";

const ShadowPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;

    const { isShadowMenuOpen, shadowOpacity } = attributes;

    const onChangeShadowOpacityHandler = (value) => {
        setAttributes({ shadowOpacity: value });
    };

    return (
        <>
            {isShadowMenuOpen && (
                <PanelBody title={__("Shadow Settings", "block-gamblino")}>
                    <RangeControl
                        label={__("Shadow Opacity", "block-gamblino")}
                        value={shadowOpacity}
                        onChange={onChangeShadowOpacityHandler}
                        step={10}
                        min={10}
                        max={40}
                    />
                </PanelBody>
            )}
        </>
    );
};

export default ShadowPanelBody;
