// Wordpress Components
import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { cardContentTemplates } from "../constants/CardTemplate";

import {
    ToolbarButton,
    PanelBody,
    TextareaControl,
    SelectControl,
    ColorPicker,
    ColorPalette,
} from "@wordpress/components";

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
                className="rounded-2xl border-solid border-amber-400 p-10"
                style={{ backgroundColor: backgroundColor, marginTop: '2em' }}
            >
                <div className="[ ranking-card ] [ bg-neutral-100 ]">
                    <InnerBlocks template={cardContentTemplates} />
                </div>
            </div>
        </div>
    );
};

export default CardEdit;
