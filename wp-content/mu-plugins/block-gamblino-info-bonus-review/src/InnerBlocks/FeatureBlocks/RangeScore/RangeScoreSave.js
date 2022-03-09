import { useBlockProps } from "@wordpress/block-editor";

const RangeScoreSave = ({ attributes }) => {
    const {
        countImages,
        rangeScoreImgId,
        rangeScoreImgUrl,
        rangeScoreImgAlt,
    } = attributes;

    return (
        <>
            {rangeScoreImgUrl && (
                <figure>
                    {countImages.map((_countImage) => {
                        return <img src={rangeScoreImgUrl} alt={rangeScoreImgAlt} />;
                    })}
                </figure>
            )}
        </>
    );
};

export default RangeScoreSave;
