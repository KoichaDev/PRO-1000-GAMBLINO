import { useBlockProps } from "@wordpress/block-editor";

const SaveBlockImage = ({ attributes }) => {
    const { url, id, alt } = attributes;

    const className = id ? `wp-image-${id}` : null;

    return (
        <div {...useBlockProps.save()}>
            {url && <img src={url} className={className} alt={alt} />}
        </div>
    );
};

export default SaveBlockImage;
