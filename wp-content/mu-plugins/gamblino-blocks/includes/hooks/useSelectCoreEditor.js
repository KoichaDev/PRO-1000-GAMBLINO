import { useSelect } from "@wordpress/data";

export const useGetCurrentPost = () => {
    return useSelect((select) => {
        return select("core/editor").getCurrentPost();
    }, []);
};
