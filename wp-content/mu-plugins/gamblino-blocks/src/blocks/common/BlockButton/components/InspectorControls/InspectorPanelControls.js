// Wordpress components
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";

// PanelBody Component for Inspector Controls
import BorderRadiusPanelBody from "./PanelBody/BorderRadiusPanelBody";
import ShadowPanelBody from "./PanelBody/ShadowPanelBody";
import PaddingPanelBody from "./PanelBody/PaddingPanelBody";
import NewTabPanelBody from "./PanelBody/NewTabPanelBody";
import SEOPanelBody from "./PanelBody/SEOPanelBody";
import SpacingPanelBody from './PanelBody/SpacingPanelBody'
import TypographyPanelBody from "./PanelBody/TypographyPanelBody";

const InspectorPanelControls = (props) => {
    return (
        <>
            <InspectorControls>
                <SEOPanelBody {...props} />
                <NewTabPanelBody {...props} />
                <SpacingPanelBody {...props} />
                <PaddingPanelBody {...props} />
                <BorderRadiusPanelBody {...props} />
                <ShadowPanelBody {...props} />
                <TypographyPanelBody {...props} />
            </InspectorControls>
        </>
    );
};

export default InspectorPanelControls;
