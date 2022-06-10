import { __ } from "@wordpress/i18n";
import { PanelBody, RangeControl, SelectControl } from "@wordpress/components";

const MarginSpacing = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { margin, marginUnitArray, marginUnit } = attributes;

    const getDisplayPosition = () => {
        if (!marginUnitArray) return [];

        const options = [];

        marginUnitArray.map((position) => {
            options.push({
                label: position,
                value: position.toLowerCase(),
            });
        });

        return options;
    };

    return (
        <PanelBody title={__("Margin", "block-gamblino")}>
            <SelectControl
                label={__("Unit Type", "block-gamblino")}
                options={getDisplayPosition()}
                value={marginUnit}
                onChange={(value) => setAttributes({ marginUnit: value })}
            />
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
    );
};

export default MarginSpacing;
