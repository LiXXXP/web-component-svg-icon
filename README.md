# 项目文档

## 使用组件

- 组件依赖`vite-plugin-svg-icons`插件，需要先安装使用插件

在 vite.config.js 中配置一下内容

```ts
import { defineConfig } from 'vite'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [resolve(process.cwd(), 'node_modules/@gwin/svg-icon/lib/theme-default/icons/svg')],
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
```

- main.ts 中引入依赖和组件

```ts
import 'virtual:svg-icons-register'
import SvgIcon from '@gwin/svg-icon'

createApp(App).use(SvgIcon).mount('#app')
```

## 运行项目

### 安装依赖

- 在项目根目录安装项目依赖

```shell
yarn
```

### 运行项目

```shell
yarn run dev
```

### 打包项目

- 打包组件

```shell
yarn run build
```

- 打包演示项目

```shell
yarn run build:doc
```

## 项目目录

<details>
<summary>👀 查看目录</summary>

```Markdown
|-- Web-Component-Template -------------- 项目名称
    |-- .eslintignore ------------------- Eslint 忽略文件
    |-- .eslintrc.js -------------------- Eslint 配置文件
    |-- .gitignore ---------------------- Git 上传忽略文件
    |-- .npmignore ---------------------- NPM 上传忽略文件
    |-- package.json -------------------- 项目依赖文件
    |-- README.md ----------------------- 项目介绍文档
    |-- tsconfig.json ------------------- TS 配置文件
    |-- vite.config.ts ------------------ Vite 配置文件
    |-- build --------------------------- 项目打包配置信息目录
    |-- examples ------------------------ 项目示例目录
    |   |-- App.vue --------------------- 项目主入口
    |   |-- main.ts --------------------- 项目入口文件
    |   |-- assets ---------------------- 图片资源文件目录
    |   |-- components ------------------ 公共组件目录
    |   |-- router ---------------------- 路由目录styles
    |-- lib ----------------------------- NPM 依赖打包目录
    |-- packages ------------------------ 组件目录
    |   |-- ImageView ------------------- 组件样例
    |   |-- theme ----------------------- scss目录
    |   |-- index.ts -------------------- 入口文件
    |-- public -------------------------- 公共静态资源目录
    |-- tests --------------------------- 测试目录
        |-- unit ------------------------ 单元测试目录
```

</details>
