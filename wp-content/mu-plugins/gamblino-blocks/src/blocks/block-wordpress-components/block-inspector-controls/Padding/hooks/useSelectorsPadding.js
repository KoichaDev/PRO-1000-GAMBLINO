import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const padding = useSelect(select => {
        const paddingStore = select(blockName)
        return paddingStore && paddingStore.getPaddingValue();
    }, [])

    const paddingUnit = useSelect(select => {
        const paddingUnitValue = select(blockName);
        return paddingUnitValue && paddingUnitValue.getPaddingUnit();
    }, [])

    const paddingVertical = useSelect(select => {
        const paddingVerticalValue = select(blockName);
        return paddingVerticalValue && paddingVerticalValue.getPaddingVerticalValue();
    }, [])

    const paddingVerticalUnit = useSelect(select => {
        const paddingVerticalUnit = select(blockName);
        return paddingVerticalUnit && paddingVerticalUnit.getPaddingVerticalUnit();
    }, [])

    const paddingHorizontal = useSelect(select => {
        const paddingHorizontalValue = select(blockName);
        return paddingHorizontalValue && paddingHorizontalValue.getPaddingHorizontalValue();
    }, [])
    
    const paddingHorizontalUnit = useSelect(select => {
        const paddingHorizontalUnit = select(blockName);
        return paddingHorizontalUnit && paddingHorizontalUnit.getPaddingHorizontalUnit();
    }, [])

    return { 
        padding, 
        paddingUnit, 
        paddingVertical, 
        paddingVerticalUnit, 
        paddingHorizontal, 
        paddingHorizontalUnit,
    }
}

export default useSelectorsPadding;