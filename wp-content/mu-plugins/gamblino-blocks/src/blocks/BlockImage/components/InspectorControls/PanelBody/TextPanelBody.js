import { __ } from "@wordpress/i18n";

import { PanelBody } from "@wordpress/components";
import ImageAltText from "./ImageSettings/AltTextImageSetting";

const TextPanelBody = ({ ...props }) => {
    return (
        <PanelBody>
            <ImageAltText {...props} />
        </PanelBody>
    );
};

export default TextPanelBody;
