import { useDispatch } from '@wordpress/data'

const useActionPadding = (controlName) => {

    const action = useDispatch(controlName);

    const setBorderRadius = action && action.setBorderRadius;

    return { setBorderRadius }
}

export default useActionPadding