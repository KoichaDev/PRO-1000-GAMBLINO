// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
    const {
        align,
        isNewTabLinkURLToggled,
        linkURL,
        isToggledSEO,
        isFollowToggled,
        isSponsoredToggled,
        isUGCToggled,
        isShadowMenuOpen,
        shadowOpacity,
        typographySizeClassName,
        isPressedTypographyControlIcon,
        typographySizeEnteredInput,
        typographySizeUnit,
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
        // Margin attributes
        isMarginShorthandButtonClicked,
        marginLongHandSpacing,
        marginLongHandSpacingSelectUnit,
        IsClickedLinkSidesMargin,
        marginNoneShortHandMargin,
        marginSpacingUnit,
        marginShorthandHorizontal,
        marginShortHandHorizontalSelectUnit,
        marginShortHandVertical,
        marginShortHandVerticalSelectUnit,
    } = attributes;

    let marginValue = "";

    if (isMarginShorthandButtonClicked) {
        // prettier-ignore
        const { top: topUnit, right: rightUnit, bottom: bottomUnit, left: leftUnit } = marginLongHandSpacingSelectUnit
        // prettier-ignore
        const { top: topValue, right: rightValue, bottom: bottomValue, left: leftValue } = marginLongHandSpacing;

        const topMargin = `${topValue}${topUnit}`;
        const rightMargin = `${rightValue}${rightUnit}`;
        const bottomMargin = `${bottomValue}${bottomUnit}`;
        const leftMargin = `${leftValue}${leftUnit}`;

        marginValue = `${topMargin} ${rightMargin} ${bottomMargin} ${leftMargin}`;
    } else {
        if (!IsClickedLinkSidesMargin) {
            marginValue = `${marginNoneShortHandMargin}${marginSpacingUnit}`;
        }

        if (IsClickedLinkSidesMargin) {
            marginValue = `${marginShortHandVertical}${marginShortHandVerticalSelectUnit} ${marginShorthandHorizontal}${marginShortHandHorizontalSelectUnit}`;
        }
    }

    let paddingValue = "";

    if (!buttonIsClickedLinkSides) {
        paddingValue = `${+buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingValue = `${+buttonPaddingVertical}${paddingVerticalSelectUnit} ${+buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    const shadowClass = isShadowMenuOpen === true ? "has-shadow" : "";

    const relContent = {};

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

    // prettier-ignore
    const typographySizeTypeClassname = !isPressedTypographyControlIcon && typographySizeClassName;

    return (
        <>
            {buttonText ? (
                <div
                    {...useBlockProps.save({
                        className: `[ ${align} text-${buttonTextAlignment} ]`,
                    })}
                >
                    <RichText.Content
                        {...useBlockProps.save({
                            className: `${shadowClass} shadow-opacity-${shadowOpacity} ${typographySizeTypeClassname}`,
                            style: {
                                display: "inline-block",
                                margin: marginValue,
                                padding: paddingValue,
                                color: buttonColor,
                                backgroundColor: buttonBackgroundColor,
                                borderRadius: `${buttonBorderRadius}px`,
                                textDecoration: "none",
                                ...(isPressedTypographyControlIcon && {
                                    fontSize: `${typographySizeEnteredInput}${typographySizeUnit}`,
                                }),
                            },
                        })}
                        href={linkURL}
                        {...(isNewTabLinkURLToggled ? { target: "_blank" } : {})}
                        {...(isToggledSEO
                            ? relContent
                            : !isToggledSEO && isNewTabLinkURLToggled
                                ? { rel: "noreferrer noopener" }
                                : {})}
                        tagName="a"
                        value={buttonText}
                    />
                </div>
            ) : null}
        </>
    );
}

export default save;
