## 项目结构说明
---
```
.
├── bin                         #启动脚本
├── controller                  #控制层，分发路由
├── model                       #数据模型层，处理数据库相关
├── public                      #前端静态文件
│   ├── dev                     #工作目录
│   │   ├── css
│   │   └── js
│   ├── release                 #发布版本
│   │   ├── css
│   │   └── js
│   ├── lib                     #外部js插件，类库，字体等
│   └── upload                  #上传文件
│       └── images
│
├── server                      #业务逻辑层
└── util                        #后台工具类

```