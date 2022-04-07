import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const textAlignment = useSelect(select => {
        const textAlignmentStore = select(blockName)
        return textAlignmentStore && textAlignmentStore.getTextAlignment();
    }, [])



    return { textAlignment }
}

export default useSelectorsPadding;