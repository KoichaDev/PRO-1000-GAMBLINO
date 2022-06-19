import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import ImageAltTextPanelBody from "./PanelBody/Text/ImageAltText";
import DisplayPositionPanelBody from "./PanelBody/DisplayPositionPanelBody";
import SpacingPanelBody from "./PanelBody/SpacingPanelBody";
import ImageSize from "./PanelBody/ImageSizePanelBody";
import SEOPanelBody from "./PanelBody/SEOPanelBody";

const PanelInspectorControls = ({ ...props }) => {
    return (
        <InspectorControls>
            <SEOPanelBody {...props} />
            <ImageAltTextPanelBody {...props} />
            <ImageSize {...props} />
            <SpacingPanelBody {...props} />
            <DisplayPositionPanelBody {...props} />
        </InspectorControls>
    );
};

export default PanelInspectorControls;
