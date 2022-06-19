import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";
import ImageAltText from "./Text/ImageAltText";

const TextPanelBody = ({ ...props }) => {
    return (
        <PanelBody>
            <ImageAltText {...props} />
        </PanelBody>
    );
};

export default TextPanelBody;
