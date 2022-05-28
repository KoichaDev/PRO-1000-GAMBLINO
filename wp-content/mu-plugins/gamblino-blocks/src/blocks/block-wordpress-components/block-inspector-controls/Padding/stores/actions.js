import {
    PADDING,
    PADDING_HORIZONTAL,
    PADDING_HORIZONTAL_UNIT,
    PADDING_VERTICAL,
    PADDING_VERTICAL_UNIT,
    PADDING_UNIT,
} from './types';

export const setPadding = (value) => {
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

export const setPaddingHorizontal = (value) => {
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

export const setPaddingVertical = (value) => {
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