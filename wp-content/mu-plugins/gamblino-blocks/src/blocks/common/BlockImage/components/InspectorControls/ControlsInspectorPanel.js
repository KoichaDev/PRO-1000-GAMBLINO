import { __ } from "@wordpress/i18n";

import { useSelect } from "@wordpress/data";

import {
    InspectorControls,
    store as BlockEditorStore,
} from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";
import {
    PanelBody,
    TextareaControl,
    SelectControl,
    RangeControl,
} from "@wordpress/components";

import ButtonImageSizePanelBody from "./PanelBody/ButtonImageSizePanelBody";
import PositionPanelBody from "./PanelBody/PositionPanelBody";

const ControlsInspectorPanel = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        id,
        url,
        alt,
        margin,
    } = attributes;

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
        <InspectorControls>
            <PanelBody title={__("Image Settings", "block-gamblino")}>
                {id && (
                    <SelectControl
                        label={__("Image Size", "block-gamblino")}
                        options={getImageSizeOptions()}
                        value={url}
                        onChange={(newUrl) => setAttributes({ url: newUrl })}
                    />
                )}

                {url && !isBlobURL(url) && (
                    <TextareaControl
                        label={__("Alt text (alternative text)", "block-gamblino")}
                        value={alt}
                        onChange={(value) => setAttributes({ alt: value })}
                        help={__(
                            "Alternative text describes your image to people can't see it. Add a short description with its key details. This alt text will only change for this block, and not in general whole image of the media replacement of it",
                            "block-gamblino"
                        )}
                    />
                )}
            </PanelBody>
            <ButtonImageSizePanelBody {...props} />
            <PanelBody title={__("Image Spacing", "block-gamblino")}>
                <p>
                    <strong>Margin</strong>
                </p>
                <RangeControl
                    label={__("Top", "team-members")}
                    value={margin.top}
                    onChange={(value) =>
                        setAttributes({ margin: { ...margin, top: value } })
                    }
                    min={-9999}
                    max={9999}
                />
                <RangeControl
                    label={__("Right", "team-members")}
                    value={margin.right}
                    onChange={(value) =>
                        setAttributes({ margin: { ...margin, right: value } })
                    }
                    min={-9999}
                    max={9999}
                />
                <RangeControl
                    label={__("Bottom", "team-members")}
                    value={margin.bottom}
                    onChange={(value) =>
                        setAttributes({
                            margin: { ...margin, bottom: value },
                        })
                    }
                    min={-9999}
                    max={9999}
                />{" "}
                <RangeControl
                    label={__("Left", "team-members")}
                    value={margin.left}
                    onChange={(value) =>
                        setAttributes({ margin: { ...margin, left: value } })
                    }
                    min={-9999}
                    max={9999}
                />
            </PanelBody>
            <PositionPanelBody {...props} />

        </InspectorControls>
    );
};

export default ControlsInspectorPanel;
