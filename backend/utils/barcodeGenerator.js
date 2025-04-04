const bwipjs = require('bwip-js');

const generateBarcode = async (data) => {
  try {
    const barcode = await bwipjs.toBuffer({
      bcid: 'code128',
      text: data,
      scale: 3,
      height: 10,
      includetext: true,
    });
    return barcode;
  } catch (error) {
    throw new Error('Barcode generation failed');
  }
};

module.exports = { generateBarcode };