import { useState, useEffect } from "@wordpress/element";
import apiFetch from "@wordpress/api-fetch";
import MiniSearch from "minisearch";

export const useGetPosts = () => {
    const [isError, setIsError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [postsCollection, setPostsCollection] = useState([]);

    useEffect(() => {
        apiFetch({ path: `wp/v2/casino-reviews` }).then(
            (result) => {
                setIsLoaded(true);
                setPostsCollection((prevPost) => prevPost.concat(result));
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
            }
        );

        apiFetch({ path: `wp/v2/casino-games` }).then(
            (result) => {
                setIsLoaded(true);
                setPostsCollection((prevPost) => prevPost.concat(result));
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
            }
        );

        apiFetch({ path: `wp/v2/posts` }).then(
            (result) => {
                setIsLoaded(true);
                setPostsCollection((prevPost) => prevPost.concat(result));
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
            }
        );

        apiFetch({ path: `wp/v2/pages` }).then(
            (result) => {
                setIsLoaded(true);
                setPostsCollection((prevPost) => prevPost.concat(result));
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
            }
        );

        apiFetch({ path: `wp/v2/slots` }).then(
            (result) => {
                setIsLoaded(true);
                setPostsCollection((prevPost) => prevPost.concat(result));
            },
            (error) => {
                setIsLoaded(true);
                setIsError(error);
            }
        );
    }, []);

    return { postsCollection, isError, isLoaded };
};

export const useTextSearch = (array, { textInput, fields, storeFields, ...config }) => {
    const miniSearch = new MiniSearch({
        fields: fields, // fields to index for full-text search
        storeFields: storeFields, // fields to return with search results
    });

    // Index all documents
    miniSearch.addAll(array);

    // Search with default options
    return miniSearch.search(textInput, { ...config });
};
