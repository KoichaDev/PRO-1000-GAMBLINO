// Prettier-ignore
export const templateContent = [
    [
        "core/columns",
        {
            columns: 2,
            align: "wide",
            lock: {
                move: true,
                remove: true,
            },
            className: "[ gap-24! ]",
            spacing: {
                units: ["px", "em", "rem"],
            },
        },
        [
            [
                "core/column",
                {
                    align: "wide",
                    lock: {
                        move: false,
                        remove: true,
                    },
                    style: {
                        spacing: {
                            padding: { top: "5em", bottom: "5em" },
                        },
                    },
                },
                [
                    [
                        "core/heading",
                        {
                            className: "py-5",
                            lock: {
                                move: true,
                                remove: true,
                            },
                        },
                    ],
                    [
                        "core/paragraph",
                        {
                            className: "py-5",
                            lock: {
                                move: true,
                                remove: true,
                            },
                        },
                    ],
                    ["gamblino-block/insert-review-lists", {}],
                    ["gamblino-block/button", {
                        buttonTextAlignment: "center",
                        buttonIsClickedLinkSides: true,
                        isButtonPaddingMenuOpen: true,
                        isBorderRadiusMenuOpen: true,
                        isShadowMenuOpen: true,
                        shadowOpacity: 40,
                        buttonBorderRadius: 40,
                        buttonPaddingHorizontal: 5,
                        paddingHorizontalSelectUnit: "em",
                        buttonPaddingVertical: 1,
                        paddingVerticalSelectUnit: "em",
                        buttonBackgroundColor: '#FAE9A0',
                        buttonColor: '#664852',
                    },
                    ],
                ],
            ],
            [
                "core/column",
                {
                    align: "wide",
                    lock: {
                        move: false,
                        remove: true,
                    },
                    style: {
                        spacing: {
                            padding: { top: "5em", bottom: "5em" },
                        },
                    },
                },
                [
                    [
                        "core/heading",
                        {
                            className: "py-5",
                            lock: {
                                move: true,
                                remove: true,
                            },
                        },
                    ],
                    [
                        "core/paragraph",
                        {
                            className: "py-5",
                            lock: {
                                move: true,
                                remove: true,
                            },
                        },
                    ],
                    ["gamblino-block/insert-review-lists", {}],
                    ["gamblino-block/button", {
                        buttonTextAlignment: "center",
                        buttonIsClickedLinkSides: true,
                        isButtonPaddingMenuOpen: true,
                        isBorderRadiusMenuOpen: true,
                        isShadowMenuOpen: true,
                        shadowOpacity: 40,
                        buttonBorderRadius: 40,
                        buttonPaddingHorizontal: 5,
                        paddingHorizontalSelectUnit: "em",
                        buttonPaddingVertical: 1,
                        paddingVerticalSelectUnit: "em",
                        buttonBackgroundColor: '#6FCF97',
                        buttonColor: '#664852',
                    },
                    ],
                ],
            ],
        ],
    ],
];
