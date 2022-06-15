import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";

const NewTabPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isNewTabLinkURLToggled } = attributes;

    return (
        <PanelBody title={__("New Tab Setting")}>
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
