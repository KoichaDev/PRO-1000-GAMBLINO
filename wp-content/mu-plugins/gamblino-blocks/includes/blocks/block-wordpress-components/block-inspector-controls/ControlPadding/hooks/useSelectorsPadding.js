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

    return { paddingValue, paddingUnit }
}

export default useSelectorsPadding;