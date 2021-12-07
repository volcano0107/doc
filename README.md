## 本地运行

1. 需要先安装 node，yarn(https://yarnpkg.com/zh-Hans/如需要)
   1. 如果是Mac系统, 建议先设置brew为阿里镜像: (https://blog.csdn.net/guodengh/article/details/90678108)
   2. yarn 建议设置为 淘宝镜像, 运行:
    ```
    yarn config set registry https://registry.npm.taobao.org
    ```
2. 运行命令：

```
yarn

yarn dev
```
或
```
npm i
npm run dev
```

## 代码同步
1. 提交代码至master分支后，执行
```
npm run deploy
```

## 文件路径的默认寻址方式

和图标/图片等静态资源相关的，第一个 '/' 默认指向的是 docs/.vuepress/public/
侧边栏/导航栏链接的markdown文件，第一个 '/' 默认指向的是 docs/，文档目前都放置在docs/pages里

## 注意事项

每次调整config.js之后，都需要重新npm run dev一次