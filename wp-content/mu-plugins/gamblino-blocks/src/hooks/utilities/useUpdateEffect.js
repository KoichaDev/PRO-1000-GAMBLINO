import { useEffect, useRef } from '@wordpress/element'
/**
 * It runs the callback function only after the first render
 * @param callback - The function to be called after the update.
 * @param dependencies - An array of dependencies that will be used to determine if the effect should
 * be called.
 */

const useUpdateEffect = (callback, dependencies) => {
    const firstRenderRef = useRef(true);

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }
        return callback()
    }, dependencies);
}

export default useUpdateEffect;