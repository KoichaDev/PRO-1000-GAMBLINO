import { useBlockProps } from "@wordpress/block-editor";
import { useState, useEffect } from "@wordpress/element";

const SaveBlockImage = ({ attributes }) => {
    const {
        id,
        url,
        alt,
        imageGapSizeValue,
        imageDuplication,
        countImageFilterOpacity,
        imageDimension,
        positionType,
        positionValue,
        imageOpacityValue,
        margin,
        marginUnit,
        marginAuto,
        isResetMargin,
        hrefLinkTarget,
        // SEO Settings
        isNewTabLinkURLToggled,
        isToggledSEO,
        isFollowToggled,
        isSponsoredToggled,
        isUGCToggled,
    } = attributes;

    // prettier-ignore
    const positionStyle = positionType === "absolute" && {
        top: `${positionValue.top}%`,
        right: `${positionValue.right}%`,
        bottom: `${positionValue.bottom}%`,
        left: `${positionValue.left}%`,
    };

    // prettier-ignore
    const marginStyle = isResetMargin === true ? marginAuto : {
        marginTop: `${margin.top}${marginUnit}`,
        marginRight: `${margin.right}${marginUnit}`,
        marginBottom: `${margin.bottom}${marginUnit}`,
        marginLeft: `${margin.left}${marginUnit}`,
    };

    const className = id ? `wp-image-${id}` : null;

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
            {hrefLinkTarget ? (
                <a
                    href={hrefLinkTarget}
                    {...(isNewTabLinkURLToggled ? { target: "_blank" } : {})}
                    {...(isToggledSEO
                        ? relContent
                        : !isToggledSEO && isNewTabLinkURLToggled
                            ? { rel: "noreferrer noopener" }
                            : {})}
                >
                    {url && (
                        <>
                            {imageDuplication.length > 1 ? (
                                <div
                                    className={`[ media-image ] [ flex-row flex-row-reverse justify-content-end  mt-6  ]`}
                                    style={{ gap: `${imageGapSizeValue}em` }}
                                >
                                    {imageDuplication.map((_, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={url}
                                                className={className}
                                                alt={alt}
                                                {...useBlockProps.save({
                                                    style: {
                                                        width: imageDimension,
                                                        position: positionType,
                                                        ...positionStyle,
                                                        ...marginStyle,
                                                        opacity:
                                                            index < countImageFilterOpacity
                                                                ? imageOpacityValue
                                                                : "",
                                                    },
                                                })}
                                            />
                                        );
                                    })}
                                </div>
                            ) : (
                                <>
                                    {imageDuplication.map((_, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={url}
                                                className={className}
                                                alt={alt}
                                                {...useBlockProps.save({
                                                    style: {
                                                        width: imageDimension,
                                                        position: positionType,
                                                        ...positionStyle,
                                                        ...marginStyle,
                                                        opacity:
                                                            index < countImageFilterOpacity
                                                                ? imageOpacityValue
                                                                : "",
                                                    },
                                                })}
                                            />
                                        );
                                    })}
                                </>
                            )}
                        </>
                    )}
                </a>
            ) : (
                <>
                    {url && (
                        <>
                            {imageDuplication.length > 1 ? (
                                <div
                                    className={`[ media-image ] [ flex-row flex-row-reverse justify-content-end mt-6  ]`}
                                    style={{ gap: `${imageGapSizeValue}em` }}
                                >
                                    {imageDuplication.map((_, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={url}
                                                className={className}
                                                alt={alt}
                                                {...useBlockProps.save({
                                                    style: {
                                                        width: imageDimension,
                                                        position: positionType,
                                                        opacity:
                                                            index < countImageFilterOpacity
                                                                ? imageOpacityValue
                                                                : "",
                                                        ...positionStyle,
                                                        ...marginStyle,
                                                    },
                                                })}
                                            />
                                        );
                                    })}
                                </div>
                            ) : (
                                <>
                                    {imageDuplication.map((_, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={url}
                                                className={className}
                                                alt={alt}
                                                {...useBlockProps.save({
                                                    style: {
                                                        width: imageDimension,
                                                        position: positionType,
                                                        opacity:
                                                            index < countImageFilterOpacity
                                                                ? imageOpacityValue
                                                                : "",
                                                        ...positionStyle,
                                                        ...marginStyle,
                                                    },
                                                })}
                                            />
                                        );
                                    })}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
};

export default SaveBlockImage;
