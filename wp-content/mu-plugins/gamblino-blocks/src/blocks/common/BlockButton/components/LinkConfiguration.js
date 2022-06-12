import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { ToggleControl } from "@wordpress/components";

import ElementWithFocusOutside from '@/hoc/ElementWithFocusOutside';

import EnterIcon from "../icon/EnterIcon";
import GlobalIcon from "../icon/GlobalIcon";

import "./LinkConfiguration.scss";

const LinkConfiguration = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const {
        linkURL,
        isNewTabLinkURL,
        isEnteredNewLinkURL,
        isRelToggled,
    } = attributes;

    const [enteredURL, setEnteredURL] = useState(linkURL);

    // Checking if the linkURL is empty, if it is, it sets the isEnteredNewLinkURL to false right away of the input element
    useEffect(() => {
        if (isEnteredNewLinkURL.length === 0) {
            return setAttributes({ isEnteredNewLinkURL: false });
        }

        return setAttributes({ isEnteredNewLinkURL: true });
    }, [isEnteredNewLinkURL]);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        setAttributes({ linkURL: enteredURL });
    };

    return (
        <div className="[ link-configuration-container ]">
            <form className="[ form-link ]" onSubmit={onSubmitHandler}>
                <input
                    type="text"
                    className="form-link__input"
                    value={enteredURL}
                    onChange={(e) => setEnteredURL(e.target.value)}
                    placeholder={__("Search or type url", "block-gamblino")}
                />

                <button className="form-link__submit" type="submit">
                    <EnterIcon />
                </button>
            </form>

            {enteredURL.length !== 0 && (
                <div className="url-container">
                    <GlobalIcon />
                    <div className="url-container__description">
                        <p>
                            <strong>{enteredURL}</strong>
                        </p>
                        <p
                            style={{
                                color: "#757575",
                                fontSize: ".9rem",
                                lineHeight: 1.3,
                            }}
                        >
                            Press ENTER to add this link
                        </p>
                    </div>
                </div>
            )}

            <ToggleControl
                label={__("Open in new tab", "block-gamblino")}
                checked={isNewTabLinkURL}
                onChange={() => setAttributes({ isNewTabLinkURL: !isNewTabLinkURL })}
            />

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
    );
};

export default ElementWithFocusOutside(LinkConfiguration);
