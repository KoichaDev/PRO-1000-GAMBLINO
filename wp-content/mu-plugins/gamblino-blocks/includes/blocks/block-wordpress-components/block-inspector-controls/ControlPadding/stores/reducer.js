import {
    BORDER_RADIUS,
    PADDING,
    PADDING_HORIZONTAL,
    PADDING_HORIZONTAL_EM,
    PADDING_HORIZONTAL_PX,
    PADDING_VERTICAL,
    PADDING_VERTICAL_EM,
    PADDING_VERTICAL_PX,
    UNIT_EM,
    UNIT_PX
} from './types';

import DEFAULT_STATE from './default-state';

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case BORDER_RADIUS:
            return { ...state, borderRadius: action.value };
        case PADDING:
            return { ...state, padding: action.value };
        case UNIT_PX:
            return { ...state, unitPx: action.value };
        case UNIT_EM:
            return { ...state, unitEm: action.value };
        case PADDING_HORIZONTAL:
            return { ...state, paddingHorizontal: action.value };
        case PADDING_HORIZONTAL_EM:
            return { ...state, paddingHorizontalEm: action.value };
        case PADDING_HORIZONTAL_PX:
            return { ...state, paddingHorizontalPx: action.value };
        case PADDING_VERTICAL:
            return { ...state, paddingVertical: action.value };
        case PADDING_VERTICAL_EM:
            return { ...state, paddingVerticalEm: action.value };
        case PADDING_VERTICAL_PX:
            return { ...state, paddingVerticalPx: action.value };
        default:
            return state;
    }
};

export default reducer;
