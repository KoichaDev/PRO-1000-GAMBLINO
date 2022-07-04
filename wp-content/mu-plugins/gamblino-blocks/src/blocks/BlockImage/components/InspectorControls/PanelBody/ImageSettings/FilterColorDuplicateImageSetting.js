import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { RangeControl } from "@wordpress/components";

const FilterColorDuplicateImageSetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { url, imageFilterColor } = attributes;

    const filterColorHandler = (value) => {
        /* Creating an copied array of objects with the count property. */
        const countImageDuplication = [...Array(value)].map((_, index) => {
            return { countFiltered: index + 1 };
        });

        setAttributes({ imageFilterColor: countImageDuplication });
    };

    const getLastObjectValue = (array) => {
        const { countFiltered } = array[array.length - 1];
        return countFiltered;
    };

    return (
        <>
            {url && !isBlobURL(url) && (
                <RangeControl
                    label={__("Filter duplicated image opacity", "block-gamblino")}
                    min={1}
                    max={6}
                    value={getLastObjectValue(imageFilterColor)}
                    onChange={filterColorHandler}
                />
            )}
        </>
    );
};

export default FilterColorDuplicateImageSetting;
