import { useBlockProps } from "@wordpress/block-editor";

const RangeScoreSave = ({ attributes }) => {
    const { rangeScore, rangeScoreImgId, rangeScoreImgUrl, rangeScoreImgAlt } = attributes;


    return (
        <div {...useBlockProps.save()}>
            {rangeScoreImgUrl && (
                <img
                    src={rangeScoreImgUrl}
                    alt={rangeScoreImgAlt}
                    className={rangeScoreImgId ? `wp-image-${rangeScoreImgId}` : null}
                />
            )}
        </div>
    );
};

export default RangeScoreSave;
