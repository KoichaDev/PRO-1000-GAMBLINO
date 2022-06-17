// WP Block Dependencies
import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";

// Attributes hooks
import useSpacingUtils from "./hooks/useSpacingUtils";
import useRelLinks from "./hooks/useRelLinks";

function save({ attributes }) {
    const {
        align,
        isNewTabLinkURLToggled,
        linkURL,
        isToggledSEO,
        shadowOpacity,
        typographySizeClassName,
        isPressedTypographyControlIcon,
        typographySizeEnteredInput,
        typographySizeUnit,
        buttonText,
        buttonBorderRadius,
        buttonBackgroundColor,
        buttonColor,
        buttonTextAlignment,
    } = attributes;

    const { marginValue, paddingValue } = useSpacingUtils(attributes);
    const { relContent } = useRelLinks(attributes);

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
