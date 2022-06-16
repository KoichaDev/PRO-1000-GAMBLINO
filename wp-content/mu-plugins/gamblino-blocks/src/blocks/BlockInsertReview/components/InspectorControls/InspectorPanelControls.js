import BackgroundColorPanelBody from "./PanelBody/BackgroundColorPanelBody";
import { InspectorControls } from "@wordpress/block-editor";

const InspectorPanelControls = ({ ...props }) => {
    return (
        <InspectorControls>
            <BackgroundColorPanelBody {...props} />
        </InspectorControls>
    );
};

export default InspectorPanelControls;
