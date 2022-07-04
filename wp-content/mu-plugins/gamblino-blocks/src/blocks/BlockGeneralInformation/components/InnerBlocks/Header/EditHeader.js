import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const EditHeader = () => {
    const BLOCKS_TEMPLATE = [
        ["core/heading", { placeholder: "Write a title..." }],
        [
            "gamblino-block/image",
            {
                imageDimension: "10%",
            },
        ],
    ];
    return (
        <div {...useBlockProps({})}>
            <InnerBlocks template={BLOCKS_TEMPLATE} />
        </div>
    );
};

export default EditHeader;
