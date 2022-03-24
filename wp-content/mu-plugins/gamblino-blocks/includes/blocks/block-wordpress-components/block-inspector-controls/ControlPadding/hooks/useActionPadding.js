import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {

    const action = useDispatch(blockName);

    const setPaddingValue = action && action.setPaddingValue;

    const setPaddingUnit = action && action.setPaddingUnit;

    const setIsPaddingLinkedSides = action && action.setIsPaddingLinkedSides;

    return { setPaddingValue, setPaddingUnit, setIsPaddingLinkedSides }
}

export default useActionPadding