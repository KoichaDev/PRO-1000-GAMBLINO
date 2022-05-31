import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import Image from "./Image/Image.component";

const CardEdit = (props) => {
    const cardContentTemplates = [
        ["core/image", {}],
        ["core/heading", {
            className: "ranking-card__title",
            placeholder: "Book Title",
        }],
        ["core/paragraph", { placeholder: "Summary" }],
        ["core/button", { placeholder: "CTA text" }],

    ];
    return (
        <div {...useBlockProps()} className="[ ranking-card ]">
            <Image {...props} />

            <InnerBlocks template={cardContentTemplates} />
        </div>
    );
};

export default CardEdit;
