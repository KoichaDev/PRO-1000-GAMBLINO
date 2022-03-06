import { useBlockProps } from "@wordpress/block-editor";

const RangeScoreSave = ({ attributes }) => {
    const { rangeScoreImgId, rangeScoreImgUrl, rangeScoreImgAlt } = attributes;

    return (
        <div {...useBlockProps.save()}>
            <img
                src={rangeScoreImgUrl}
                alt={rangeScoreImgAlt}
                className={rangeScoreImgId ? `wp-image-${rangeScoreImgId}` : null}
            />
        </div>
    );
};

export default RangeScoreSave;
