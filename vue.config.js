// vue.config.js
const path = require('path')
const isLocalDev = () => process.env.VUE_APP_LOCALDEV
const isProductionBuild = () => process.env.NODE_ENV === 'production'
const isDevelopmentBuild = () => process.env.NODE_ENV === 'production'

const getPublicPath = () => {
    if (isLocalDev() && (isProductionBuild() || isDevelopmentBuild())) {
        return path.resolve(__dirname, 'dist')
    }
    return '/'
}

module.exports = {
    publicPath: getPublicPath(),
}
