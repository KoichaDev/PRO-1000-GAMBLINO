const attributesTableDataTabs = {
  dataTabs: {
    type: 'array',
    source: 'query',
    default: [{ textContent: '' }],
    selector: '.gamblino-block-table-container > nav > ul > li',
    query: {
      textContent: {
        type: "string",
        source: "html",
        selector: "a",
      },
    }
  },
}

export default attributesTableDataTabs