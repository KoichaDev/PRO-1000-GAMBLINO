const metaDataFeatureBodyList = {
    featureTitle: {
        type: "string",
        source: "html",
        selector: "h2",
    },

    featureListText: {
        type: "array",
        selector: ".gamblino-feature-list ul li",
        source: "query",
        default: [{ text: "lorem" }, { text: "ipsum" }],
        query: {
            text: {
                type: "string",
                source: "html",
                selector: "p",
            },
        },
    },
};

export default metaDataFeatureBodyList;
