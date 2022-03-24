import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {

    const action = useDispatch(blockName);

    const setPaddingValue = action && action.setPaddingValue;

    const setPaddingUnit = action && action.setPaddingUnit;

    const setIsPaddingLinkedSides = action && action.setIsPaddingLinkedSides;

    const setPaddingVerticalValue = action && action.setPaddingVerticalValue;

    const setPaddingVerticalUnit = action && action.setPaddingVerticalUnit;

    return {
        setPaddingValue,
        setPaddingUnit,
        setIsPaddingLinkedSides,
        setPaddingVerticalValue,
        setPaddingVerticalUnit,
    }
}

export default useActionPadding