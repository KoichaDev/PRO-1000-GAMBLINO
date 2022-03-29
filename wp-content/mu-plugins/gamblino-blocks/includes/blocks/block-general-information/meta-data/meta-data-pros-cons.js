const metaDataProsCons = {
    titlePros: {
        type: "string",
    },
    titleProsTextColor: {
        type: 'string',
        default: '#589822',
    },
    prosTextLists: {
        type: "array",
        selector: ".wp-block-gamblino-block-general-information__review-3-pros-list ul li",
        source: "query",
        default: [{ text: "", textColor: '#589822' }],
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
    },
    titleConsTextColor: {
        type: 'string',
        default: '#FF0000',
    },
    consTextLists: {
        type: "array",
        selector: ".wp-block-gamblino-block-general-information__review-3-cons-list ul li",
        source: "query",
        default: [{ text: "", textColor: '#FF0000' }],
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
