import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";

const NewTabPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isNewTabLinkURLToggled, isLinkToolbarButtonOpen, hrefLinkTarget } = attributes;

    return (
        <PanelBody title={__("New Tab Setting")}>
            <p
                style={{
                    color: "red",
                    fontSize: "12px",
                    lineHeight: "1rem",
                    paddingBottom: "1.5em",
                }}
            >
                {isNewTabLinkURLToggled && hrefLinkTarget.length === 0 && (
                    <>
                        {__(
                            `You forgot to add a URL. If there is no URL, then opening in a
						new tab will not work!`,
                            "block-gamblino"
                        )}{" "}
                        <a
                            href="#"
                            role="button"
                            onClick={() => setAttributes({ isLinkToolbarButtonOpen: !isLinkToolbarButtonOpen })}
                        >
                            Click here
                        </a>{" "}
                        {__(`to URL configuration`, "block-gamblino")}
                    </>
                )}
            </p>
            <ToggleControl
                label={
                    !isNewTabLinkURLToggled
                        ? "Don't open in a new tab"
                        : "Open in a new tab"
                }
                checked={isNewTabLinkURLToggled}
                onChange={() =>
                    setAttributes({ isNewTabLinkURLToggled: !isNewTabLinkURLToggled })
                }
            />
        </PanelBody>
    );
};

export default NewTabPanelBody;
