# ej-ui-vue3

业务组件库

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

node版本18`18.20.0`

```sh
yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn storybook
```

## 一些问题
* 项目引入组件库报错
    * 报错内容：`typeError: Cannot read properties of null (reading 'isCE')  `
    * 分析报错原因：组件库与项目库依赖vue版本不匹配
    * 方案1-解决：组件库与项目库采用vue版本自升级，package.json文件中`"vue": "^3.2.41"`
