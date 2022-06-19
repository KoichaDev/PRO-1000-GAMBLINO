import { __ } from "@wordpress/i18n";
import { ToggleControl } from "@wordpress/components";

const ToggleFollowSEO = ({ ...props }) => {
    const { attributes, setAttributes } = props;
    const { isToggledSEO } = attributes;
    return (
        <>
            <ToggleControl
                label={!isToggledSEO ? __('Deactivate SEO Settings', 'block-gamblino') : __("Activated SEO Settings", 'block-gamblino')}
                checked={isToggledSEO}
                onChange={() => setAttributes({ isToggledSEO: !isToggledSEO })}
            />
        </>
    );
};

export default ToggleFollowSEO;
