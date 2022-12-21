## notel-ui 组件库

### 启动项目前准备
1. pnpm 包管理器
2. pnpm i -安装所有依赖
3. pnpm all:build 对所有依赖进行一次打包

### 采用 pnpm + vite +ts +vue3 + monorepo

- packages 存放所以项目的文件夹
- docs vitepress 组件库文档相关

### pnpm workspace
    详细看根目录下 `pnpm-workspace.yaml`
    目前存在的workspac:
        - packages 下面所有的项目
        - docs

#### packages
- plugins 存放一些 vite、rollup 的 plugin 包
- notel-ui 组件库
- client 客户端

### git 提交规范
1. cz替代 git commit -m
2. 每次开发建立独立的分支,合并提 pull request 合并主分支