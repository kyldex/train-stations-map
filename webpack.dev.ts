import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
// Fix typescript error when configuring `devServer`
// https://webpack.js.org/configuration/configuration-languages/#typescript
import 'webpack-dev-server';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 8000
  }
});

export default config;
