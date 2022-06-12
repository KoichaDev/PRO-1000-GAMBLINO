import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { ToggleControl } from "@wordpress/components";

import EnterIcon from "../icon/EnterIcon";
import GlobalIcon from "../icon/GlobalIcon";

import "./LinkConfiguration.scss";

const LinkConfiguration = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { linkURL, isNewTabLinkURLToggled, isRelToggled } = attributes;

    const [enteredURL, setEnteredURL] = useState(linkURL);

    const onClickEnteredURLButtonHandler = () => {
        setAttributes({ linkURL: enteredURL });
        setAttributes({ isLinkToolbarButtonOpen: false });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (enteredURL.length === 0) {
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
                    value={enteredURL}
                    onChange={(e) => setEnteredURL(e.target.value)}
                    placeholder={__("Search or type url", "block-gamblino")}
                />

                <button className="form-link__submit" type="submit">
                    <EnterIcon color={enteredURL.length === 0 ? "#BCBCBC" : "#000"} />
                </button>
            </form>

            {enteredURL.length !== 0 && (
                <button
                    type="button"
                    className="url-container"
                    onClick={onClickEnteredURLButtonHandler}
                >
                    <GlobalIcon />
                    <div className="url-container__description">
                        <p>
                            <strong>{enteredURL}</strong>
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

export default (LinkConfiguration);
