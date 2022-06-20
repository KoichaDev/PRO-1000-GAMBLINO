import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const { backgroundColor } = attributes;

    const blockProps = useBlockProps.save({
        className: "gamblino-block-faqs",
        style: {
            backgroundColor,
        },
    });
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    return <section {...innerBlocksProps}></section>;
};

export default Save;
