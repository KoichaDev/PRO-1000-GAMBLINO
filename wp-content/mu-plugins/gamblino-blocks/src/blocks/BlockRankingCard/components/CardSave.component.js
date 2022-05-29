import { useBlockProps } from "@wordpress/block-editor";

const CardSave = ({ attributes }) => {
    const { url, alt, id } = attributes;

    return (
        <div className="[ ranking-card ]">
            {url && (
                <img src={url} alt={alt} className={id ? `wp-image-${id}` : null} />
            )}
        </div>
    );
};

export default CardSave;
