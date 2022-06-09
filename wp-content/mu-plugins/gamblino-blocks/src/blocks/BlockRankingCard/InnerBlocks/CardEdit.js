import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";


import "./CardEdit.scss";

const CardEdit = (props) => {
    const cardContentTemplates = [
        [
            "core/heading",
            {
                className: "ranking-card__title",
                placeholder: "Title...",
            },
        ],
        ["core/paragraph", { placeholder: "text..." }],
        ["gamblino-block/button", { placeholder: "text...", className: '[ hello-world ]' }],

    ];
    return (
        <div
            {...useBlockProps({
                className: "rounded-2xl border-solid border-amber-400",
            })}
        >
            <div className="p-10 bg-neutral-200">
                {/* <InnerBlocks template={imagetemplate} /> */}
                <div className="[ ranking-card ] [ bg-neutral-100 ]">
                    <InnerBlocks template={cardContentTemplates} />
                </div>
            </div>
        </div>
    );
};

export default CardEdit;
