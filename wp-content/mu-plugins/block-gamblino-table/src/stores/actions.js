import { TEXT_ALIGNMENT } from './types';

export const setTextAlignment = (value) => {
    return {
        type: TEXT_ALIGNMENT,
        value,
    };
}
