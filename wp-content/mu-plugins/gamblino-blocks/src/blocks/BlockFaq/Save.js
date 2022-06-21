import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
    const { backgroundColor } = attributes;

    const blockProps = useBlockProps.save({
        className: "[ gamblino-block-faqs ] [ my-12 p-12 ]",
        style: {
            backgroundColor,
        },
    });
    const innerBlocksProps = useInnerBlocksProps.save(blockProps);
    return <section {...innerBlocksProps}></section>;
};

export default Save;
