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

    const paddingHorizontalValue = useSelect(select => {
        const paddingHorizontalValue = select(blockName);
        return paddingHorizontalValue && paddingHorizontalValue.getPaddingHorizontalValue();
    }, [])
    
    const paddingHorizontalUnit = useSelect(select => {
        const paddingHorizontalUnit = select(blockName);
        return paddingHorizontalUnit && paddingHorizontalUnit.getPaddingHorizontalUnit();
    }, [])


    const isPaddingLinkedSides = useSelect(select => {
        const isPaddingLinkedSidesValue = select(blockName);
        return isPaddingLinkedSidesValue && isPaddingLinkedSidesValue.getPaddingLinkedSides();
    }, [])

    return { 
        paddingValue, 
        paddingUnit, 
        paddingVerticalValue, 
        isPaddingLinkedSides, 
        paddingVerticalUnit, 
        paddingHorizontalValue, 
        paddingHorizontalUnit 
    }
}

export default useSelectorsPadding;