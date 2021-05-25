const docx = require('docx');

const createDoc = (textpicure) => {
    const paragraphArray = [];
    for (let text of textpicure) {
    }

    const document = new Document({
        sections: [
            {
                properties: {},
                children: [],
            },
        ],
    });
};

module.exports = { createDoc };
