import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const Save = ({ attributes }) => {
	const { columns, align, backgroundColor } = attributes;
	return (
		<div
			{...useBlockProps.save()}
			className={`[ image-ads-block ] [ columns-${columns} ${align} ]`}
			style={{ backgroundColor }}
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default Save;
