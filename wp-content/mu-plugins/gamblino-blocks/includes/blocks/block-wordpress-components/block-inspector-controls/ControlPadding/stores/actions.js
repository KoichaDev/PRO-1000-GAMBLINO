import {
    BORDER_RADIUS,
    PADDING,
    PADDING_HORIZONTAL,
    PADDING_HORIZONTAL_EM,
    PADDING_HORIZONTAL_PX,
    PADDING_VERTICAL,
    PADDING_VERTICAL_EM,
    PADDING_VERTICAL_PX,
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

export const setPaddingHorizontalEmValue = (value) => {
    return {
        type: PADDING_HORIZONTAL_EM,
        value,
    };
}

export const setPaddingHorizontalPxValue = (value) => {
    return {
        type: PADDING_HORIZONTAL_PX,
        value,
    };
}

export const setPaddingVerticalValue = (value) => {
    return {
        type: PADDING_VERTICAL,
        value,
    };
}

export const setPaddingVerticalEmValue = (value) => {
    return {
        type: PADDING_VERTICAL_EM,
        value,
    };
}

export const setPaddingVerticalPxValue = (value) => {
    return {
        type: PADDING_VERTICAL_PX,
        value,
    };
}

export const setIsPaddingLinkedSides = (value) => {
    return {
        type: PADDING_LINKED_SIDES,
        value,
    };
}