const path = require('path');

module.exports = {
  lib: {
    entry: path.resolve(__dirname, '../packages/index.js'),
    name: 'Plato',
    filename: 'index.js',
  },
  rollupOptions: {
    // 确保外部化处理那些你不想打包进库的依赖
    external: ['vue', 'element-plus'],
    output: {
      // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
      globals: {
        vue: 'Vue',
      },
    },
  },
};
