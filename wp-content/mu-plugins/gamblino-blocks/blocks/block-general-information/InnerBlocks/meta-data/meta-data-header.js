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
        selector: "p",
    },
    lastUpdated: {
        type: "string",
        source: "html",
        selector: "time",
    },
    topic: {
        type: "string",
        source: "html",
        selector: "p",
    },
    experiences: {
        type: "string",
        source: "html",
        selector: "p",
    },
};

export default metaDataHeader;
