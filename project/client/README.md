# client
学习项目：客户端

## 依赖
1. [VeeValidate](https://logaretm.github.io/vee-validate/guide/basics.html#validation-provider)

## 环境
- development: 本地开发环境，接口请求指向本地`localhost:3000`
- production: 线上运行环境，接口请求配置的域名

## 目录结构
```
├── root
│   │── public                            # 外部资源
│   │   │── favicon.ico   
│   │   └── index.html                    # html模板
│   │── src                               # 源码文件
│   │   │── api                           # 异步请求API
│   │   │   └── login.js                  # 登陆注册相关路由
│   │   │── assets                        # 静态资源
│   │   │   │── css                       # 全局css
│   │   │   │── images                    # 静态图片
│   │   │   │── layui                     # layui相关资源
│   │   │   └── mods                      # 
│   │   │── components                    # 公共组件
│   │   │   │── Footer.vue                # 头部组件
│   │   │   └── Header.vue                # 底部组件
│   │   │── router                        # 路由
│   │   │   └── index.js                  # 全局路由注册
│   │   │── utils                         # 公共插件
│   │   │   │── axios.js                  # axios插件配置和实例化
│   │   │   │── business.js               # 业务请求配置
│   │   │   └── veeValidate               # vee-validate配置文件
│   │   │── views                         # 视图
│   │   │   │── Forget.vue                # 忘记密码视图
│   │   │   │── Login.vue                 # 登陆视图
│   │   │   └── Reg.vue                   # 注册视图
│   │   │── App.vue                       # 项目主视图
│   │   └── main.js                       # 项目入口模块
│   │── .browserslistrc                   # 项目支持的浏览器版本配置
│   │── .editorconfig                     # 代码编辑基本格式配置
│   │── .eslintrc.js                      # eslint配置
│   │── .gitignore                        # git忽略文件配置
│   │── babel.config.js                   # babel配置
│   │── package.json                      # npm包管理文件
│   │── package-lock.json                 # npm依赖版本控制文件
│   └── README.md                         # 项目简介
```