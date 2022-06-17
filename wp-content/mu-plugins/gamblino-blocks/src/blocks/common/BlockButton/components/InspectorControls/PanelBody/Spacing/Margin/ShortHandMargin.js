import { __ } from "@wordpress/i18n";

const ShortHandMargin = ({
    setIsClickedMarginVerticalField,
    setIsClickedMarginHorizontalField,
    ...props
}) => {
    const { attributes, setAttributes } = props;

    const {
        marginShorthandHorizontal,
        marginShortHandHorizontalSelectUnit,
        marginShortHandVertical,
        marginShortHandVerticalSelectUnit,
    } = attributes;
    return (
        <>
            <div className="controls-padding_input-component">
                <input
                    type="number"
                    aria-label="Vertical"
                    title="Vertical"
                    value={marginShortHandVertical}
                    onChange={(e) => {
                        setAttributes({
                            marginShortHandVertical: +e.target.value,
                        });
                    }}
                    onClick={() => {
                        setIsClickedMarginHorizontalField(false);
                        setIsClickedMarginVerticalField(true);
                    }}
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={marginShortHandVerticalSelectUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginShortHandVerticalSelectUnit: e.target.value,
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
                    aria-label="Horizontal"
                    title="Horizontal"
                    value={marginShorthandHorizontal}
                    onChange={(e) => {
                        setAttributes({
                            marginShorthandHorizontal: +e.target.value,
                        });
                    }}
                    onClick={() => {
                        setIsClickedMarginHorizontalField(true);
                        setIsClickedMarginVerticalField(false);
                    }}
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={marginShortHandHorizontalSelectUnit}
                    onChange={(e) =>
                        setAttributes({
                            marginShortHandHorizontalSelectUnit: e.target.value,
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

export default ShortHandMargin;
