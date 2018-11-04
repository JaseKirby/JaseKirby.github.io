const merge = require("webpack-merge");
const common = require("./webpack.config");
const WebpackCdnPlugin = require('webpack-cdn-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new WebpackCdnPlugin({
            modules: {
               'react': [
                 { name: 'react', var: 'React', path: `umd/react.production.min.js` },
                 { name: 'react-dom', var: 'ReactDOM', path: `umd/react-dom.production.min.js` },
               ]
             }
          })
    ]
});
