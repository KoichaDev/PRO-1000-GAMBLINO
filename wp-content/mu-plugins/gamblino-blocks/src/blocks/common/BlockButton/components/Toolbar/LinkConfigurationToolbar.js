import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { ToggleControl, Spinner } from "@wordpress/components";

import { useGetPosts, useTextSearch } from "../hooks/useQueryPosts";

import GlobalIcon from "../../icons/GlobalIcon";

import "./LinkConfigurationToolbar.scss";

const LinkConfiguration = ({ onAddEnteredURLText, ...props }) => {
    const { attributes, setAttributes } = props;
    const { linkURL, isNewTabLinkURLToggled, isFollowToggled } = attributes;

    const { postsCollection, isError, isLoaded } = useGetPosts();

    const [enteredURLText, setEnteredURLText] = useState(linkURL);
    const [postsTextSearch, setPostsTextSearch] = useState([]);

    onAddEnteredURLText(enteredURLText);

    useEffect(() => {
        const posts = postsCollection.map((post) => {
            return {
                id: post.id,
                title: post.title.rendered,
                url: post.link,
                type: post.type,
                status: post.status,
            };
        });

        const textSearch = useTextSearch(posts, {
            textInput: enteredURLText,
            fields: ["title"],
            storeFields: ["title", "url", "type", "status"],
            prefix: true,
        });

        setPostsTextSearch(textSearch);
    }, [enteredURLText]);

    const onClickEnteredURLButtonHandler = () => {
        setAttributes({ linkURL: enteredURLText });
        setAttributes({ isLinkToolbarButtonOpen: false });
    };

    const onClickPostCollectionHandler = ({ title, link }) => {
        setAttributes({ linkURL: link });
        setAttributes({ isLinkToolbarButtonOpen: false });
    };

    const onClickPostTextSearchHandler = ({ title, link }) => {
        setAttributes({ linkURL: link });
        setAttributes({ isLinkToolbarButtonOpen: false });

    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setAttributes({ linkURL: enteredURLText });
        setAttributes({ isLinkToolbarButtonOpen: false });
    };

    return (
        <div className="[ link-configuration-container ]">
            <form className="[ form-link ]" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    className="form-link__input"
                    value={enteredURLText}
                    onChange={(e) => setEnteredURLText(e.target.value)}
                    placeholder={__("Search or type url", "block-gamblino")}
                />
            </form>

            {enteredURLText.length !== 0 ? (
                <>
                    <button
                        type="button"
                        className="url-text-button"
                        onClick={onClickEnteredURLButtonHandler}
                    >
                        <div className="[ url-content-container ]">
                            <div className="url-container__description">
                                <div className="url-container__description-col-1">
                                    <GlobalIcon />
                                </div>
                                <div className="url-container__description-col-2">
                                    <span className="fw-black">{enteredURLText}</span>

                                    <div
                                        style={{
                                            color: "#757575",
                                            fontSize: "11.7px",
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        Press <span style={{ color: "#007cba" }}>ENTER</span> or{" "}
                                        <span style={{ color: "#007cba" }}>CLICK HERE</span> to add
                                        this link
                                    </div>
                                </div>

                                <div className="url-container__description-col-3">
                                    <span>url</span>
                                </div>
                            </div>
                        </div>
                    </button>

                    {!isLoaded ? (
                        <Spinner />
                    ) : (
                        postsTextSearch.map((post) => {
                            const { id, title, url: link, type } = post;

                            /* Removing the http:// or https:// from the link. */
                            const url = link.replace(/^https?:\/\//, "");

                            return (
                                <article
                                    key={id}
                                    className="[ post-container ] [ text-align-left ]"
                                    onClick={onClickPostTextSearchHandler.bind(null, {
                                        title,
                                        link,
                                    })}
                                >
                                    <div className="[ post-container__content ] [ m-6 p-2 ]">
                                        <div className="[ post-container__description ]">
                                            <div className="[ post-container__title ][ m-0 ]">
                                                <strong>{title}</strong>
                                            </div>
                                            <p className="[ post-container__url ] [ m-0 ]">{url}</p>
                                        </div>

                                        <div className="[ post-container__post-type ] [ text-align-right ]">
                                            <p className="m-0">{type}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    )}
                </>
            ) : (
                <>
                    {!isLoaded ? (
                        <Spinner />
                    ) : (
                        <div style={{ height: "25vh", overflowY: "scroll" }}>
                            {postsCollection?.map((post) => {
                                const { id, title, link, type } = post;

                                /* Removing the http:// or https:// from the link. */
                                const url = link.replace(/^https?:\/\//, "");

                                return (
                                    <article
                                        key={id}
                                        className="[ post-container ] [ text-align-left ]"
                                        onClick={onClickPostCollectionHandler.bind(null, {
                                            title,
                                            link,
                                        })}
                                    >
                                        <div className="[ post-container__content ] [ m-6 p-2 ]">
                                            <div className="[ post-container__description ]">
                                                <div className="[ post-container__title ][ m-0 ]">
                                                    <strong>{title.rendered}</strong>
                                                </div>
                                                <p className="[ post-container__url ] [ m-0 ]">{url}</p>
                                            </div>

                                            <div className="[ post-container__post-type ] [ text-align-right ]">
                                                <p className="m-0">{type}</p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    )}
                </>
            )}

            {/* TODO: Check later why target property is not working  correctly */}
            <div className="toggle-container">
                <ToggleControl
                    label={__("Open in new tab", "block-gamblino")}
                    checked={isNewTabLinkURLToggled}
                    onChange={() => {
                        setAttributes({ isNewTabLinkURLToggled: !isNewTabLinkURLToggled });
                    }}
                />
            </div>

            <div className="toggle-container">
                <ToggleControl
                    label={
                        !isFollowToggled
                            ? __("Not following", "block-gamblino")
                            : __("Following", "block-gamblino")
                    }
                    checked={isFollowToggled}
                    onChange={() => setAttributes({ isFollowToggled: !isFollowToggled })}
                />
            </div>
        </div>
    );
};

export default LinkConfiguration;
