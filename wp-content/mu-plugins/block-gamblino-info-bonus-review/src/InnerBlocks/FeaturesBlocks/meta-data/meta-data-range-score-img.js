const metaDataRangeScoreImg = {
    reviewScore: {
        type: "number",
        default: 2,
    },
    reviewImgid: {
        type: "number",
    },
    reviewImgUrl: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
    },
    reviewImgalt: {
        type: "string",
        source: "attribute", // Will be stored in the alt attribute of img-tag element
        selector: "img",
        attribute: "alt",
        default: "",
    },
}