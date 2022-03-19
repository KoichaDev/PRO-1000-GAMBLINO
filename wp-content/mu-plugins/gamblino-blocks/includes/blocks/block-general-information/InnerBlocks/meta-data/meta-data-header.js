const metaDataHeader = {
    imageId: {
        type: "number",
    },
    imageUrl: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
    },
    imageAlt: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "alt",
        default: "",
    },
    author: {
        type: "string",
        source: "html",
        selector: "dd",
    },
    lastUpdated: {
        type: "string",
        source: "html",
        selector: "dd",
    },
    topic: {
        type: "string",
        source: "html",
        selector: "dd",
    },
    experiences: {
        type: "string",
        source: "html",
        selector: "dd",
    },
};

export default metaDataHeader;
