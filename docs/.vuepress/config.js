module.exports = {
  base: '/doc/',
  dest: 'dist',
  title: 'Front-End',
  description: 'js的学习之路，以此见证努力的自己~',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }],
  ],
  serviceWorker: false,
  theme: 'antdocs',
  themeConfig: {
    logo: '/assets/logo.png', //网页顶端导航栏左上角的图标
    search: true,
    searchMaxSuggestions: 10,
    repo: 'https://github.com/volcano0107/doc',
    repoLabel: 'Github',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsDir: 'docs',
    lastUpdated: '上次更新',
    backToTop: true,
    displayAllHeaders: true,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'LeetCode',
        link: '/leetcode/easy/'
      },
      {
        text: 'JAVA',
        link: '/java/'
      },
    ],
    sidebar: {
      '/leetcode/': [
        {
          title: '简单',
          collapsable: true,
          children: [
            ['easy/', '这里可以重写文章标题，不配置则按照md文档的第一个一级标题作为侧边栏页面标题'],
            'easy/one',
            // 在这里添加新文章对应路径
          ]
        },
        {
          title: '中等',
          collapsable: true,
          children: [
            ['middle/one', 'Introduction'],
          ]
        },
      ],
      '/java/': [
        '',     
        'one',
        ['two', '这是two的标题']  
      ],
    },
  },
  // 其它配置
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/assets',
      }
    }
  }
}