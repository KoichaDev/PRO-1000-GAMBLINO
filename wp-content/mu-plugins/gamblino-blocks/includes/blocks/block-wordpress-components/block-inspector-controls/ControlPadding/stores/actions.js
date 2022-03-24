import {
    BORDER_RADIUS,
    PADDING,
    PADDING_HORIZONTAL,
    PADDING_HORIZONTAL_UNIT,
    PADDING_VERTICAL,
    PADDING_VERTICAL_UNIT,
    PADDING_UNIT,
    PADDING_LINKED_SIDES,
} from './types';

export const setBorderRadiusValue = (value) => {
    return {
        type: BORDER_RADIUS,
        value,
    };
}

export const setPaddingValue = (value) => {
    return {
        type: PADDING,
        value,
    };
}

export const setPaddingUnit = (value) => {
    return {
        type: PADDING_UNIT,
        value,
    };
}

export const setPaddingHorizontalValue = (value) => {
    return {
        type: PADDING_HORIZONTAL,
        value,
    };
}

export const setPaddingHorizontalUnit = (value) => {
    return {
        type: PADDING_HORIZONTAL_UNIT,
        value,
    };
}

export const setPaddingVerticalValue = (value) => {
    return {
        type: PADDING_VERTICAL,
        value,
    };
}

export const setPaddingVerticalUnit = (value) => {
    return {
        type: PADDING_VERTICAL_UNIT,
        value,
    };
}

export const setIsPaddingLinkedSides = (value) => {
    return {
        type: PADDING_LINKED_SIDES,
        value,
    };
}