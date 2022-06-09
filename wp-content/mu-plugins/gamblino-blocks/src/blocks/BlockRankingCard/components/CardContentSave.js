import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const CardSave = ({ attributes }) => {
    const { url, alt, id } = attributes;

    return (
        <div
            {...useBlockProps.save()}
            className="[ rounded-2xl border-solid border-amber-400 ]"
        >
            <div className="p-10 bg-neutral-200">
                <div className="[ ranking-card ] [ bg-neutral-100 ]">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
};

export default CardSave;
