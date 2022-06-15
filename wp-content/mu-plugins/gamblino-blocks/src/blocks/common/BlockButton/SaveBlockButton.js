// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
    const {
        isNewTabLinkURLToggled,
        linkURL,
        isRelToggled,
        isShadowMenuOpen,
        shadowOpacity,
        buttonText,
        buttonBorderRadius,
        buttonBackgroundColor,
        buttonColor,
        buttonIsClickedLinkSides,
        buttonTextAlignment,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingHorizontal,
        paddingHorizontalSelectUnit,
        buttonPaddingVertical,
        paddingVerticalSelectUnit,
    } = attributes;

    let paddingType = "";

    if (!buttonIsClickedLinkSides) {
        paddingType = `${+buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingType = `${+buttonPaddingVertical}${paddingVerticalSelectUnit} ${+buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    return (
        <>
            {buttonText ? (
                <div
                    {...useBlockProps.save({
                        className: `[ text-${buttonTextAlignment} ]`,
                    })}
                >
                    <RichText.Content
                        {...useBlockProps.save({
                            className: `${shadowClass} shadow-opacity-${shadowOpacity}`,
                            style: {
                                display: "inline-block",
                                padding: paddingType,
                                color: buttonColor,
                                backgroundColor: buttonBackgroundColor,
                                borderRadius: `${buttonBorderRadius}px`,
                                textDecoration: "none",
                            },
                        })}
                        href={linkURL}
                        {...(isNewTabLinkURLToggled ? { target: "_blank" } : {})}
                        {...(isRelToggled === true
                            ? { rel: "follow noreferrer noopener" }
                            : { rel: "nofollow noreferrer noopener" })}
                        tagName="a"
                        value={buttonText}
                    />
                </div>
            ) : null}
        </>
    );
}

export default save;
