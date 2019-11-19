const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode: "production",
  // 不属于内部的库, 外部的
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'React'
    }
  }
});
