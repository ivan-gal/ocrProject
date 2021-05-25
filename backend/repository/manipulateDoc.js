const { Paragraph, Document, TextRun } = require('docx');

const fs = require('fs');

const createDoc = (textpicture) => {
    const paragraphArray = [];

    for (let text of textpicture) {
        const form = new Paragraph({
            children: [new TextRun(text)],
        });
        paragraphArray.push(form);
    }

    const objectDocument = {
        sections: [
            {
                properties: {},
                children: [],
            },
        ],
    };

    for (let para of paragraphArray) {
        objectDocument.sections[0].children.push(para);
    }

    const document = new Document(objectDocument);

    return document;
};

module.exports = { createDoc };
