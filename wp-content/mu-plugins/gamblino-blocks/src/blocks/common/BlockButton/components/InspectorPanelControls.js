// Wordpress components
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";

// PanelBody Component for Inspector Controls
import BorderRadiusPanelBody from "./PanelBody/BorderRadiusPanelBody";
import ShadowPanelBody from "./PanelBody/ShadowPanelBody";
import PaddingPanelBody from "./PanelBody/PaddingPanelBody";

const InspectorPanelControls = (props) => {
    return (
        <>
            <InspectorControls>
                <PaddingPanelBody {...props} />
                <BorderRadiusPanelBody {...props} />
                <ShadowPanelBody {...props} />
            </InspectorControls>
        </>
    );
};

export default InspectorPanelControls;
