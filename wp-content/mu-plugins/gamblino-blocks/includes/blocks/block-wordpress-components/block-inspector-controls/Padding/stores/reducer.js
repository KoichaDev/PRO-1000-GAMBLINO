import {
    BORDER_RADIUS,
    PADDING,
    PADDING_HORIZONTAL,
    PADDING_HORIZONTAL_UNIT,
    PADDING_VERTICAL,
    PADDING_VERTICAL_UNIT,
    PADDING_UNIT,
} from './types';

import DEFAULT_STATE from './default-state';

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case BORDER_RADIUS:
            return { ...state, borderRadius: action.value };
        case PADDING:
            return { ...state, padding: action.value };
        case PADDING_UNIT:
            return { ...state, paddingUnit: action.value };
        case PADDING_HORIZONTAL:
            return { ...state, paddingHorizontal: action.value };
        case PADDING_HORIZONTAL_UNIT:
            return { ...state, paddingHorizontalUnit: action.value };
        case PADDING_VERTICAL:
            return { ...state, paddingVertical: action.value };
        case PADDING_VERTICAL_UNIT:
            return { ...state, paddingVerticalUnit: action.value };
        default:
            return state;
    }
};

export default reducer;
