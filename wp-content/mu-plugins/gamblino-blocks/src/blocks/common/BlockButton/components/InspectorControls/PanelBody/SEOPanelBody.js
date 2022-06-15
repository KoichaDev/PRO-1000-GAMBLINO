import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";

import ToggleFollowSEO from "./SEO/ToggleFollowSEO";
import ToggleSponsoredSEO from './SEO/ToggleSponsoredSEO';
import ToggleUserGeneratedContentSEO from "./SEO/ToggleUserGeneratedContentSEO";

const SEOPanelBody = ({ ...props }) => {
    return (
        <PanelBody title={__("SEO Settings", 'block-gamblino')}>
            <ToggleFollowSEO {...props} />
            <ToggleSponsoredSEO {...props} />
            <ToggleUserGeneratedContentSEO {...props} />
        </PanelBody>
    );
};

export default SEOPanelBody;
