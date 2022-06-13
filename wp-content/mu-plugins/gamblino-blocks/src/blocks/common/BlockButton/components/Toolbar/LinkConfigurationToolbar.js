import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { ToggleControl, Spinner } from "@wordpress/components";

import { useGetPosts, useTextSearch } from "../hooks/useQueryPosts";

import EnterIcon from "../../icons/EnterIcon";
import GlobalIcon from "../../icons/GlobalIcon";

import "./LinkConfigurationToolbar.scss";

const LinkConfiguration = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { linkURL, isNewTabLinkURLToggled, isRelToggled } = attributes;

    const { postsCollection, isError, isLoaded } = useGetPosts();

    const [enteredURLText, setEnteredURLText] = useState(linkURL);
    const [postsTextSearch, setPostsTextSearch] = useState([]);

    console.log(postsCollection);

    useEffect(() => {
        const posts = postsCollection.map((post) => {
            return {
                id: post.id,
                title: post.title.rendered,
                url: post.link,
            };
        });

        const textSearch = useTextSearch(posts, {
            textInput: enteredURLText,
            fields: ["title"],
            storeFields: ["title", "url"],
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
        console.log(title, link);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredURLText.length === 0) {
            return setAttributes({ isLinkToolbarButtonOpen: true });
        }

        setAttributes({ linkURL: enteredURL });
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

                <button className="form-link__submit" type="submit">
                    <EnterIcon color={enteredURLText.length === 0 ? "#BCBCBC" : "#000"} />
                </button>
            </form>

            {enteredURLText.length !== 0 ? (
                <>
                    <button
                        type="button"
                        className="url-container"
                        onClick={onClickEnteredURLButtonHandler}
                    >
                        <GlobalIcon />
                        <div className="url-container__description">
                            <p>
                                <strong>{enteredURLText}</strong>
                            </p>
                            <p
                                style={{
                                    color: "#757575",
                                    fontSize: "11.7px",
                                    lineHeight: 1.3,
                                }}
                            >
                                Press <span style={{ color: "#007cba" }}>ENTER</span> or{" "}
                                <span style={{ color: "#007cba" }}>CLICK HERE</span> to add this
                                link
                            </p>
                        </div>
                    </button>

                    {!isLoaded ? <Spinner /> : postsTextSearch.map((post) => {
                        const { id, title, url: link } = post;
                        return (
                            <button
                                key={id}
                                className="url-container"
                                onClick={onClickPostTextSearchHandler.bind(null, {
                                    title,
                                    link,
                                })}
                            >
                                <strong>{title}</strong>
                            </button>
                        );
                    })}
                </>
            ) : (
                <>
                    {!isLoaded ? (
                        <Spinner />
                    ) : (
                        postsCollection?.map((post) => {
                            const { id, title, link } = post;
                            return (
                                <button
                                    key={id}
                                    className="url-container"
                                    onClick={onClickPostCollectionHandler.bind(null, {
                                        title,
                                        link,
                                    })}
                                >
                                    <strong>{title.rendered}</strong>
                                </button>
                            );
                        })
                    )}
                </>
            )}

            {/* TODO: Check later why target property is not working  correctly */}
            {/* <div className="toggle-container">
                <ToggleControl
                    label={__("Open in new tab", "block-gamblino")}
                    checked={isNewTabLinkURLToggled}
                    onChange={() => {
                        setAttributes({ isNewTabLinkURLToggled: !isNewTabLinkURLToggled });
                    }}
                />
            </div> */}

            <div className="toggle-container">
                <ToggleControl
                    label={
                        !isRelToggled
                            ? __("Not following", "block-gamblino")
                            : __("Following", "block-gamblino")
                    }
                    checked={isRelToggled}
                    onChange={() => setAttributes({ isRelToggled: !isRelToggled })}
                />
            </div>
        </div>
    );
};

export default LinkConfiguration;
