import { merge } from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import common from './webpack.common';

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
});
