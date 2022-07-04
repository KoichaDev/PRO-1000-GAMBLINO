import { __ } from "@wordpress/i18n";
import { useState, useEffect, useRef } from "@wordpress/element";
import { isBlobURL } from "@wordpress/blob";
import { RangeControl } from "@wordpress/components";

const DuplicateImageSetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { url, imageDuplication } = attributes;

    const duplicateImageHandler = (value) => {
        /* Creating an copied array of objects with the count property. */
        const countImageDuplication = [...Array(value)].map((_, index) => {
            return { count: index + 1 };
        });

        setAttributes({ imageDuplication: countImageDuplication });
    };

    const getLastObjectValue = (array) => {
        const { count } = array[array.length - 1];
        return count;
    };

    return (
        <>
            {url && !isBlobURL(url) && (
                <RangeControl
                    label={__("Duplicate images", "block-gamblino")}
                    min={1}
                    max={6}
                    value={getLastObjectValue(imageDuplication)}
                    onChange={duplicateImageHandler}
                />
            )}
        </>
    );
};

export default DuplicateImageSetting;
