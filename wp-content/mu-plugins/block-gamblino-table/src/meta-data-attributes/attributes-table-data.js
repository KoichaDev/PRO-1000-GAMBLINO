const attributeTableDataBody = {
    dataFooter: {
        type: 'string',
        source: 'text',
        selector: 'tfoot td'
    },
    dataHead: {
        type: 'array',
        source: 'query',
        default: [],
        selector: 'th[scope="col"]',
        query: {
            content: {
                type: 'string',
                source: 'html'
            }
        }
    },
    dataBody: {
        type: 'array',
        source: 'query',
        default: [],
        selector: 'tbody tr',
        query: {
            bodyCells: {
                type: 'array',
                source: 'query',
                default: [],
                selector: 'td,th',
                query: {
                    content: {
                        type: 'string',
                        source: 'html'
                    }
                }
            }
        }
    },
}

export default attributeTableDataBody;