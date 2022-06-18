import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const SaveImageBlock = () => {
    return (
        <div {...useBlockProps.save()}>
            <InnerBlocks.Content />
        </div>
    );
};

export default SaveImageBlock;
