import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {
    const action = useDispatch(blockName);

    const setTextAlignment = action && action.setTextAlignment;

    return { setTextAlignment }
}

export default useActionPadding