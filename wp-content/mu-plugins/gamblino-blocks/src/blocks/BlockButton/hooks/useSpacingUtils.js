const useSpacingUtils = (attributes) => {
    const {
        buttonIsClickedLinkSides,
        buttonPadding,
        paddingSelectUnit,
        buttonPaddingHorizontal,
        paddingHorizontalSelectUnit,
        buttonPaddingVertical,
        paddingVerticalSelectUnit,
        // Margin attributes
        isMarginShorthandButtonClicked,
        marginLongHandSpacing,
        marginLongHandSpacingSelectUnit,
        IsClickedLinkSidesMargin,
        marginNoneShortHandMargin,
        marginSpacingUnit,
        marginShorthandHorizontal,
        marginShortHandHorizontalSelectUnit,
        marginShortHandVertical,
        marginShortHandVerticalSelectUnit,
    } = attributes;

    let marginValue = "";

    if (isMarginShorthandButtonClicked) {
        // prettier-ignore
        const { top: topUnit, right: rightUnit, bottom: bottomUnit, left: leftUnit } = marginLongHandSpacingSelectUnit
        // prettier-ignore
        const { top: topValue, right: rightValue, bottom: bottomValue, left: leftValue } = marginLongHandSpacing;
        const topMargin = `${topValue}${topUnit}`;
        const rightMargin = `${rightValue}${rightUnit}`;
        const bottomMargin = `${bottomValue}${bottomUnit}`;
        const leftMargin = `${leftValue}${leftUnit}`;

        marginValue = `${topMargin} ${rightMargin} ${bottomMargin} ${leftMargin}`;
    } else {
        if (!IsClickedLinkSidesMargin) {
            marginValue = `${marginNoneShortHandMargin}${marginSpacingUnit}`;
        }

        if (IsClickedLinkSidesMargin) {
            marginValue = `${marginShortHandVertical}${marginShortHandVerticalSelectUnit} ${marginShorthandHorizontal}${marginShortHandHorizontalSelectUnit}`;
        }
    }

    let paddingValue = "";

    if (!buttonIsClickedLinkSides) {
        paddingValue = `${buttonPadding}${paddingSelectUnit}`;
    } else {
        paddingValue = `${buttonPaddingVertical}${paddingVerticalSelectUnit} ${buttonPaddingHorizontal}${paddingHorizontalSelectUnit}`;
    }

    return { marginValue, paddingValue };
}

export default useSpacingUtils