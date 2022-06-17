// Prettier-ignore
export const cardContentTemplates = [
    [
        "core/columns",
        { className: "[ wp-columns ]" },
        [
            [
                "core/column",
                {},
                [
                    [
                        "gamblino-block/image",
                        {
                            className: "ranking-card__top-image",
                            positionType: "absolute",
                            positionValue: {
                                top: -100,
                                left: "0",
                                right: "0",
                                bottom: "0",
                            },
                            imageDimension: "auto",
                            isResetMargin: true,
                        },
                    ],
                ],
            ],
            [
                "core/columns",
                { className: "[ wp-columns ]" },
                [
                    [
                        "core/column",
                        {},
                        [
                            [
                                "gamblino-block/image",
                                {
                                    className: "ranking-card__content-image",
                                    imageDimension: "auto",
                                    isResetMargin: true,
                                },
                            ],
                        ],
                    ],
                    [
                        "core/column",
                        {
                            className:
                                "[ wp-column-paragraph ] [ rounded-2xl has-white-background-color has-background ]",
                            backgroundColor: "#fff",
                        },
                        [
                            [
                                "core/paragraph",
                                {
                                    placeholder: "Enter text...",
                                },
                            ],
                        ],
                    ],
                    [
                        "core/column",
                        {},
                        [["gamblino-block/button", {
                            buttonTextAlignment: "center",
                            buttonBackgroundColor: "#DA5E5E",
                            buttonColor: "#664852",
                        }]],
                    ],
                ],
            ],
        ],
    ],
];
