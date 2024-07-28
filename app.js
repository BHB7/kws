// 引入 Express 和 http-proxy-middleware 库
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// 创建 Express 应用程序实例
const app = express();

// 设置端口号
const port = 3000;

// 配置反向代理中间件
const apiProxy = createProxyMiddleware({
  target: 'http://search.kuwo.cn',  // 替换为你的目标服务器地址
  changeOrigin: true,  // 允许改变源
});

// 使用反向代理中间件
app.use('/apikw', apiProxy);  // 将中间件绑定到特定路径

// 启动服务器，监听指定的端口
app.listen(port, () => {
  console.log(`Express server is listening on port ${port}`);
});
