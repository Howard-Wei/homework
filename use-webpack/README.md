# use webpack

## 目标
1. 完成scss文件加载
2. 完成图片文件加载，并判定限制大小内使用base64
3. 完成背景色
4. 使用`HMR`
5. 使用`html-webpack-plugin`

## 安装启动
```bash
# 安装
npm i
# 启动
npm run dev
```

## 总结
1. 使用`npx`可直接使用项目内安装的命令
   1. `--no-install`: 如果没有安装则报错，而不是直接下载临时文件
   2. npm版本5.2+
2. 图片根据大小转换处理方案使用`url-laoder`
3. `HMR`
   1. `npm i webpack-dev-server -D`
   2. [devServer配置](https://webpack.docschina.org/configuration/dev-server/)
      1. `hot:true`
      2. `open:true`
      3. `contentBase:'./dist'`
   3. 配合插件 `webpack.HotModuleReplacementPlugin()`