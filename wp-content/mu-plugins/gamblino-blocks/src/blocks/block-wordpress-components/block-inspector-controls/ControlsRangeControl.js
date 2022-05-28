import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RangeControl } from "@wordpress/components";

const ControlsRangeControl = ({ ...rest }) => {
    return (
        <InspectorControls>
            <PanelBody>
                <RangeControl {...rest} />
            </PanelBody>
        </InspectorControls>
    );
};

export default ControlsRangeControl;
