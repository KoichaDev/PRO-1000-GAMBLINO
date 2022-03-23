import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {

    const action = useDispatch(blockName);

    const setPaddingValue = action && action.setPaddingValue;

    const setPaddingUnit = action && action.setPaddingUnit;

    return { setPaddingValue, setPaddingUnit }
}

export default useActionPadding