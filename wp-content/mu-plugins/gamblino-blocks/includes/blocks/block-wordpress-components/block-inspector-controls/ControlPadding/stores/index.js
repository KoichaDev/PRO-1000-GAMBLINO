import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';

const PaddingStore = (blockName) => {
    const store = createReduxStore(blockName, {
        reducer,
        selectors, // selectors is only going to return something from a local state, and not any API (side-effects )
        actions,
    });

    return register(store);
}

export default PaddingStore;

