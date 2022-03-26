import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (blockName) => {
    const borderRadius = useSelect(select => {
        const borderRadiusStore = select(blockName)
        return borderRadiusStore && borderRadiusStore.getBorderRadius();
    }, [])


    return { borderRadius }
}

export default useSelectorsPadding;