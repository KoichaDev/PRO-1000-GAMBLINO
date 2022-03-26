import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {

    const action = useDispatch(blockName);

    const setBorderRadius = action && action.setBorderRadius;

    return { setBorderRadius }
}

export default useActionPadding