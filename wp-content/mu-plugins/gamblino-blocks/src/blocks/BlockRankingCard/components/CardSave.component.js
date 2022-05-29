import { useBlockProps } from "@wordpress/block-editor";

const CardSave = () => {
    return <div {...useBlockProps.save()}>CardSave.component</div>;
};

export default CardSave;
