import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { cardContentTemplates } from "../constants/CardTemplate";

import "./editor.scss";

const CardEdit = () => {
    return (
        <div {...useBlockProps()}>
            <div className="rounded-2xl border-solid border-amber-400 p-10 bg-neutral-200">
                <div className="[ ranking-card ] [ bg-neutral-100 ]">
                    <InnerBlocks template={cardContentTemplates} />
                </div>
            </div>
        </div>
    );
};

export default CardEdit;
