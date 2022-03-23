import { useSelect, useDispatch } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const paddingValue = useSelect(select => {
        const paddingStore = select(blockName)
        return paddingStore && paddingStore.getPaddingValue().value
    }, [])

    return { paddingValue }
}

export default useSelectorsPadding;