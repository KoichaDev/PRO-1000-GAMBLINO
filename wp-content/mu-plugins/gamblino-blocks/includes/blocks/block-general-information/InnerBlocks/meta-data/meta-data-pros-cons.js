const metaDataProsCons = {
    titlePros: {
        type: "string",
        source: "html",
        selector: "h3",
    },
    titleProsTextColor: {
        type: 'string',
    },
    prosTextLists: {
        type: "array",
        selector: ".gamblino-feature-list ul li",
        source: "query",
        default: [{ text: "" }],
        query: {
            text: {
                type: "string",
                source: "html",
                selector: "p",
            },
        },
    },
    titleCons: {
        type: "string",
        source: "html",
        selector: "h3",
    },
    titleConsTextColor: {
        type: 'string',
    },
    consTextLists: {
        type: "array",
        selector: ".gamblino-feature-list ul li",
        source: "query",
        default: [{ text: "" }],
        query: {
            text: {
                type: "string",
                source: "html",
                selector: "p",
            },
        },
    },
  
};

export default metaDataProsCons;
