import { useSelect } from '@wordpress/data'

const useSelectorsPadding = (controlName) => {
    const borderRadius = useSelect(select => {
        const borderRadiusStore = select(controlName)
        return borderRadiusStore && borderRadiusStore.getBorderRadius();
    }, [])


    return { borderRadius }
}

export default useSelectorsPadding;