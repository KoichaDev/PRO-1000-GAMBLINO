import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { Button, ButtonGroup } from "@wordpress/components";
import { PanelBody } from "@wordpress/components";

const ButtonImageSizePanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { imageDimension, imageSizeVariant } = attributes;

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
    return (
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
    );
};

export default ButtonImageSizePanelBody;
