import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const paddingValue = useSelect(select => {
        const paddingStore = select(blockName)
        return paddingStore && paddingStore.getPaddingValue();
    }, [])

    const paddingUnit = useSelect(select => {
        const paddingUnitValue = select(blockName);
        return paddingUnitValue && paddingUnitValue.getPaddingUnit();
    }, [])

    const paddingVerticalValue = useSelect(select => {
        const paddingVerticalValue = select(blockName);
        return paddingVerticalValue && paddingVerticalValue.getPaddingVerticalValue();
    }, [])

    const paddingVerticalUnit = useSelect(select => {
        const paddingVerticalUnit = select(blockName);
        return paddingVerticalUnit && paddingVerticalUnit.getPaddingVerticalUnit();
    }, [])

    const isPaddingLinkedSides = useSelect(select => {
        const isPaddingLinkedSidesValue = select(blockName);
        return isPaddingLinkedSidesValue && isPaddingLinkedSidesValue.getPaddingLinkedSides();
    }, [])

    return { paddingValue, paddingUnit, paddingVerticalValue, isPaddingLinkedSides, paddingVerticalUnit }
}

export default useSelectorsPadding;