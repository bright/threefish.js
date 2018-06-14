import * as path from "path";
import * as webpack from "webpack";

const moduleConf: webpack.Module = {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
    }]
};
const output: webpack.Output = {
    path: path.resolve(__dirname),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'threefish',
    umdNamedDefine: true
};
const configs: webpack.Configuration[] = [{
    mode: 'development',
    entry: {
        'threefish': './threefish.ts',
    },
    output: output,
    module: moduleConf
}, {
    mode: 'production',
    entry: {
        'threefish.min': './threefish.ts',
    },
    output: output,
    module: moduleConf
}];

export default configs;
