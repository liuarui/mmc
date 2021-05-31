# 脚手架搭建指南

## 准备工作

`rollup` 用于打包脚手架
`commander` 优雅的创建命令
`inquirer` 与用户交互
`ora` 命令行动画
`chalk` 输出文字变色

### rollup 插件

`@rollup/plugin-node-resolve` 解析模块中用到的 node_modules 包
`@rollup/plugin-json` 解析引用到的 json 文件
`@rollup/plugin-commonjs` 解析 npm 包用到的 commonjs 模块
`@rollup/plugin-typescript` 解析 typescript
`rollup-plugin-terser` 代码混淆
