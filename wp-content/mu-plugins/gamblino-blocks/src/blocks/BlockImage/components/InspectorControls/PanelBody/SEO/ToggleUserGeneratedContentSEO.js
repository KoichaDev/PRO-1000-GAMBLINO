import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const ToggleSponsoredSEO = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isUGCToggled } = attributes;
    return (
        <>
            <ToggleControl
                label={!isUGCToggled ? __("No UGC", 'block-gamblino') : __("UGC", 'block-gamblino')}
                checked={isUGCToggled}
                onChange={() => setAttributes({ isUGCToggled: !isUGCToggled })}
            />
        </>
    );
}

export default ToggleSponsoredSEO