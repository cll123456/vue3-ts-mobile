> 大家都知道，移动端喝pc端的区别在于的是，移动端怎么做适配。还有vue3 和 ts 如何进行结合。本人抱着`more interest, less interests`的目的。来记录自己在开发过程中的一些公共的方面。来帮助更多的技术人.

# 效果
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210406175346815.gif#pic_center)

> 作为移动端最关键的页面兼容问题，在本项目是已经解决了的。
源码地址： [https://github.com/cll123456/vue3-ts-mobile.git](https://github.com/cll123456/vue3-ts-mobile.git)
演示地址： [https://cll123456.github.io/vue3-ts-mobile/#/](https://cll123456.github.io/vue3-ts-mobile/#/)

# 安装依赖

```typescript
"browserslist": [
    "defaults", // 默认
    "last 2 versions", // 兼容主流浏览器的最近两个版本
    "> 1%", // 使用的浏览器需要在市场上的份额大于1
    "iOS 7", // ios 系统版本大于7
    "last 3 iOS versions" // 兼容ios的最新3个版本
  ],
  "dependencies": { // 生产依赖
    "axios": "^0.21.1", // 发ajax 请求的包
    "vant": "^3.0.9",  // 安装vant ui 库
    "vue": "^3.0.5", // vue3 的版本 
    "vue-router": "^4.0.4",  // 对应vue3 的 路由版本
    "vuex": "^4.0.0" // 对应vue3的vuex， 在这里给一个温馨提示。在vue3中，做数据的存储，其实可以不需要使用vuex, 例如： provide/ reject 、 全局ref(变量) 都是可以的，这个根据实际项目的情况来决定
  },
  "devDependencies": { // 开发黄金依赖
    "@types/node": "^14.14.36", // node 环境的类型检查
    "@vitejs/plugin-vue": "^1.1.5", // vite 的封装vue3的包，
    "@vue/compiler-sfc": "^3.0.5", // vue3 编译 .vue模板的包
    "autoprefixer": "^10.2.4", // 自动添加 css 的前缀
    "postcss-pxtorem": "^5.1.1", // 用于将px 转成rem 的包，在项目中就可以使用 px啦
    "sass": "^1.32.8", // sass 只要按照就行，用于css 的工程化
    "typescript": "^4.1.3", // ts
    "vite": "^2.0.5" // vite 工具
  }
```
# 主入口 `vite.config.js`

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:  './',//打包路径
  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  // 全局css 
  css: {
    preprocessorOptions: { 
      scss: {
      // 全局的scss ，跨域放多个，例如：主题的变量，和一些混合等
        additionalData: `@import "./src/style/mixin.scss";`,
      }
    }
  },
  // 代理服务
  server: {
    port: 4000,//启动端口
    // open: true,
    proxy: {
      // 第一个代理
      '/api/mobile':{ // 匹配到啥来进行方向代理
        target: 'https://github.com/cll123456/vue3-ts-mobile', // 代理的目标
        rewrite: (path) => path.replace(/^\/api/, '') // 如果不需要api 直接把路径上的api 替换成空，这个
      },
      
      // 第二个代理
      '/api/md': {
       target: 'https://editor.csdn.net/md?not_checkout=1&articleId=115252632',//代理网址
        changeOrigin: true, // 支持跨域
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
})
```
# ts 配置
> Vite支持直接导入.ts文件。
Vite只对.ts文件执行翻译，不执行类型检查。它假设类型检查由IDE和构建过程负责(可以在构建脚本中运行tsc——noEmit)。
Vite使用esbuild将TypeScript转换为JavaScript，比普通`tsc快20~30倍`，HMR更新可以在50毫秒内反映到浏览器中。
请注意，因为`esbuild`只执行不带类型信息的转换，所以它不支持某些特性，如const enum和隐式的纯类型导入。你必须在tsconfig中设置"isolatedModules": true。这样TS就会对那些不能与单独的翻译一起工作的特性发出警告。

```typescript
  "compilerOptions": { // 编译选项
    "target": "esnext", // ts的编译的目标es的版本
    "module": "esnext", // 模块的版本是 esnext(下一阶段，)
    "moduleResolution": "node", // 模块的解析 node的模块解析方式
    "strict": true, // 启动严格的代码检查
    "jsx": "preserve", // 使用的jsx 是转化成怎么的表现形式
    "sourceMap": true, // 打包后是否使用资源地图，方便查找问题所在
    "resolveJsonModule": true, // 是否支持使用import 来导入json文件
    "isolatedModules":true, // 每一个文件是否单独编译成一个文件，这个在开发阶段很重要，生产环境设置成false,因为vite是基于每一个文件的改变来进行热更新，如果不开启这个选项，ts 改变后不会自动热更新
    "esModuleInterop": true, // 是否启动模块化与非模块化的文件的交互
    "lib": ["esnext", "dom"], // 环境， dom 环境 和 最新的es
    "types": ["vite/client"]  //Vite应用程序中缓冲客户端代码环境, 默认是node api
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"] // 这是需要转换的代码目录和文件后缀名
```

# 解决页面大小兼容问题
> 新建立`postcss.config`

```javascript
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      // 数字|函数）表示根元素字体大小或根据input参数返回根元素字体大小
      rootValue: 37.5,
      // 使用通配符*启用所有属性
      propList: ['*'],
      // 允许在媒体查询中转换px
      mediaQuery: true,
      // 过滤掉.norem-开头的class，不进行rem转换
      selectorBlackList: ['.norem'] 
    },
  },
};
```
> 建立 rem.ts,用于根据当前的窗口来自动改变跟的`font-size`

```typescript
// rem等比适配配置文件
// 基准大小, 这个是由于vantui的基准大小就是37.5
const baseSize = 37.5
// 注意此值要与 postcss.config.js 文件中的 rootValue保持一致
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 375宽的缩放比例，可根据自己需要修改,一般设计稿都是宽750(图方便可以拿到设计图后改过来)。
  const scale = document.documentElement.clientWidth / 375
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}

export {}
```
# 初始化样式
> style 中建立 reset.scss

```html
@charset "UTF-8";

/* stylelint-enable */
/* 重置样式 */
* {
    -webkit-tap-highlight-color: transparent;
    outline: 0;
}

body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
}

img {
    border: 0 none;
    vertical-align: top;
}

i, em {
    font-style: normal;
}

ol, ul {
    list-style: none;
}

input, select, button, h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-family: inherit;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

a, a:visited {
    text-decoration: none;
    color: #333;
}

body {
    margin: 0 auto;
    background: #e8e8ed;
    font-size: 14px;
    font-family: -apple-system,Helvetica,sans-serif;
    line-height: 1.5;
    color: #666;
    -webkit-text-size-adjust: 100% !important;
  /*-webkit-user-select: none;
  user-select: none;*/
}
```

# 使用路由 `router`
> 由于vue3的整改，路由的使用方式也发生了一些改变，具体查看官网
```typescript
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home/index.vue"), // 使用懒加载
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
```

# mian.ts 的结合

```typescript
import { createApp } from 'vue'
import App from './App.vue'
// 重置样式
import './style/reset.scss'
import 'vant/lib/index.css'; // 全局引入样式

// 引入 更改跟节点的size
import './rem'
import Vant from 'vant';
// 挂载路由
import router from "./router";


createApp(App)
.use(Vant)
.use(router)
.mount('#app')

```

