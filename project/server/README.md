# Server
学习项目服务端

## 依赖
- svg-captcha
- koa

## 目录结构
```
├── root
│   │── src                        
│   │   │── controller                      # 业务逻辑层
│   │   │   └── loginController             # 登陆相关业务逻辑
│   │   │   │── routes                      # 路由
│   │   │   │   │── index.js                # 总路由输出
│   │   │   │   └── loginRouter.js          # 登陆注册相关路由
│   │   │   └── app.js                      # 项目入口模块
│   │── .babelrc                            # babel配置文件
│   │── package-lock.json                   # npm lock
│   │── package.json                        # npm 包管理文件
│   └── README.md                           # 项目简介
```