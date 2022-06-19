import {
	useBlockProps,
	useInnerBlocksProps,
	InnerBlocks,
} from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { columns, align, backgroundColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `[ image-ads-block ] [ columns-${columns} ${align} ]`,
		style: {
			backgroundColor: backgroundColor,
		},
	});
	const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	return (
		<div {...innerBlocksProps}></div>
	);
};

export default Save;
