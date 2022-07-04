import { __ } from "@wordpress/i18n";
import { isBlobURL } from "@wordpress/blob";
import { RangeControl } from "@wordpress/components";

const FilterColorDuplicateImageSetting = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { url, countImageFilterOpacity } = attributes;

    const filterColorHandler = (value) => {
        /* Creating an copied array of objects with the count property. */
        // const countImageDuplication = [...Array(value)].map((_, index) => {
        //     return { countFiltered: index + 1 };
        // });

        setAttributes({ countImageFilterOpacity: value });
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
                    min={0}
                    max={6}
                    value={countImageFilterOpacity}
                    onChange={value => setAttributes({ countImageFilterOpacity: value })}
                />
            )}
        </>
    );
};

export default FilterColorDuplicateImageSetting;
