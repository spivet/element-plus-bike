const path = require('path');

module.exports = {
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, '../index.html'),
      play: path.resolve(__dirname, '../web/play/index.html')
    }
  }
};
