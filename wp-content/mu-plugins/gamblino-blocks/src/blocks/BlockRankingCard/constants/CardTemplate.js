// Prettier-ignore
export const cardContentTemplates = [
    ["core/columns", { className: '[ wp-columns ]' }, [
        ["core/column", {}, [
            ["gamblino-block/image", { className: 'ranking-card__top-image' }],
        ]],
        ["core/columns", { className: '[ wp-columns ]' }, [
            ["core/column", {}, [
                ["core/image", { className: 'ranking-card__content-image' }],
            ]],
            ["core/column", {
                className: "bg-color-neutral-200",
            }, [
                    [
                        "core/paragraph",
                        {
                            placeholder: "Title...",
                        },
                    ],
                ]],
            ["core/column", {}, [
                ["gamblino-block/button", { className: "[ hello-world ]" },],
            ]],
        ]],

    ]],
];