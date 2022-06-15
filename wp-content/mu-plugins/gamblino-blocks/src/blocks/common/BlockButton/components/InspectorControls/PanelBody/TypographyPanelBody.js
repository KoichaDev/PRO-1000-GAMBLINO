import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { PanelBody, SelectControl, Button } from "@wordpress/components";
import {
    typographyClassName,
    typographyClassNameDescription,
} from "../../../constants/typographySize";

import ControlIcon from "../../../icons/ControlIcon";

const TypographyPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        typographySizeClassName,
        isPressedTypographyControlIcon,
        typographySizeEnteredInput,
        typographySizeUnit,
    } = attributes;

    const [
        selectedTypographyClassName,
        setSelectedTypographyClassName,
    ] = useState(typographySizeClassName ?? "");

    // prettier-ignore
    const { fontSize } = (typographyClassNameDescription.find(text => text.value === selectedTypographyClassName));

    const onClickControllerIconHandler = () => {
        setAttributes({
            isPressedTypographyControlIcon: !isPressedTypographyControlIcon,
        });
    };

    const onChangeTypograhySizeClassNameHandler = (value) => {
        setSelectedTypographyClassName(value);
        setAttributes({ typographySizeClassName: value });
    };

    const ariaPressed = isPressedTypographyControlIcon
        ? __("false", "block-gamblino")
        : __("true", "block-gamblino");

    const className = isPressedTypographyControlIcon
        ? "is-small is-pressed has-icon"
        : "is-small has-icon bg-neutral-100! text-dark-900!";

    return (
        <PanelBody title={__("Typography", "block-gamblino")}>
            <div className="flex-row justify-content-between align-items-center">
                {!isPressedTypographyControlIcon ? (
                    <p style={{ fontSize: "13px" }}>
                        Size:
                        <span className="components-font-size-picker__header__hint">
                            {fontSize}
                        </span>
                    </p>
                ) : (
                    <p style={{ fontSize: "13px" }}>
                        Size:
                        <span className="components-font-size-picker__header__hint">
                            (custom)
                        </span>
                    </p>
                )}

                <Button
                    className={className}
                    aria-pressed={ariaPressed}
                    onClick={onClickControllerIconHandler}
                    arial-labe="Set Custom Size"
                    title="Set Custom Size"
                    isPressed
                >
                    <ControlIcon />
                </Button>
            </div>

            {!isPressedTypographyControlIcon ? (
                <>
                    <SelectControl
                        className="mt-5"
                        options={typographyClassName}
                        value={typographySizeClassName}
                        onChange={onChangeTypograhySizeClassNameHandler}
                    />
                </>
            ) : (
                <div className="[ controls-padding ] [ mt-5 ]">
                    <div
                        className="[ controls-padding_input-component ] m-0!"
                    >
                        <input
                            type="number"
                            value={typographySizeEnteredInput}
                            onChange={(e) =>
                                setAttributes({ typographySizeEnteredInput: +e.target.value })
                            }
                            style={{ margin: 0 }}
                        />
                        <select
                            aria-label={__("Select unit", "block-gamblino")}
                            value={typographySizeUnit}
                            onChange={(e) =>
                                setAttributes({ typographySizeUnit: e.target.value })
                            }
                        >
                            <option value="px">px</option>
                            <option value="em">em</option>
                        </select>
                    </div>
                </div>
            )}
        </PanelBody>
    );
};

export default TypographyPanelBody;
