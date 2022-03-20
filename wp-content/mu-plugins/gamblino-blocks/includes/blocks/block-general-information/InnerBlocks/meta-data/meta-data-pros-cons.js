const metaDataProsCons = {
    titlePros: {
        type: "string",
        source: "html",
        selector: "h3",
    },
    titleProsTextColor: {
        type: 'string',
        default: '#589822',
    },
    prosTextLists: {
        type: "array",
        selector: ".wp-block-gamblino-list-pros ul li",
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
        source: "html",
        selector: "h3",
    },
    titleConsTextColor: {
        type: 'string',
        default: '#FF0000',
    },
    consTextLists: {
        type: "array",
        selector: ".gamblino-feature-list ul li",
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
