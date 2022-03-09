import { useState, useEffect } from "@wordpress/element";

import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { isBlobURL } from "@wordpress/blob";

import { withNotices } from "@wordpress/components";

// Feature Blocks components
import HeaderImage from "./HeaderImage";

// Style
import "./Header.scss";

const Header = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        headerTitle,
        id,
        url,
        rangeScoreImgId,
        rangeScoreImgUrl,
    } = attributes;
    const [blobURL, setBlobURL] = useState(undefined);

    const setHeaderTitleHandler = (titleValue) => {
        setAttributes({ headerTitle: titleValue });
    };

    useEffect(() => {
        // checking if there is no image ID
        if (!id && isBlobURL(url)) {
            setAttributes({ url: undefined, alt: "" });
        }
    }, []);

    useEffect(() => {
        // checking if there is no image ID
        if (!rangeScoreImgId && isBlobURL(rangeScoreImgUrl)) {
            setAttributes({ rangeScoreImgUrl: undefined, rangeScoreImgAlt: "" });
        }
    }, []);

    return (
        <>
            <header className="header">
                <HeaderImage blobURL={blobURL} setBlobURL={setBlobURL} {...props} />

                <RichText
                    tagName={"h2"}
                    value={headerTitle}
                    onChange={setHeaderTitleHandler}
                    placeholder={__("Add a title...", "block-gamblino")}
                />
            </header>
        </>
    );
};

export default withNotices(Header);
