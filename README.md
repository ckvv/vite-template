根据个人经验，创建前端项目的最佳实践  
包含了代码风格、commit信息检查，组件库的按需加载，路由的权限验证等

# Features

+ `vite`
+ `vue-router`
+ `axios`
+ `element-plus`: 已配置好组件按需加载
+ `naive-ui`: 已配置好组件按需加载
+ `eslint`: 检查语法规则和代码风格
+ `commitlint` & `husky`: 检查commit提交的信息
+ `rollup-plugin-visualizer`: 生成 report.html 以帮助分析包内容

# Getting Started 

npm:
```shell
npm i
npm run dev
npm run build
npm run serve
```

yarn:
```shell
yarn
yarn dev
yarn build
yarn serve
```

# 其他

可以配合其他相关项目使用

[vite-template](https://github.com/ckvv/vite-template)
[koa-sequelize-template](https://github.com/ckvv/koa-sequelize-template)
[koa-prisma-template](https://github.com/ckvv/koa-prisma-template)