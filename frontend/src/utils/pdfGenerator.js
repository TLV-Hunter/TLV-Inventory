import jsPDF from 'jspdf';

export const generatePDF = (data, filename) => {
  const doc = new jsPDF();
  doc.text(JSON.stringify(data), 10, 10);
  doc.save(`${filename}.pdf`);
};