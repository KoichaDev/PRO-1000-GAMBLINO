const metaDataBody = {
    aboutTitle: {
        type: 'string',
        source: 'html',
        selector: 'h2',
    },
    aboutTitleTextColor: {
        type: 'string',
    },
    aboutBodyText: {
        type: 'string',
        source: 'html',
        selector: 'p',
    },
    aboutBodyTextColor: {
        type: 'string',
    }
};

export default metaDataBody;
