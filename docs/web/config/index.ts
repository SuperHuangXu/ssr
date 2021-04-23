export const webSiteConfig = {
  header: {
    items: [
      {
        label: 'Docs',
        path: '/docs/why'
      },
      {
        label: 'API',
        path: '/docs/api$config'
      },
      {
        label: '插件列表',
        path: '/docs/plugin$index'
      }
    ]
  },
  home: {
    firstFloor: {
      title: '地球上最优秀的 SSR 框架',
      desc: 'SSR 框架是为前端框架在服务端渲染的场景下所打造的开箱即用的服务端渲染框架',
      startButton: {
        label: 'Start Learning',
        path: '/docs/features$started'
      },
      docsButton: {
        label: 'Documentation',
        path: '/docs/why'
      },
      imgUrl: '/images/logo.jpeg'
    },
    secondFloor: {
      title: '为什么要选择 SSR',
      content: '无比强大的功能支持，及时的答疑服务',
      items: [
        {
          title: '极易定制',
          desc: '框架使用插件化架构支持任意前端框架和服务端框架的组合',
          icon: 'https://camo.githubusercontent.com/84219530f779a9be5213a92a852af381b5d8bac12ca193b30157831436fe682b/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f544231636b415443474c37674b306a535a46425858585a5a7058612d3534302d3534302e6a7067',
          children: [
            '前端框架支持 React Vue2 Vue3',
            '服务端框架官方支持 Midway.js Nest.js',
            '开发者可以通过插件新增任意服务端框架'
          ]
        },
        {
          title: '开箱即用',
          desc: '内置 10+ 脚手架配套扩展，如Antd、Vant、TS、Hooks等',
          icon: 'https://camo.githubusercontent.com/84219530f779a9be5213a92a852af381b5d8bac12ca193b30157831436fe682b/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f544231636b415443474c37674b306a535a46425858585a5a7058612d3534302d3534302e6a7067',
          children: [
            '默认对 ant-design vant 等流行 UI 框架做底层支持可直接引入',
            '构建工具支持 Webpack/Vite',
            '支持渲染降级，服务端渲染一键切换为客户端渲染'
          ]
        },
        {
          title: '完美支持 Serverless',
          desc: '一键发布到各种Serverless平台，也支持传统Web Server，比如Egg、Midway、Nest等。',
          icon: 'https://camo.githubusercontent.com/84219530f779a9be5213a92a852af381b5d8bac12ca193b30157831436fe682b/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f544231636b415443474c37674b306a535a46425858585a5a7058612d3534302d3534302e6a7067',
          children: [
            'ssr deploy 一键部署到阿里云',
            'ssr deploy --tencent 一键部署到腾讯云',
            'npm run prod 以传统 Node.js 形式部署'
          ]
        }
      ]

    }
  },
  footer: {
    items: [
      {
        label: '相关链接',
        path: '/docs',
        children: [
          {
            label: 'Github',
            path: 'https://github.com/ykfe/ssr'
          },
          {
            label: 'API 配置',
            path: '/docs/api$config'
          },
          {
            label: '插件列表',
            path: '/docs/plugin$index'
          }
        ]
      },
      {
        label: '联系我们',
        path: '/blog',
        children: [
          {
            label: '钉钉交流群',
            path: '/docs/features$issue'
          },
          {
            label: '知乎',
            path: 'https://www.zhihu.com/people/zhang-yu-ang-67'
          }
        ]
      }
    ]
  }
}
