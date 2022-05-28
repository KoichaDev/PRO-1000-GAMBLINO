import { BORDER_RADIUS } from './types';

import DEFAULT_STATE from './default-state';

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case BORDER_RADIUS:
            return { ...state, borderRadius: action.value };
        default:
            return state;
    }
};

export default reducer;
