import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const EditContent = () => {
    const BLOCKS_TEMPLATE = [
        [
            "core/columns",
            {
                colums: 2,
                lock: {
                    move: true,
                    remove: true,
                },
                style: {
                    spacing: {
                        padding: {
                            top: "1.5em",
                            right: "0em",
                            bottom: "0em",
                            left: "0em",
                        },
                    },
                },
            },
            [
                [
                    "core/column",
                    {
                        align: "full",
                        width: "70%",
                    },
                    [
                        ["core/heading", { placeholder: "Title...", className: "mb-5!" }],
                        [
                            "core/paragraph",
                            {
                                placeholder: "Write something...",
                                className: "[ flex-row align-items-center ] [ gap-0! ]",
                            },
                        ],
                        [
                            "gamblino-block/button",
                            {
                                buttonTextAlignment: "center",
                                isButtonPaddingMenuOpen: true,
                                isShadowMenuOpen: true,
                                shadowOpacity: 40,
                                isBorderRadiusMenuOpen: true,
                                buttonIsClickedLinkSides: true,
                                marginShorthandHorizontal: 0,
                                marginShortHandVertical: 1,
                                marginShortHandVerticalSelectUnit: "em",
                                IsClickedLinkSidesMargin: true,
                                buttonPaddingHorizontal: 3,
                                paddingHorizontalSelectUnit: "em",
                                buttonPaddingVertical: 1,
                                paddingVerticalSelectUnit: "em",
                                buttonBorderRadius: 40,
                                buttonBackgroundColor: "#fae9a0",
                                buttonColor: "#6b4652",
                            },
                        ],
                    ],
                ],
                [
                    "core/column",
                    { align: "full", width: "30%" },
                    [
                        ["core/heading", { placeholder: "Title...", className: "mb-5!" }],
                        ["core/gallery", {}],
                    ],
                ],
            ],
        ],
    ];
    return (
        <article {...useBlockProps({})}>
            <InnerBlocks template={BLOCKS_TEMPLATE} />
        </article>
    );
};

export default EditContent;
