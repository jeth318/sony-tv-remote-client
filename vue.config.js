// vue.config.js
const path = require('path')
console.log(process.env.NODE_ENV)
const isLocalDev = () => process.env.VUE_APP_LOCALDEV
const isProductionBuild = () => process.env.NODE_ENV === 'production'

const getPublicPath = () => {
    if (isProductionBuild()) {
        if (isLocalDev()) {
            return path.resolve(__dirname, 'dist')
        }
        return '/sony-tv-remote'
    }
    return '/'
}

module.exports = {
    publicPath: getPublicPath(),
}
