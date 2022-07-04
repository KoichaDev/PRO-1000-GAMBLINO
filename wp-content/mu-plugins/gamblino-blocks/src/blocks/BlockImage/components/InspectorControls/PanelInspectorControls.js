import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";
import PanelBodySetting from "./PanelBody/ImageSettings/PanelBodySetting";
import DisplayPositionPanelBody from "./PanelBody/DisplayPositionPanelBody";
import SpacingPanelBody from "./PanelBody/SpacingPanelBody";
import ImageSize from "./PanelBody/ImageSizePanelBody";
import SEOPanelBody from "./PanelBody/SEOPanelBody";
import NewTabPanelBody from "./NewTabPanelBody";

const PanelInspectorControls = ({ ...props }) => {
    return (
        <InspectorControls>
            <SEOPanelBody {...props} />
            <NewTabPanelBody {...props} />
            <PanelBodySetting {...props} />
            <ImageSize {...props} />
            <SpacingPanelBody {...props} />
            <DisplayPositionPanelBody {...props} />
        </InspectorControls>
    );
};

export default PanelInspectorControls;
