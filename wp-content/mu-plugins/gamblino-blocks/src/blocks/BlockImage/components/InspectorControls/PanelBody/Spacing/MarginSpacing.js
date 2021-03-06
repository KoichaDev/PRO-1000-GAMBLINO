import { __ } from "@wordpress/i18n";
import {
    PanelBody,
    RangeControl,
    SelectControl,
    Button,
} from "@wordpress/components";

import "./MarginSpacing.scss";

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

    let minRangeValue = 0;
    let maxRangeValue = 0;

    if (marginUnit === "px") {
        minRangeValue = -9999;
        maxRangeValue = 9999;
    }

    if (marginUnit === "em" || marginUnit === "rem") {
        minRangeValue = -20;
        maxRangeValue = 20;
    }

    const onChangeMarginTopHandler = (value) => {
        setAttributes({ isResetMargin: false });
        setAttributes({ margin: { ...margin, top: value } });
    };

    const onChangeMarginRightHandler = (value) => {
        setAttributes({ isResetMargin: false });
        setAttributes({ margin: { ...margin, right: value } });
    };

    const onChangeMarginBottomHandler = (value) => {
        setAttributes({ isResetMargin: false });
        setAttributes({
            margin: { ...margin, bottom: value },
        });
    };

    const onChangeMarginLeftHandler = (value) => {
        setAttributes({ isResetMargin: false });
        setAttributes({ margin: { ...margin, left: value } });
    };

    const resetValueHandler = () => {
        setAttributes({ isResetMargin: true });
        setAttributes({ marginUnit: "px" });
        setAttributes({ margin: "auto" });
        setAttributes({
            margin: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
        });
    };

    return (
        <PanelBody title={__("Margin", "block-gamblino")}>
            <div className="margin-spacing-control">
                <SelectControl
                    label={__("Unit Type", "block-gamblino")}
                    options={getDisplayPosition()}
                    value={marginUnit}
                    onChange={(value) => setAttributes({ marginUnit: value })}
                    help={__('if the px value is > 16, then use em/rem unit value instead', 'block-gamblino')}

                />
                <Button
                    title="Reset"
                    onClick={resetValueHandler}
                    variant="primary"
                    isDestructive
                >
                    Reset
                </Button>
            </div>
            <RangeControl
                label={__("Top", "team-members")}
                value={margin.top}
                step={0.01}
                onChange={onChangeMarginTopHandler}
                min={minRangeValue}
                max={maxRangeValue}
            />
            <RangeControl
                label={__("Right", "team-members")}
                value={margin.right}
                step={0.01}
                onChange={onChangeMarginRightHandler}
                min={minRangeValue}
                max={maxRangeValue}
            />
            <RangeControl
                label={__("Bottom", "team-members")}
                value={margin.bottom}
                step={0.01}
                onChange={onChangeMarginBottomHandler}
                min={minRangeValue}
                max={maxRangeValue}
            />
            <RangeControl
                label={__("Left", "team-members")}
                value={margin.left}
                step={0.01}
                onChange={onChangeMarginLeftHandler}
                min={minRangeValue}
                max={maxRangeValue}
            />
        </PanelBody>
    );
};

export default MarginSpacing;
