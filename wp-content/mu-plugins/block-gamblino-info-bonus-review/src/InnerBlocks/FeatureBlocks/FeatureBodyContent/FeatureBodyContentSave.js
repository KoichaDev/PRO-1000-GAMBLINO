import { RichText, useBlockProps } from "@wordpress/block-editor";

const FeatureBodyContentSave = ({ attributes }) => {
    const { featureTitle, featureListText } = attributes;
    return (
        <div {...useBlockProps.save()}>
            {featureTitle && <RichText.Content tagName="h2" value={featureTitle} />}
            {featureListText.length > 0 && (
                <div className="gamblino-feature-list">
                    <ul>
                        {featureListText.map((featureList, index) => {
                            return (
                                <li key={index}>
                                    <RichText.Content tagName="p" value={featureList.text} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FeatureBodyContentSave;
