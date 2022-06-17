import { __ } from "@wordpress/i18n";

const NoneShortHandMargin = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { marginSpacingUnit, marginNoneShortHandMargin } = attributes;

    return (
        <>
            <div className="controls-padding_input-component">
                <input
                    type="number"
                    value={marginNoneShortHandMargin}
                    onChange={(e) =>
                        setAttributes({
                            marginNoneShortHandMargin: +e.target.value,
                        })
                    }
                    pattern="[0-9]*"
                />
                <select
                    aria-label={__("Select unit", "block-gamblino")}
                    value={marginSpacingUnit}
                    onChange={(e) => setAttributes({ marginSpacingUnit: e.target.value })}
                >
                    <option value="px">px</option>
                    <option value="em">em</option>
                </select>
            </div>
        </>
    );
};

export default NoneShortHandMargin;
