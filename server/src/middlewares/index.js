import injectConect from './inject_conect.js';

export default function (app) {
  // 注入数据库连接
  app.use(injectConect);
  // TODO: 全局错误处理
}