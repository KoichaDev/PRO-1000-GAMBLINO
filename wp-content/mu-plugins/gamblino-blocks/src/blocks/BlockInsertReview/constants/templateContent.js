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
                    spacing: {
                        padding: {
                            top: "0.3rem",
                            right: "1rem",
                            bottom: "0.3rem",
                            left: "1rem",
                        },
                    },
                },
                [
                    [
                        "core/heading",
                        {
                            className: "py-5",
                        },
                    ],
                    [
                        "core/paragraph",
                        {
                            className: "py-5",
                        },
                    ],
                    ["gamblino-block/insert-review-lists", {}],
                    ["gamblino-block/button"],
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
                },
                [
                    [
                        "core/heading",
                        {
                            className: "py-5",
                        },
                    ],
                    [
                        "core/paragraph",
                        {
                            className: "py-5",
                        },
                    ],
                    ["gamblino-block/insert-review-lists", {}],
                    ["gamblino-block/button"],
                ],
            ],
        ],
    ],
];
