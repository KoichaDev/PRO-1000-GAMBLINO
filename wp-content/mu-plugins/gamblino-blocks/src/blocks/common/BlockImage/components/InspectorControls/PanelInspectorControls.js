import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import ImageAltTextPanelBody from "./PanelBody/Text/ImageAltText";
import DisplayPositionPanelBody from "./PanelBody/DisplayPositionPanelBody";
import SpacingPanelBody from "./PanelBody/SpacingPanelBody";
import ImageSize from "./PanelBody/ImageSizePanelBody";

const PanelInspectorControls = ({ ...props }) => {
    return (
        <InspectorControls>
            <ImageAltTextPanelBody {...props} />
            <ImageSize {...props} />
            <SpacingPanelBody {...props} />
            <DisplayPositionPanelBody {...props} />
        </InspectorControls>
    );
};

export default PanelInspectorControls;
