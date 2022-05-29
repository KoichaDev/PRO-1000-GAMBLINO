import { useBlockProps } from "@wordpress/block-editor";

const CardEdit = () => {
    return (
        <div
            {...useBlockProps({
                className: "[ ranking-card ]",
            })}
        >
            CardEdit.component
        </div>
    );
};

export default CardEdit;
