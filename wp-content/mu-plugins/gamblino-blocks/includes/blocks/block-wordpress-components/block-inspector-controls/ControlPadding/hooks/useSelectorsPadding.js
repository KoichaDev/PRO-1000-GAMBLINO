import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const paddingValue = useSelect(select => {
        const paddingStore = select(blockName)
        return paddingStore && paddingStore.getPaddingValue().value;
    }, [])

    const paddingUnit = useSelect(select => {
        const paddingUnitPxStore = select(blockName);
        return paddingUnitPxStore && paddingUnitPxStore.getPaddingUnit().value;
    }, [])

    return { paddingValue, paddingUnit }
}

export default useSelectorsPadding;