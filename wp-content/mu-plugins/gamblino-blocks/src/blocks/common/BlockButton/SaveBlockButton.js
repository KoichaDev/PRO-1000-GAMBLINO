// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

function save({ attributes }) {
    const {
        isNewTabLinkURLToggled,
        linkURL,
        isToggledSEO,
        isFollowToggled,
        isSponsoredToggled,
        isUGCToggled,
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
                        {...isToggledSEO ? relContent : !isToggledSEO && isNewTabLinkURLToggled ? { rel: "noreferrer noopener" } : {}}
                        tagName="a"
                        value={buttonText}
                    />
                </div>
            ) : null}
        </>
    );
}

export default save;
