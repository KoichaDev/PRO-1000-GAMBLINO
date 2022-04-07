import { TEXT_ALIGNMENT } from './types';

import DEFAULT_STATE from './default-state';

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case TEXT_ALIGNMENT:
            return { ...state, textAlignment: action.value };
        default:
            return state;
    }
};

export default reducer;
