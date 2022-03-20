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
