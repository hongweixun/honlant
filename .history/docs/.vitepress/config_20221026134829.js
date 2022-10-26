/*
 * @Descripttion: your project
 * @version: 1.0
 * @Author: hongweixun
 * @Date: 2022-10-26 10:54:47
 * @LastEditors: hongweixun
 * @LastEditTime: 2022-10-26 13:48:28
 */
module.exports = {
  title: 'HonLant',
  description: 'Just playing around.',
  themeConfig: {
    logo: '/public/favicon.ico',
    // 展示搜索框
    algolia: {
      appKey: 'your_api_key',
      indexName: 'index_name',
      searchParameters: {
        faeFilters: ['tags:guide,api']
      }
    },
    nav: [
      {
        text: '指南',
        link: '/',
      },
      {
        text: '组件',
        link: '/components/button/',
      },
      { text: 'gitee', link: 'https://gitee.com/hvision' },
      {
        text: 'GitHub',
        link: 'https://github.com/hongweixun',
      },
    ],
    sidebar: {
      '/': getDemoSidebar(),
    }
  },
  markdown: {
    config: (md) => {
      const {
        demoBlockPlugin
      } = require('vitepress-theme-demoblock')
      md.use(demoBlockPlugin)
    },
    lineNumbers: true
  }
}

function getDemoSidebar() {
  return [
    {
      text: "介绍",
      link: '/guide/log/'
    },
    {
      text: "更新日志",
      children: [{
        text: "新特性",
        link: "/guide/news/"
      }]
    },
    {
      text: "开发指南",
      children: [{
        text: "安装",
        link: "/components/installation/"
      }]
    },
    {
      text: "基础组件",
      children: [{
          text: "Button 按钮",
          link: "/components/button/"
        },
        {
          text: "Loading 加载",
          link: "/components/loading/"
        },
        {
          text: "Model 模态框",
          link: "/components/model/"
        },
        {
          text: "Card 容器",
          link: "/components/card/"
        },
        {
          text: "Footer 页脚",
          link: "/components/footer/"
        },
        {
          text: "Icon 图标",
          link: "/components/icon/"
        },
      ],
    },
    {
      text: "配置组件",
    },
  ]
}