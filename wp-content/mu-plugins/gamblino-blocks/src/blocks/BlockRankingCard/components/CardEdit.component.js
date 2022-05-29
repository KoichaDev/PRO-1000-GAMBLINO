import { useBlockProps, RichText } from "@wordpress/block-editor";

import Image from "./Image/Image.component";

const CardEdit = (props) => {
    return (
        <div {...useBlockProps()} className="[ ranking-card ]">
            <Image {...props} />
        </div>
    );
};

export default CardEdit;
