import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const CardSave = ({ attributes }) => {
    const { backgroundColor } = attributes;
    return (
        <div
            {...useBlockProps.save()}
            className="position-relative rounded-2xl border-solid border-amber-400 p-10"
            style={{ backgroundColor: backgroundColor, marginTop: "2em" }}
        >
            <div className="p-10">
                <div className="[ ranking-card ] [ bg-neutral-100 ]">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default CardSave;
