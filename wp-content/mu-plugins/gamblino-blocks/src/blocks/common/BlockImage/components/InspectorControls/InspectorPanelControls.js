import { __ } from "@wordpress/i18n";

import { useState } from "@wordpress/element";

import { useSelect } from "@wordpress/data";
import { Button, ButtonGroup } from "@wordpress/components";

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

const InspectorPanelControls = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        id,
        url,
        alt,
        imageDimension,
        imageSizeVariant,
        displayPosition,
        positionType,
        positionValue,
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

    const getDisplayPosition = () => {
        if (!displayPosition) return [];

        const options = [];

        displayPosition.map((position) => {
            options.push({
                label: position,
                value: position.toLowerCase(),
            });
        });

        return options;
    };

    const [buttons, setButtons] = useState({
        twentyFive: {
            id: 1,
            label: "25%",
            value: imageDimension === "25%" ? true : false,
        },
        fifty: {
            id: 2,
            label: "50%",
            value: imageDimension === "50%" ? true : false,
        },
        seevntyFive: {
            id: 3,
            label: "75%",
            value: imageDimension === "75%" ? true : false,
        },
        oneHundred: {
            id: 4,
            label: "100%",
            value: imageDimension === "100%" ? true : false,
        },
    });

    const setSelected = (id) => {
        setButtons((currentButtons) => {
            return Object.fromEntries(
                Object.entries(currentButtons).map(([key, button]) => {
                    const newValue = button.value ? false : id === button.id;
                    return [key, { ...button, value: newValue }];
                })
            );
        });
    };

    // prettier-ignore
    const getVariantButtonTypes = (value) => !value ? "small" : imageSizeVariant;

    const buttonImageHandler = (button) => {
        setAttributes({ imageDimension: button.label });
        setSelected(button.id);
    };

    let positionAbsoluteConfigurationContent = "";

    if (positionType === "absolute") {
        positionAbsoluteConfigurationContent = (
            <PanelBody>
                <RangeControl
                    label={__("Top %", "team-members")}
                    value={positionValue.top}
                    onChange={(value) =>
                        setAttributes({ positionValue: { ...positionValue, top: value } })
                    }
                    min={0}
                    max={100}
                />
                <RangeControl
                    label={__("Right %", "team-members")}
                    value={positionValue.right}
                    onChange={(value) =>
                        setAttributes({ positionValue: { ...positionValue, right: value } })
                    }
                    min={0}
                    max={100}
                />
                <RangeControl
                    label={__("Bottom %", "team-members")}
                    value={positionValue.bottom}
                    onChange={(value) =>
                        setAttributes({
                            positionValue: { ...positionValue, bottom: value },
                        })
                    }
                    min={0}
                    max={100}
                />{" "}
                <RangeControl
                    label={__("Left %", "team-members")}
                    value={positionValue.left}
                    onChange={(value) =>
                        setAttributes({ positionValue: { ...positionValue, left: value } })
                    }
                    min={0}
                    max={100}
                />
            </PanelBody>
        );
    }
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
            <PanelBody title={__("Image Dimension", "block-gamblino")}>
                <ButtonGroup>
                    {Object.values(buttons).map((button) => {
                        return (
                            <Button
                                key={button.label}
                                variant={getVariantButtonTypes(button.value)}
                                onClick={buttonImageHandler.bind(null, button)}
                            >
                                {button.label}
                            </Button>
                        );
                    })}
                </ButtonGroup>
            </PanelBody>
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
            <PanelBody title={__("Position Element", "block-gamblino")}>
                <SelectControl
                    label={__("Position", "block-gamblino")}
                    options={getDisplayPosition()}
                    value={positionType}
                    onChange={(value) => setAttributes({ positionType: value })}
                />
            </PanelBody>

            {positionAbsoluteConfigurationContent}
        </InspectorControls>
    );
};

export default InspectorPanelControls;
