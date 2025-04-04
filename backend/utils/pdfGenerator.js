const PDFDocument = require('pdfkit');
const fs = require('fs');

const generatePDF = (data, outputPath) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream(outputPath));
  doc.text(JSON.stringify(data, null, 2));
  doc.end();
};

module.exports = { generatePDF };