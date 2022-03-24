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

    const isPaddingLinkedSides = useSelect(select => {
        const isPaddingLinkedSidesValue = select(blockName);
        return isPaddingLinkedSidesValue && isPaddingLinkedSidesValue.getPaddingLinkedSides();
    }, [])

    return { paddingValue, paddingUnit, isPaddingLinkedSides }
}

export default useSelectorsPadding;