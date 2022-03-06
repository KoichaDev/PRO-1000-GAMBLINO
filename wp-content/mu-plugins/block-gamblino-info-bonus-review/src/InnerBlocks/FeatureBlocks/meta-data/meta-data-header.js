const metaDataHeader = {
    headerTitle: {
        type: "string",
        source: "html",
        selector: "h2",
    },
    id: {
        type: "number",
    },
    url: {
        type: "string",
        source: "attribute",
        selector: "img",
        attribute: "src",
    },
    alt: {
        type: "string",
        source: "attribute", // Will be stored in the alt attribute of img-tag element
        selector: "img",
        attribute: "alt",
        default: "",
    },

};

export default metaDataHeader;
