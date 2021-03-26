
const { 
    override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy
 } = require('customize-cra')


// const theme = require('./lessVars')

module.exports = override(
    addLessLoader({
        javascriptEnabled: true
    }),
    addDecoratorsLegacy(),
    fixBabelImports('import',{
        libraryName: 'antd',
        liberaryDirectory: 'es',
        style: true
    }),
    
)