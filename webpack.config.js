"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const moduleConf = {
    rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }]
};
const output = {
    path: path.resolve(__dirname),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'threefish',
    umdNamedDefine: true
};
const configs = [{
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
exports.default = configs;
