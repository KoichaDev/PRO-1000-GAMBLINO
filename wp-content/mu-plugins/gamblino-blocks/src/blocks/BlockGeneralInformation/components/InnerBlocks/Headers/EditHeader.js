import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const EditHeader = () => {
    const BLOCKS_TEMPLATE = [
        [
            "core/columns",
            {
                colums: 1,
                lock: {
                    move: true,
                    remove: true,
                },
                // style: {
                //     spacing: {
                //         padding: {
                //             top: "1.5em",
                //             right: "0em",
                //             bottom: "0em",
                //             left: "0em",
                //         },
                //     },
                // },
            },
            [
                [
                    "core/column",
                    { align: "full", width: "30%" },
                    [
                        [
                            ["core/heading", { placeholder: "Write a title..." }],
                            [
                                "gamblino-block/image",
                                {
                                    imageDimension: "10%",
                                },
                            ],
                            ["gamblino-block/general-information-left-column-content", {}],
                        ],
                    ],
                ],
            ],
        ],
    ];
    return (
        <section {...useBlockProps({})}>
            <InnerBlocks template={BLOCKS_TEMPLATE} />
        </section>
    );
};

export default EditHeader;
