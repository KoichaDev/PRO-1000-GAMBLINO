import { __ } from "@wordpress/i18n";

import { InspectorControls } from "@wordpress/block-editor";

import ButtonImageSizePanelBody from "./PanelBody/ButtonImageSizePanelBody";
import PositionPanelBody from "./PanelBody/PositionPanelBody";
import MarginPanelBody from "./PanelBody/MarginPanelBody";
import ImageSizePanelBody from "./PanelBody/ImageSizePanelBody";

const PanelInspectorControls = ({ ...props }) => {
    return (
        <InspectorControls>
            <ImageSizePanelBody {...props} />
            <ButtonImageSizePanelBody {...props} />
            <MarginPanelBody {...props} />
            <PositionPanelBody {...props} />
        </InspectorControls>
    );
};

export default PanelInspectorControls;
