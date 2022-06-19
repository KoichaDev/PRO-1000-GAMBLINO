import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const ToggleSponsoredSEO = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isSponsoredToggled } = attributes;
    return (
        <>
            <ToggleControl
                label={!isSponsoredToggled ? __("Not sponsored", 'block-gamblino') : __("Sponsored", 'block-gamblino')}
                checked={isSponsoredToggled}
                onChange={() => setAttributes({ isSponsoredToggled: !isSponsoredToggled })}
            />
        </>
    );
}

export default ToggleSponsoredSEO