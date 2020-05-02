// vue.config.js
const path = require('path');
console.log(process.env.NODE_ENV)
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? 'sony-tv-remote' : path.resolve(__dirname, 'dist')
  }