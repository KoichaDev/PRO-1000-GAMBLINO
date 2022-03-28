const metaDataHeader = {
    id: {
        type: "number",
        default: 0,
    },
    url: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
        default: ''
    },
    alt: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: "",
    },
    author: {
        type: "string",
    },
    postLastUpdated: {
        type: "string",

    },
    topicName: {
        type: "string",

    },
    experiences: {
        type: "string",
    },
};

export default metaDataHeader;
