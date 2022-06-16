import { __ } from "@wordpress/i18n";
import { PanelBody, ColorPalette } from "@wordpress/components";

const BackgroundColorPanelBody = ({ attributes, setAttributes }) => {
    const { backgroundColor } = attributes;
    return (
        <PanelBody title={__("Styles", "block-gamblino")}>
            <ColorPalette
                value={backgroundColor}
                onChange={(value) => setAttributes({ backgroundColor: value })}
            />
        </PanelBody>
    );
};

export default BackgroundColorPanelBody;
