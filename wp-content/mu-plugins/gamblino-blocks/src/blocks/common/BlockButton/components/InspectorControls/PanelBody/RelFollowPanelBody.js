import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";

const RelFollowPanelBody = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isRelToggled } = attributes;

    return (
        <PanelBody title={__("Rel-link attribute")}>
            <ToggleControl
                label={!isRelToggled ? "Not following" : "Following"}
                checked={isRelToggled}
                onChange={() => setAttributes({ isRelToggled: !isRelToggled })}
            />
        </PanelBody>
    );
};

export default RelFollowPanelBody;
