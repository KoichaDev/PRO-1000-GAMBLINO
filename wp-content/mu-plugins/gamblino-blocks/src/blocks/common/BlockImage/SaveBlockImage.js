import { useBlockProps } from "@wordpress/block-editor";

const SaveBlockImage = ({ attributes }) => {
    const {
        id,
        url,
        alt,
        imageDimension,
        positionType,
        positionValue,
        margin,
        marginUnit,
        marginAuto,
        isResetMargin,
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

    return (
        <>
            {url && (
                <img
                    src={url}
                    className={className}
                    alt={alt}
                    {...useBlockProps.save({
                        style: {
                            width: imageDimension,
                            position: positionType,
                            ...positionStyle,
                            ...marginStyle,
                        },
                    })}
                />
            )}
        </>
    );
};

export default SaveBlockImage;
