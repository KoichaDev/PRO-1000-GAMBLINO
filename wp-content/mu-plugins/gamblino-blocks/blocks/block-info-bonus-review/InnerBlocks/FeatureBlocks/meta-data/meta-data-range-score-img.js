const metaDataRangeScoreImg = {
    rangeScore: {
        type: "number",
        default: 2,
    },
    countImages: {
        type: "array",
        source: "query",
        default: [{ id: 1 }, { id: 2 }],
    },
    rangeScoreImgId: {
        type: "number",
    },
    rangeScoreImgUrl: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
    },
    rangeScoreImgAlt: {
        type: "string",
        source: "attribute", // Will be stored in the alt attribute of img-tag element
        selector: "img",
        attribute: "alt",
        default: "",
    },
};
export default metaDataRangeScoreImg;
