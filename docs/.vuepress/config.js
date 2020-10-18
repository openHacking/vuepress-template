module.exports = {
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'VuePress Template',
      description: 'VuePress Plugins Demo'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress模板',
      description: 'VuePress插件演示'
    }
  },
  plugins: ['@vuepress/back-to-top','qrcode'],
  themeConfig: {

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/guide/', ariaLabel: 'Guide' },
          { text: 'Resource', link: '/resource/', ariaLabel: 'Resource' },
					{ text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/guide/': [
            '',
            'plugins'
          ],
          '/resource/': [],
        }
      },
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '指南', link: '/zh/guide/', ariaLabel: '指南' },
          { text: '资源', link: '/zh/resource/', ariaLabel: '资源' },
					{ text: 'Github', link: 'https://github.com/openHacking/vuepress-template' }
        ],
        sidebar: {
          '/zh/guide/': [
            '',
            'plugins'
          ],
          '/zh/resource/': [],
        }
      }
    }
  },
  
}