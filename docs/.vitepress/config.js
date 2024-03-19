// .vitepress/config.js
export default {
  // 站点级选项
  title: 'Y-UI',
  description: 'Y-UI组件文档.',
  themeConfig: {
    // 主题级选项
    lastUpdated: '最后更新时间',
    docDir: 'docs',
    editLinks: true,
    repo: 'https://github.com/yongjianyu/Yu_design_component',
    editLinkText: '在 GitHub 上编辑此页',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2024 Y-UI'
    },
    nav: [
      { text: '指南', link: '/guide/installation', activeMatch: '/guide/' },
      { text: '组件', link: '/component/icon', activeMatch: '/component/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '安装', link: '/guide/installation' },
            { text: '快速上手', link: '/guide/quickstart' }
            // { text: '主题', link: '/guide/theme' },
            // { text: '图标', link: '/guide/icon' },
            // { text: '组件', link: '/guide/component' },
            // { text: '配置', link: '/guide/config' }
          ]
        }
      ],
      '/component/': [
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/component/icon' }
            // { text: 'Button 按钮', link: '/component/button' },
            // { text: 'Card 卡片', link: '/component/card' },
            // { text: 'Carousel 轮播图', link: '/component/carousel' },
          ]
        }
      ]
    }
  }
}
