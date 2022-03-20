const metaDataBody = {
    aboutTitle: {
        type: 'string',
        source: 'html',
        selector: 'h2',
    },
    aboutBodyText: {
        type: 'string',
        source: 'html',
        selector: 'p', 
    }
};

export default metaDataBody;
