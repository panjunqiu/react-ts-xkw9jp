import { resolve } from 'path';
import plugins from './plugins';
import routes from './routes';

export default {
  npmClient: 'yarn',
  routes,
  ...plugins,
  // 设置文件夹别名
  alias: {
    src: resolve(__dirname, '../src'),
    utils: resolve(__dirname, '../src/utils'),
    static: resolve(__dirname, '../src/static'),
    style: resolve(__dirname, '../src/static/style'),
    services: resolve(__dirname, '../src/services'),
    contants: resolve(__dirname, '../src/contants'),
  },
};
