import { __ } from "@wordpress/i18n";

import { PanelBody, RangeControl } from "@wordpress/components";
import { InspectorControls } from "@wordpress/block-editor";

import { ButtonIcon } from "@/common/UI/Button";

const InspectorControls = (props) => {
    const {
        isButtonPaddingMenuOpen,
        paddingIconContent,
        buttonIsClickedLinkSides,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingVertical,
        setIsClickedVerticalField,
        setIsClickedHorizontalField,
        isBorderRadiusMenuOpen,
        isShadowMenuOpen,
        buttonBorderRadius,
    } = props;
    return (
        <>
            <InspectorControls>
                {isButtonPaddingMenuOpen && (
                    <PanelBody>
                        <p>
                            <strong>Padding</strong>
                        </p>
                        <div className="controls-padding">
                            {paddingIconContent}

                            {!buttonIsClickedLinkSides && (
                                <div className="controls-padding_input-component">
                                    <input
                                        type="number"
                                        value={buttonPadding}
                                        onChange={(e) =>
                                            setAttributes({ buttonPadding: +e.target.value })
                                        }
                                    />
                                    <select
                                        aria-label={__("Select unit", "block-gamblino")}
                                        value={paddingSelectUnit}
                                        onChange={(e) =>
                                            setAttributes({ paddingSelectUnit: e.target.value })
                                        }
                                    >
                                        <option value="px">px</option>
                                        <option value="em">em</option>
                                    </select>
                                </div>
                            )}
                            {buttonIsClickedLinkSides && (
                                <div className="controls-padding_input-component">
                                    <input
                                        type="number"
                                        aria-label="Vertical"
                                        title="Vertical"
                                        value={buttonPaddingVertical}
                                        onChange={(e) => {
                                            setAttributes({
                                                buttonPaddingVertical: +e.target.value,
                                            });
                                        }}
                                        onClick={() => {
                                            setIsClickedVerticalField(true);
                                            setIsClickedHorizontalField(false);
                                        }}
                                    />
                                    <select
                                        aria-label={__("Select unit", "block-gamblino")}
                                        value={paddingVerticalSelectUnit}
                                        onChange={(e) =>
                                            setAttributes({
                                                paddingVerticalSelectUnit: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="px">px</option>
                                        <option value="em">em</option>
                                    </select>
                                </div>
                            )}
                            {buttonIsClickedLinkSides && (
                                <div className="controls-padding_input-component">
                                    <input
                                        type="number"
                                        aria-label="Horizontal"
                                        title="Horizontal"
                                        value={buttonPaddingHorizontal}
                                        onChange={(e) => {
                                            setAttributes({
                                                buttonPaddingHorizontal: +e.target.value,
                                            });
                                        }}
                                        onClick={() => {
                                            setIsClickedHorizontalField(true);
                                            setIsClickedVerticalField(false);
                                        }}
                                    />
                                    <select
                                        aria-label={__("Select unit", "block-gamblino")}
                                        value={paddingHorizontalSelectUnit}
                                        onChange={(e) =>
                                            setAttributes({
                                                paddingHorizontalSelectUnit: e.target.value,
                                            })
                                        }
                                    >
                                        <option value="px">px</option>
                                        <option value="em">em</option>
                                    </select>
                                </div>
                            )}
                            <ButtonIcon
                                onClick={() => {
                                    setAttributes({
                                        buttonIsClickedLinkSides: !buttonIsClickedLinkSides,
                                    });
                                }}
                            >
                                {buttonIsClickedLinkSides ? (
                                    <MdOutlineLinkOff />
                                ) : (
                                    <MdOutlineLink />
                                )}
                            </ButtonIcon>
                        </div>
                    </PanelBody>
                )}

                {isBorderRadiusMenuOpen && (
                    <PanelBody title={__("Border Radius")}>
                        <RangeControl
                            label={__("Border Radius")}
                            value={buttonBorderRadius}
                            onChange={onChangeButtonBorderRadiusHandler}
                            step={1}
                            min={1}
                            max={10}
                        />
                    </PanelBody>
                )}

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
            </InspectorControls>
        </>
    );
};

export default InspectorControls;
