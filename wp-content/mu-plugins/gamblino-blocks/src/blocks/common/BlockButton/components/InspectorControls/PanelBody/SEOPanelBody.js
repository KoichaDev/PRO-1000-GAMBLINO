import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";

import ToggleFollowSEO from "./SEO/ToggleFollowSEO";
import ToggleSponsoredSEO from "./SEO/ToggleSponsoredSEO";
import ToggleUserGeneratedContentSEO from "./SEO/ToggleUserGeneratedContentSEO";
import ToggleUsageSEO from './SEO/ToggleUsageSEO'

const SEOPanelBody = ({ ...props }) => {
    const { attributes } = props;
    const { isToggledSEO } = attributes;
    return (
        <PanelBody title={__("SEO", "block-gamblino")}>
            <ToggleUsageSEO {...props} />
            <>
                {isToggledSEO && (
                    <>
                        <ToggleFollowSEO {...props} />
                        <ToggleSponsoredSEO {...props} />
                        <ToggleUserGeneratedContentSEO {...props} />
                    </>
                )}
            </>
        </PanelBody>
    );
};

export default SEOPanelBody;
