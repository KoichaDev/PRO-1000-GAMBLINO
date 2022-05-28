import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { RichText } from "@wordpress/block-editor";

import { ColorPicker } from "@wordpress/components";

import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";

import MenuInspectorControls from "./components/MenuInspectorControls";
import ToolbarBlockControls from "./components/ToolbarBlockControls";

import "./Button.scss";

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
        <>
            {!isFocusOutside && (
                <>
                    <MenuInspectorControls
                        onChangeButtonBorderRadius={onChangeButtonBorderRadiusHandler}
                        onChangeShadowOpacity={onChangeShadowOpacityHandler}
                        {...props}
                    />

                    <ToolbarBlockControls
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
