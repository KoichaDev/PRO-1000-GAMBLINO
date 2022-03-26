import { BORDER_RADIUS } from './types';

export const setBorderRadius = (value) => {
    return {
        type: BORDER_RADIUS,
        value,
    };
}