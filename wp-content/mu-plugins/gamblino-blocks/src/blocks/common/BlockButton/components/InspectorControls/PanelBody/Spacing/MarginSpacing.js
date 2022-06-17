import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { Button } from "@wordpress/components";

import ButtonLinkSideMargin from "./Margin/ButtonLinkSideMargin";
import NoneShortHandMargin from "./Margin/NoneShortHandMargin";
import ShortHandMargin from "./Margin/ShortHandMargin";

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
    const [
        isClickedMarginVerticalField,
        setIsClickedMarginVerticalField,
    ] = useState(false);

    const ariaPressed = isMarginShorthandButtonClicked
        ? __("false", "block-gamblino")
        : __("true", "block-gamblino");

    const className = isMarginShorthandButtonClicked
        ? "is-small is-pressed has-icon"
        : "is-small has-icon bg-neutral-100! text-dark-900!";

    let paddingIconContent = "";

    if (!IsClickedLinkSidesMargin) {
        paddingIconContent = <PaddingIcon />;
    } else {
        if (isClickedMarginVerticalField) {
            paddingIconContent = (
                <PaddingIcon
                    fillTop={isClickedMarginVerticalField ? "#C5C7C9" : ""}
                    fillBottom={isClickedMarginVerticalField ? "#C5C7C9" : ""}
                />
            );
        } else {
            paddingIconContent = (
                <PaddingIcon
                    fillTop="#1e1e1e"
                    fillBottom="#1e1e1e"
                    fillLeft={isClickedMarginHorizontalField ? "#C5C7C9" : ""}
                    fillRight={isClickedMarginHorizontalField ? "#C5C7C9" : ""}
                />
            );
        }
    }

    const onClickControllerIconHandler = () => {
        setAttributes({
            isMarginShorthandButtonClicked: !isMarginShorthandButtonClicked,
        });
    };

    return (
        <>
            <div className="flex-row justify-content-between align-items-center mb-5">
                {paddingIconContent}

                {!isMarginShorthandButtonClicked ? (
                    <p style={{ fontSize: "13px" }}>Margin</p>
                ) : (
                    <p style={{ fontSize: "13px" }}>
                        Margin:
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

            {!isMarginShorthandButtonClicked && (
                <div className="controls-padding">
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
            )}
        </>
    );
};

export default MarginSpacing;
