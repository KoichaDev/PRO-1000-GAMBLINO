import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const EditCard = () => {
    const BLOCKS_TEMPLATE = [
        ["core/heading", { placeholder: "Title..." }],
        ["core/paragraph", { placeholder: "Write something..." }],

        ["core/separator", {}],
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
                buttonBackgroundColor: "#6FCF97",
                buttonColor: "#664852",
            },
        ],
    ];
    return (
        <article {...useBlockProps({})}>
            <InnerBlocks template={BLOCKS_TEMPLATE} />
        </article>
    );
};

export default EditCard;
