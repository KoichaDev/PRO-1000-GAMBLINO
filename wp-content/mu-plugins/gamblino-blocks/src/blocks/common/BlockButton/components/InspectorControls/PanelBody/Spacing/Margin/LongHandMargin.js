import { __ } from "@wordpress/i18n";

const LongHandmargin = ({ setIsClickedMarginLongHandInputField, ...props }) => {
    const { attributes, setAttributes } = props;
    const { marginLongHandSpacing, marginLongHandSpacingSelectUnit } = attributes;
    // prettier-ignore
    const { top: topUnit, right: rightUnit, bottom: bottomUnit, left: leftUnit } = marginLongHandSpacingSelectUnit
    // prettier-ignore
    const { top: topValue, right: rightValue, bottom: bottomValue, left: leftValue } = marginLongHandSpacing;

    return (
        <>
            <div className="controls-padding_input-component">
                <input
                    type="number"
                    aria-label="top"
                    title="Top"
                    value={topValue}
                    onClick={() =>
                        setIsClickedMarginLongHandInputField({
                            top: true,
                            right: false,
                            bottom: false,
                            left: false,
                        })
                    }
                    onChange={(e) => {
                        setAttributes({
                            marginLongHandSpacing: {
                                top: e.target.value,
                                right: rightValue,
                                bottom: bottomValue,
                                left: leftValue,
                            },
                        });
                    }}
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={topUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginLongHandSpacingSelectUnit: {
                                top: e.target.value,
                                right: rightUnit,
                                bottom: bottomUnit,
                                left: leftUnit,
                            },
                        })
                    }
                >
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>

            <div className="controls-padding_input-component">
                <input
                    type="number"
                    aria-label="Right"
                    title="Right"
                    value={rightValue}
                    onChange={(e) => {
                        setAttributes({
                            marginLongHandSpacing: {
                                top: topValue,
                                right: e.target.value,
                                bottom: bottomValue,
                                left: leftValue,
                            },
                        });
                    }}
                    onClick={() =>
                        setIsClickedMarginLongHandInputField({
                            top: false,
                            right: true,
                            bottom: false,
                            left: false,
                        })
                    }
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={rightUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginLongHandSpacingSelectUnit: {
                                top: topUnit,
                                right: e.target.value,
                                bottom: bottomUnit,
                                left: leftUnit,
                            },
                        })
                    }
                >
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>

            <div className="controls-padding_input-component">
                <input
                    type="number"
                    aria-label="Bottom"
                    title="Bottom"
                    value={bottomValue}
                    onChange={(e) => {
                        setAttributes({
                            marginLongHandSpacing: {
                                top: topValue,
                                right: rightValue,
                                bottom: e.target.value,
                                left: leftValue,
                            },
                        });
                    }}
                    onClick={() =>
                        setIsClickedMarginLongHandInputField({
                            top: false,
                            right: false,
                            bottom: true,
                            left: false,
                        })
                    }
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={bottomUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginLongHandSpacingSelectUnit: {
                                top: topUnit,
                                right: rightUnit,
                                bottom: e.target.value,
                                left: leftUnit,
                            },
                        })
                    }
                >
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>
            <div className="controls-padding_input-component">
                <input
                    type="number"
                    aria-label="Left"
                    title="Left"
                    value={leftValue}
                    onChange={(e) => {
                        setAttributes({
                            marginLongHandSpacing: {
                                top: topValue,
                                right: rightValue,
                                bottom: bottomValue,
                                left: e.target.value,
                            },
                        });
                    }}
                    onClick={() =>
                        setIsClickedMarginLongHandInputField({
                            top: false,
                            right: false,
                            bottom: false,
                            left: true,
                        })
                    }
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={leftUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginLongHandSpacingSelectUnit: {
                                top: topUnit,
                                right: rightUnit,
                                bottom: bottomUnit,
                                left: e.target.value,
                            },
                        })
                    }
                >
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>
        </>
    );
};

export default LongHandmargin;
