import { useBlockProps, RichText } from "@wordpress/block-editor";

const FeatureBlockSave = ({ attributes }) => {
    const { headerTitle, url: imageUrl, alt: imageAlt, id: imageId } = attributes;

    return (
        <div {...useBlockProps.save()}>
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className={imageId ? `wp-image-${imageId}` : null}
                />
            )}

            {headerTitle && <RichText.Content tagName="h2" value={headerTitle} />}
        </div>
    );
};

export default FeatureBlockSave;
