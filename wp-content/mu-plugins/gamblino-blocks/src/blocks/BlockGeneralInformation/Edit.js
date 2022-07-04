import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

import "./editor.scss";

const Edit = () => {
	const blockProps = useBlockProps({
		className: `[ block-general-information ]`,
	});

	const BLOCKS_TEMPLATE = [
		[
			"core/columns",
			{ align: "full" },
			[
				[
					"core/column",
					{
						align: "full",
						width: "60%",
					},
					[["gamblino-block/general-information-header", {}]],
				],
				[
					"core/column",
					{
						align: "full",
						width: "40%",
					},
					[],
				],
			],
		],
	];

	return (
		<>
			<section {...blockProps}>
				<InnerBlocks template={BLOCKS_TEMPLATE} />
			</section>
		</>
	);
};

export default Edit;
