import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

export default {
  resolve: {
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }),
    ],
  },
};
