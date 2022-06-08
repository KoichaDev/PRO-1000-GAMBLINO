import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

const CardSave = ({ attributes }) => {
    const { url, alt, id } = attributes;

    return (
        <div {...useBlockProps.save()} className="[ ranking-card ]">
            {url && (
                <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
            )}
            <InnerBlocks.Content />
        </div>
    );
};

export default CardSave;
