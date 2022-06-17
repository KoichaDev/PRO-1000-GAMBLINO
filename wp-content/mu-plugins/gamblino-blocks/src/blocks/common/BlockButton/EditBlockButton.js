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

// spacing attributes
import SpacingValues from "./constants/spacingValues";

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
        isLinkToolbarButtonOpen,
        isNewTabLinkURLToggled,
        linkURL,
        isToggledSEO,
        isFollowToggled,
        isSponsoredToggled,
        isUGCToggled,
        buttonText,
        buttonTextAlignment,
        typographySizeClassName,
        isPressedTypographyControlIcon,
        typographySizeEnteredInput,
        typographySizeUnit,
        isShadowMenuOpen,
        shadowOpacity,
        buttonBorderRadius,
        buttonBackgroundColor,
        buttonColor,

    } = attributes;

    // prettier-ignore
    const [isVisibleBackgroundColor, setIsVisibleBackgroundColor] = useState(false);
    const [isVisibleTextColor, setIsVisibleTextColor] = useState(false);
    const [enteredURLText, setEnteredURLText] = useState("");

    const { marginValue, paddingValue } = SpacingValues(attributes);

    // This is to ensure that when the Block is being rendered, we don't want it to set the state  of the
    // attributes as empty string. By using this custom hook, It runs the callback
    // function only after the first render
    useUpdateEffect(() => {
        if (isFocusOutside === true) {
            setAttributes({ linkURL: enteredURLText });
        }
    }, [isFocusOutside]);

    useUpdateEffect(() => {
        if (isFocusOutside === true) {
            setIsVisibleBackgroundColor(false);
            setIsVisibleTextColor(false);
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

    // prettier-ignore
    const typographySizeTypeClassname = !isPressedTypographyControlIcon && typographySizeClassName;

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    const relContent = {};

    if (isFollowToggled) {
        Object.assign(relContent, {
            rel: "follow",
        });
    }

    if (isFollowToggled) {
        Object.assign(relContent, {
            rel: "follow noreferrer noopener",
        });
    }

    if (!isFollowToggled) {
        Object.assign(relContent, {
            rel: "nofollow noreferrer noopener",
        });
    }

    if (isUGCToggled) {
        Object.assign(relContent, {
            rel: "ugc",
        });
    }

    if (isSponsoredToggled) {
        Object.assign(relContent, {
            rel: "sponsored noreferrer noopener",
        });
    }

    if (isFollowToggled && isSponsoredToggled) {
        Object.assign(relContent, {
            rel: "follow sponsored noreferrer noopener",
        });
    }

    if (isFollowToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "follow ugc noreferrer noopener",
        });
    }

    if (isSponsoredToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "sponsored ugc noreferrer noopener",
        });
    }

    if (isFollowToggled && isSponsoredToggled && isUGCToggled) {
        Object.assign(relContent, {
            rel: "follow sponsored ugc noreferrer noopener",
        });
    }

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
                    className={`${shadowClass} shadow-opacity-${shadowOpacity} ${typographySizeTypeClassname}`}
                    style={{
                        display: "inline-block",
                        color: buttonColor,
                        backgroundColor: buttonBackgroundColor,
                        borderRadius: `${buttonBorderRadius}px`,
                        margin: marginValue,
                        padding: paddingValue,
                        textDecoration: "none",
                        ...(isPressedTypographyControlIcon && {
                            fontSize: `${typographySizeEnteredInput}${typographySizeUnit}`,
                        }),
                    }}
                    href={linkURL}
                    aria-label={__("Button text", "block-gamblino")}
                    tagName="a"
                    value={buttonText}
                    {...(isNewTabLinkURLToggled ? { target: "_blank" } : {})}
                    {...(isToggledSEO
                        ? relContent
                        : !isToggledSEO && isNewTabLinkURLToggled
                            ? { rel: "noreferrer noopener" }
                            : {})}
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
                    className="position-absolute bg-neutral-100 mt-5"
                    color={buttonColor}
                    onChange={onChangeTextColorHandler}
                    enableAlpha
                    defaultValue={buttonColor}
                />
            )}

            {isVisibleBackgroundColor && (
                <ColorPicker
                    className="position-absolute bg-neutral-100 mt-5"
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
