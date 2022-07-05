export const BLOCKS_TEMPLATE = [
    [
        "core/columns",
        {
            columns: 2,
            lock: {
                move: true,
                remove: true,
            },
            align: "full",
            className: '[ m-auto gap-24! ]',
            style: {
                spacing: {
                    padding: {
                        top: "2em",
                        right: "2em",
                        bottom: "2em",
                        left: "2em",
                    },
                },
            },
        },
        [
            [
                "core/column",
                {
                    align: "full",
                    width: "60%",
                    lock: {
                        move: true,
                        remove: true,
                    },
                },
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
            [
                "core/column",
                {
                    align: "full",
                    width: "40%",
                    lock: {
                        move: true,
                        remove: true,
                    },
                    className:
                        "[ right-column ][ flex-column justify-content-center align-items-center my-10 rounded-2xl border-solid border-sky-400 ] ",
                },
                [["gamblino-block/general-information-right-column-card", {}]],
            ],
        ],
    ],
];
