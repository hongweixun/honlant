/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hongweixun
 * @Date: 2022-10-26 10:54:47
 * @LastEditors: hongweixun
 * @LastEditTime: 2022-10-26 13:51:19
 */

// import Button from '../../../qzui/button/src/button'
import honlantui from 'honlant-ui'
import 'honlant-ui/style.css'
// 使用vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
import './global.css'
/**
 * register-components.js使用脚本自动创建
 * // package.json
 * "scripts": {
    "register:components": "vitepress-rc"
    }
 */
// 插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(honlantui)
    // app.component('div', Button)
    registerComponents(app)
  }
}
