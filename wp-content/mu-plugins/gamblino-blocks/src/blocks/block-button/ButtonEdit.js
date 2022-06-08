import { __ } from "@wordpress/i18n";
import { useState, Fragment } from "@wordpress/element";
import { RichText, useBlockProps } from "@wordpress/block-editor";

import { ColorPicker } from "@wordpress/components";

import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";

import InspectorPanelControls from "./components/InspectorPanelControls";
import ToolbarGroupControl from "./components/ToolbarGroupControl";

import "./editor.scss";

const Button = (props) => {
    const {
        placeholder,
        setAttributes,
        attributes,
        isFocusOutside,
        setIsFocusOutside,
    } = props;

    const {
        buttonText,
        buttonTextAlignment,
        isShadowMenuOpen,
        shadowOpacity,
        buttonBorderRadius,
        buttonBackgroundColor,
        buttonColor,
        buttonIsClickedLinkSides,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingVertical,
        paddingVerticalSelectUnit,
        buttonPaddingHorizontal,
        paddingHorizontalSelectUnit,
    } = attributes;

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

    const onClickBackgrouncColorHandler = () => {
        setIsVisibleBackgroundColor((prevIsVisible) => !prevIsVisible);
        setIsVisibleTextColor(false);
    };

    const onClickTextColorHandler = () => {
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

    let paddingType = "";

    if (!buttonIsClickedLinkSides) {
        paddingType = `${buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingType = `${buttonPaddingVertical}${paddingVerticalSelectUnit} ${buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    return (
        <div {...useBlockProps({
            className: `text-${buttonTextAlignment}`
        })}>
            {!isFocusOutside && (
                <>
                    <InspectorPanelControls
                        onChangeButtonBorderRadius={onChangeButtonBorderRadiusHandler}
                        onChangeShadowOpacity={onChangeShadowOpacityHandler}
                        {...props}
                    />

                    <ToolbarGroupControl
                        {...props}
                        onClickBackgrouncColor={onClickBackgrouncColorHandler}
                        onClickTextColor={onClickTextColorHandler}
                    />
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
                value={buttonText}
                onChange={(value) => setAttributes({ buttonText: value })}
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
        </div>
    );
};

export default ElementWithFocusOutside(Button);
