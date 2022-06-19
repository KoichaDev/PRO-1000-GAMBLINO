import { __ } from "@wordpress/i18n";

import { useSelect } from "@wordpress/data";

import { store as BlockEditorStore } from "@wordpress/block-editor";
import { SelectControl } from "@wordpress/components";

const SelectImageSize = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { id, url, alt } = attributes;

    const imageObject = useSelect(
        (select) => {
            const { getMedia } = select("core");
            return id ? getMedia(id) : null;
        },
        [id]
    );

    const imageSizes = useSelect((select) => {
        return select(BlockEditorStore).getSettings().imageSizes;
    }, []);

    const getImageSizeOptions = () => {
        if (!imageObject) return [];

        const options = [];

        const sizes = imageObject.media_details.sizes;

        for (const key in sizes) {
            const size = sizes[key];

            const imageSize = imageSizes.find((size) => size.slug === key);

            if (imageSize) {
                options.push({
                    label: imageSize.name,
                    value: size.source_url,
                });
            }
        }

        return options;
    };
    return (
        <>
            <p style={{ marginTop: "1.5em" }}>
                <strong>{__("Image Size", "block-gamblino")}</strong>
            </p>
            {id && (
                <SelectControl
                    options={getImageSizeOptions()}
                    value={url}
                    onChange={(newUrl) => setAttributes({ url: newUrl })}
                />
            )}
        </>
    );
};

export default SelectImageSize;
