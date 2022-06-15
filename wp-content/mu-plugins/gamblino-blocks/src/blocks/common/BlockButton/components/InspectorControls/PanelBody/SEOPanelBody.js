import { __ } from "@wordpress/i18n";
import { PanelBody, ToggleControl } from "@wordpress/components";

import ToggleFollowSEO from "./SEO/ToggleFollowSEO";
import ToggleSponsoredSEO from './SEO/ToggleSponsoredSEO';

const SEOPanelBody = ({ ...props }) => {
    return (
        <PanelBody title={__("SEO Settings", 'block-gamblino')}>
            <ToggleFollowSEO {...props} />
            <ToggleSponsoredSEO {...props} />
        </PanelBody>
    );
};

export default SEOPanelBody;
