import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { Button } from "@wordpress/components";

import ButtonLinkSideMargin from "./Margin/ButtonLinkSideMargin";
import NoneShortHandMargin from "./Margin/NoneShortHandMargin";
import ShortHandMargin from "./Margin/ShortHandMargin";
import LongHandMargin from "./Margin/LongHandMargin";

import ControlIcon from "../../../../icons/ControlIcon";
import { PaddingIcon } from "@/common/Icons/Spaces";

const MarginSpacing = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        isMarginShorthandButtonClicked,
        IsClickedLinkSidesMargin,
    } = attributes;

    // prettier-ignore
    const [isClickedMarginHorizontalField, setIsClickedMarginHorizontalField] = useState(false);
    // prettier-ignore
    const [isClickedMarginVerticalField, setIsClickedMarginVerticalField,] = useState(false);

    const [
        isClickedMarginLongHandInputField,
        setIsClickedMarginLongHandInputField,
    ] = useState({
        top: false,
        right: false,
        bottom: false,
        left: false,
    });

    // prettier-ignore
    const notClickedMarginLongHandInputFields = Object.values(isClickedMarginLongHandInputField).every(value => value === false);

    let marginIconHighlightPositionIndicator = "";

    if (isClickedMarginLongHandInputField.top) {
        marginIconHighlightPositionIndicator = __("(top)", "block-gamblino");
    }

    if (isClickedMarginLongHandInputField.right) {
        marginIconHighlightPositionIndicator = __("(right)", "block-gamblino");
    }

    if (isClickedMarginLongHandInputField.bottom) {
        marginIconHighlightPositionIndicator = __("(bottom)", "block-gamblino");
    }

    if (isClickedMarginLongHandInputField.left) {
        marginIconHighlightPositionIndicator = __("(left)", "block-gamblino");
    }

    const ariaPressed = isMarginShorthandButtonClicked
        ? __("false", "block-gamblino")
        : __("true", "block-gamblino");

    const className = isMarginShorthandButtonClicked
        ? "is-small is-pressed has-icon"
        : "is-small has-icon bg-neutral-100! text-dark-900!";

    let marginIcon = "";

    if (!IsClickedLinkSidesMargin) {
        marginIcon = <PaddingIcon />;
    } else {
        if (isClickedMarginVerticalField) {
            marginIcon = (
                <PaddingIcon
                    fillTop={isClickedMarginVerticalField ? "#C5C7C9" : ""}
                    fillBottom={isClickedMarginVerticalField ? "#C5C7C9" : ""}
                />
            );
        } else {
            marginIcon = (
                <PaddingIcon
                    fillTop="#1e1e1e"
                    fillBottom="#1e1e1e"
                    fillLeft={isClickedMarginHorizontalField ? "#C5C7C9" : ""}
                    fillRight={isClickedMarginHorizontalField ? "#C5C7C9" : ""}
                />
            );
        }
    }

    if (isMarginShorthandButtonClicked) {
        marginIcon = (
            <PaddingIcon
                fillTop={isClickedMarginLongHandInputField.top ? "#C5C7C9" : ""}
                fillRight={isClickedMarginLongHandInputField.right ? "#C5C7C9" : ""}
                fillBottom={isClickedMarginLongHandInputField.bottom ? "#C5C7C9" : ""}
                fillLeft={isClickedMarginLongHandInputField.left ? "#C5C7C9" : ""}
            />
        );
    }

    const onClickControllerIconHandler = () => {
        setAttributes({
            isMarginShorthandButtonClicked: !isMarginShorthandButtonClicked,
        });
    };

    return (
        <>
            <div className="flex-row justify-content-between align-items-center mb-5">
                {!isMarginShorthandButtonClicked ? (
                    <p style={{ fontSize: "13px" }}>Margin</p>
                ) : (
                    <p style={{ fontSize: "13px" }}>
                        Margin:
                        <span className="components-font-size-picker__header__hint">
                            {notClickedMarginLongHandInputFields
                                ? __("(custom)", "block-gamblino")
                                : marginIconHighlightPositionIndicator}
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

            {!isMarginShorthandButtonClicked ? (
                <div className="controls-padding">
                    <div className="flex-row">{marginIcon}</div>
                    <>
                        {!IsClickedLinkSidesMargin ? (
                            <NoneShortHandMargin {...props} />
                        ) : (
                            <ShortHandMargin
                                setIsClickedMarginVerticalField={
                                    setIsClickedMarginVerticalField
                                }
                                setIsClickedMarginHorizontalField={
                                    setIsClickedMarginHorizontalField
                                }
                                {...props}
                            />
                        )}
                        <ButtonLinkSideMargin {...props} />
                    </>
                </div>
            ) : (
                <div className="[ controls-padding ]">
                    <div>{marginIcon}</div>
                    <div className="flex-row flex-wrap justify-content-end gap-3!">
                        <LongHandMargin
                            setIsClickedMarginLongHandInputField={
                                setIsClickedMarginLongHandInputField
                            }
                            {...props}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default MarginSpacing;
