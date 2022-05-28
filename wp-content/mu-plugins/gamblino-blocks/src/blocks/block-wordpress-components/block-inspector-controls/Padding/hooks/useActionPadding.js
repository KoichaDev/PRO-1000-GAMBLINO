import { useDispatch } from '@wordpress/data'

const useActionPadding = (blockName) => {

    const action = useDispatch(blockName);

    const setPadding = action && action.setPadding;

    const setPaddingUnit = action && action.setPaddingUnit;

    const setIsPaddingLinkedSides = action && action.setIsPaddingLinkedSides;

    const setPaddingVertical = action && action.setPaddingVertical;

    const setPaddingVerticalUnit = action && action.setPaddingVerticalUnit;

    const setPaddingHorizontal = action && action.setPaddingHorizontal;

    const setPaddingHorizontalUnit = action && action.setPaddingHorizontalUnit;

    return {
        setPadding,
        setPaddingUnit,
        setIsPaddingLinkedSides,
        setPaddingVertical,
        setPaddingVerticalUnit,
        setPaddingHorizontal,
        setPaddingHorizontalUnit,
    }
}

export default useActionPadding