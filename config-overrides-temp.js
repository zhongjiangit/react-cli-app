const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const { override, addLessLoader, addWebpackAlias } = require('customize-cra')
    // const { aliasDangerous, configPaths } = require('react-app-rewire-alias/lib/aliasDangerous');
const paths = require('react-scripts/config/paths');
const processDefine = Object.entries(process.env).reduce(
    (res, [key, value]) => ({
        ...res,
        [`process.env.${key}`]: JSON.stringify(value),
    }), {},
);

// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config
// }

module.exports = {
    webpack: override(
        // removeModuleScopePlugin(), // 为了导入根目录的common，cra默认只能导入src下的文件
        // 路径别名
        // addWebpackAlias({
        //   '@common': path.resolve(__dirname, '../common'),
        //   '@environment': path.resolve(__dirname, './src/enviroment'),
        // }),
        addWebpackAlias({
            '@': path.resolve(__dirname, 'src')
        }),
        addLessLoader({
            lessOptions: {
                javascriptEnabled: true,
                localIdentName: '[local]--[hash:base64:5]'
            },
        }),
        (config, env) => {
            // 配置打包目录输出到 ../dist/public 目录中
            paths.appBuild = path.join(__dirname, '../dist/public');
            config.output.path = paths.appBuild;
            config.output.publicPath = './';
            config.plugins.push(new webpack.DefinePlugin(processDefine));

            // NOTE: 解决 create-react-app imports restriction outside of src directory 的限制
            // aliasDangerous(configPaths('tsconfig.paths.json'))(config);

            return config;
        },
    ),
};