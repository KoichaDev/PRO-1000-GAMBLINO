import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    SelectControl,
    RangeControl,
} from "@wordpress/components";

const DisplayPositionPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { positionType, positionValue, displayPosition } = attributes;

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
        <>
            <PanelBody title={__("Position Element", "block-gamblino")}>
                <SelectControl
                    label={__("Position", "block-gamblino")}
                    options={getDisplayPosition()}
                    value={positionType}
                    onChange={(value) => setAttributes({ positionType: value })}
                />
            </PanelBody>

            {positionAbsoluteConfigurationContent}
        </>
    );
};

export default DisplayPositionPanelBody;
