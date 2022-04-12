// vue.config.js
const path = require('path')
const isLocalDev = () => process.env.VUE_APP_LOCALDEV
const isProductionBuild = () => process.env.NODE_ENV === 'production'
const isDevelopmentBuild = () => process.env.NODE_ENV === 'production'

module.exports = {}
