import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const EditImageBlock = () => {
    return (
        <div {...useBlockProps()}>
            <InnerBlocks template={[["gamblino-block/image"]]} />
        </div>
    );
};

export default EditImageBlock;
