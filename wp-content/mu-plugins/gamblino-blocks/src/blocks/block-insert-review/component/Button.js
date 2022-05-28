import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import {
    RichText,
    BlockControls,
    InspectorControls,
    AlignmentToolbar,
} from "@wordpress/block-editor";

import {
    PanelBody,
    ToolbarGroup,
    ToolbarButton,
    ColorPicker,
    RangeControl,
    withFocusOutside as withFocusOutsideHOC,
} from "@wordpress/components";

import { MdOutlineLink, MdOutlineLinkOff } from "react-icons/md";
import { CgFormatColor, CgColorBucket } from "react-icons/cg";
import { SiShadow } from "react-icons/Si";
import { AiOutlineBorder } from "react-icons/ai";

import { ButtonIcon } from "@/common/UI/Button";
import { PaddingIcon } from "@/common/Icons/Spaces";

import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";

const Button = (props) => {
    const {
        onChange,
        value,
        placeholder,
        setAttributes,
        attributes,
        isFocusOutside,
        setIsFocusOutside,
    } = props;

    const {
        isBorderRadiusMenuOpen,
        isShadowMenuOpen,
        shadowOpacity,
        buttonBorderRadius,
        buttonBackgroundColor,
        buttonColor,
        buttonIsClickedLinkSides,
        buttonTextAlignment,
        isButtonPaddingMenuOpen,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingVertical,
        paddingVerticalSelectUnit,
        buttonPaddingHorizontal,
        paddingHorizontalSelectUnit,
    } = attributes;


    // prettier-ignore
    const [isClickedHorizontalField, setIsClickedHorizontalField] = useState(false);
    const [isClickedVerticalField, setIsClickedVerticalField] = useState(false);

    // prettier-ignore
    const [isVisibleBackgroundColor, setIsVisibleBackgroundColor] = useState(false);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false);

    const onChangeBackgroundColorHandler = (value) =>
        setAttributes({
            buttonBackgroundColor: value,
            buttonColor: buttonColor,
            buttonBorderRadius: `${buttonBorderRadius}px`,
        });

    const onChangeTextColorHandler = (value) => {
        setAttributes({
            buttonBackgroundColor: buttonBackgroundColor,
            buttonColor: value,
            buttonBorderRadius: `${buttonBorderRadius}px`,
        });
    };

    const onClickBackgrouncColor = () => {
        setIsVisibleBackgroundColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleTextColor(false);
    };

    const onClickTextColor = () => {
        setIsVisibleTextColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleBackgroundColor(false);
    };

    const onChangeShadowOpacityHandler = (value) => {
        setAttributes({ shadowOpacity: value });
    };

    const onChangeButtonBorderRadiusHandler = (value) => {
        setAttributes({
            buttonBackgroundColor: buttonBackgroundColor,
            buttonColor: buttonColor,
            buttonBorderRadius: value,
        });
    };

    let paddingIconContent = "";

    if (!buttonIsClickedLinkSides) {
        paddingIconContent = <PaddingIcon />;
    } else {
        if (isClickedVerticalField) {
            paddingIconContent = (
                <PaddingIcon
                    fillTop={isClickedVerticalField ? "#C5C7C9" : ""}
                    fillBottom={isClickedVerticalField ? "#C5C7C9" : ""}
                />
            );
        } else {
            paddingIconContent = (
                <PaddingIcon
                    fillTop="#1e1e1e"
                    fillBottom="#1e1e1e"
                    fillLeft={isClickedHorizontalField ? "#C5C7C9" : ""}
                    fillRight={isClickedHorizontalField ? "#C5C7C9" : ""}
                />
            );
        }
    }

    let paddingType = "";

    if (!buttonIsClickedLinkSides) {
        paddingType = `${buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingType = `${buttonPaddingVertical}${paddingVerticalSelectUnit} ${buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    return (
        <>
            {!isFocusOutside && (
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

                    <BlockControls
                        controls={[
                            {
                                icon: PaddingIcon,
                                title: __("Padding", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({
                                        isButtonPaddingMenuOpen: !isButtonPaddingMenuOpen,
                                    });
                                },
                                isActive: isButtonPaddingMenuOpen,
                            },
                            {
                                icon: SiShadow,
                                title: __("Shadow", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({ isShadowMenuOpen: !isShadowMenuOpen });
                                },
                                isActive: isShadowMenuOpen,
                            },
                            {
                                icon: AiOutlineBorder,
                                title: __("Border Radius", "block-gamblino"),
                                onClick: () => {
                                    setAttributes({
                                        isBorderRadiusMenuOpen: !isBorderRadiusMenuOpen,
                                    });
                                },
                                isActive: isBorderRadiusMenuOpen,
                            },
                        ]}
                    >
                        <AlignmentToolbar
                            value={buttonTextAlignment}
                            onChange={(value) =>
                                setAttributes({ buttonTextAlignment: value })
                            }
                        />
                        <ToolbarGroup>
                            <ToolbarButton
                                icon={CgFormatColor}
                                onClick={onClickTextColor}
                            ></ToolbarButton>
                            <ToolbarButton
                                icon={CgColorBucket}
                                onClick={onClickBackgrouncColor}
                            ></ToolbarButton>
                        </ToolbarGroup>
                    </BlockControls>
                </>
            )}

            <RichText
                className={`${shadowClass} shadow-opacity-${shadowOpacity}`}
                style={{
                    display: "inline-block",
                    color: buttonColor,
                    backgroundColor: buttonBackgroundColor,
                    borderRadius: `${buttonBorderRadius}px`,
                    padding: paddingType,
                }}
                tagName="a"
                value={value}
                onChange={onChange}
                onClick={() => setIsFocusOutside(false)}
                placeholder={__(placeholder, "block-gamblino")}
            />

            {isVisibleTextColor && (
                <ColorPicker
                    color={buttonColor}
                    onChange={onChangeTextColorHandler}
                    enableAlpha
                    defaultValue={buttonColor}
                />
            )}

            {isVisibleBackgroundColor && (
                <ColorPicker
                    color={buttonBackgroundColor}
                    onChange={onChangeBackgroundColorHandler}
                    enableAlpha
                    defaultValue={buttonBackgroundColor}
                />
            )}
        </>
    );
};

export default ElementWithFocusOutside(Button);
