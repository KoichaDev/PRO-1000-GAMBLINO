import { useSelect } from "@wordpress/data";
import { useGetCurrentPost } from "./useSelectCoreEditor";

export const useGetCurrentPostAuthorName = () => {
    const { author: authorId } = useGetCurrentPost();

    return useSelect((select) => {
        const authors = select("core").getAuthors({ who: "authors" });

        return authors.find((author) => {
            if (author.id === authorId) return author;
        });
    });
};
