// Wordpress components
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { ColorPicker } from "@wordpress/components";

// HOC Component
import ElementWithFocusOutside from "@/hoc/ElementWithFocusOutside";
import useUpdateEffect from "@/hooks/utilities/useUpdateEffect";

// Button components
import InspectorPanelControls from "./components/InspectorControls/InspectorPanelControls";
import MenuGroupControlToolbar from "./components/Toolbar/MenuGroupControlToolbar";
import LinkConfigurationToolbar from "./components/Toolbar/LinkConfigurationToolbar";

// Button editor styling
import "./editor.scss";

const Button = (props) => {
    const {
        setAttributes,
        attributes,
        isFocusOutside,
        setIsFocusOutside,
    } = props;
    const {
        isNewTabLinkURLToggled,
        linkURL,
        isLinkToolbarButtonOpen,
        isRelToggled,
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
    const [enteredURLText, setEnteredURLText] = useState("");

    // This is to ensure that when the Block is being rendered, we don't want it to set the state  of the 
    // attributes as empty string. By using this custom hook, It runs the callback 
    // function only after the first render
    useUpdateEffect(() => {
        if (isFocusOutside === true) {
            setAttributes({ linkURL: enteredURLText });
        }
    }, [isFocusOutside]);

    useEffect(() => {
        if (!isFocusOutside) {
            setAttributes({ isLinkToolbarButtonOpen: false });
        }
    }, [isFocusOutside]);

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

    let paddingType = "";

    if (!buttonIsClickedLinkSides) {
        paddingType = `${buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingType = `${buttonPaddingVertical}${paddingVerticalSelectUnit} ${buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    return (
        <div
            {...useBlockProps({
                className: `text-${buttonTextAlignment}`,
            })}
        >
            {!isFocusOutside && (
                <>
                    <InspectorPanelControls {...props} />

                    <MenuGroupControlToolbar
                        {...props}
                        onClickBackgrouncColor={onClickBackgrouncColorHandler}
                        onClickTextColor={onClickTextColorHandler}
                    />
                </>
            )}

            <div className="position-relative">
                <RichText
                    className={`${shadowClass} shadow-opacity-${shadowOpacity}`}
                    style={{
                        display: "inline-block",
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        borderRadius: `${buttonBorderRadius}px`,
                        padding: paddingType,
                        textDecoration: "none",
                    }}
                    href={linkURL}
                    aria-label={__("Button text", "block-gamblino")}
                    tagName="a"
                    value={buttonText}
                    {...(isNewTabLinkURLToggled ? { target: "_blank" } : {})}
                    {...(isRelToggled === true ? { rel: "follow" } : { rel: "nofollow" })}
                    onChange={(value) => setAttributes({ buttonText: value })}
                    onClick={() => setIsFocusOutside(false)}
                    placeholder={__("text...", "block-gamblino")}
                    allowedFormats={["core/bold", "core/italic", "core/link"]}
                />
                {isLinkToolbarButtonOpen && !isFocusOutside && (
                    <LinkConfigurationToolbar
                        onAddEnteredURLText={(value) => setEnteredURLText(value)}
                        {...props}
                    />
                )}
            </div>

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
