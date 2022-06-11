// Wordpress Components
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { cardContentTemplates } from "../constants/CardTemplate";

import { PanelBody, ColorPalette } from "@wordpress/components";

import "./editor.scss";

const CardEdit = ({ attributes, setAttributes }) => {
    const { backgroundColor } = attributes;
    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelBody title={__("BackgroundColor", "block-gamblino")}>
                    <ColorPalette
                        value={backgroundColor}
                        onChange={(value) => setAttributes({ backgroundColor: value })}
                    />
                </PanelBody>
            </InspectorControls>
            <div
                className="position-relative rounded-2xl border-solid border-amber-400 my-12 p-10"
                style={{ backgroundColor: backgroundColor }}
            >
                <div className="[ ranking-card ]">
                    <InnerBlocks template={cardContentTemplates} />
                </div>
            </div>
        </div>
    );
};

export default CardEdit;
