import { __ } from "@wordpress/i18n";
import { PanelBody } from "@wordpress/components";

import MarginSpacing from './Spacing/MarginSpacing';

const SpacingPanelBody = ({ ...props }) => {
    return (
        <PanelBody title={__("Spacing", "block-gamblino")}>
            <MarginSpacing {...props} />
        </PanelBody>
    );
};

export default SpacingPanelBody;
