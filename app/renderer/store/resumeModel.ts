const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
    namespace: 'resumeModel',
    openSeamlessImmutable: true,
    state: {
      base: {
        avatar: '',
        username: '袁启超',
        area: '浙江·湖州',
        school: '浙江摸鱼大学',
        major: '电气工程',
        degree: '本科',
        hometown: '浙江',
        onSchoolTime: {
          beginTime: '2012.09',
          endTime: '2016.06',
        },
      },
      contact: {
        phone: '188****8888',
        email: '88888888@qq.com',
        github: 'https://github.com/yuanqichao514',
        juejin: 'https://juejin.cn/user/3474112476363405',
      },
      work: {
        job: '前端工程师',
        city: '杭州｜上海',
        cityList: ['杭州', '上海'],
      },
      hobby: '书法，游泳，打游戏，睡觉',
      skill:
        '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码｜熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件｜阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库｜了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件｜了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件｜了解 Electron，了解 Node.js 以及 Git 团队协作开发工具｜了解设计模式，对于特定场景，能采用合适的设计模式进行解决｜了解 MYSQL，了解数据库优化常用方法｜了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
      skillList: [
        '熟悉 Vue.js，了解数据双向绑定原理、阅读过 NextTick 源码',
        '熟悉 React，了解并使用 Hooks 特性，阅读过 redux 源码，开发 rc-redux-model 中间件',
        '阅读过 Antd 部分优秀组件源码，并参考借鉴，开发组内 UI 组件库',
        '了解 Vscode，开发组内项目辅助工具 vscode-beehive-extension 插件',
        '了解 Webpack 编译原理，了解 babel 转码原理，编写过 babel 插件',
        '了解 Electron，了解 Node.js 以及 Git 团队协作开发工具',
        '了解设计模式，对于特定场景，能采用合适的设计模式进行解决',
        '了解 MYSQL，了解数据库优化常用方法',
        '了解基于微信公众号应用开发，采用 Taro 开发微信小程序，具备良好的网络基础知识',
      ],
      evaluation:
        '掘金 lv1 博主，掘金文章 1k+ 阅读量，github blog 1+ star | 具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境|具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
      evaluationList: [
        '掘金 lv1 博主，掘金文章 1k+ 阅读量，github blog 1+ star',
        '具备良好语言表达能力和沟通能力，能快速融入团队，适应新环境。',
        '具有代码洁癖，前后端分离，自我学习能力强，对新技术具有钻研精神',
      ],
      certificate: '浙江第一届吹牛大赛参与奖',
      certificateList: ['浙江第一届吹牛大赛参与奖'],
      schoolExperience: [
        {
          beginTime: '2012.09',
          endTime: '2016.09',
          post: '宣传部部长',
          department: '院学生会',
          content:
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
          parseContent: [
            '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
            '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
          ],
        },
      ],
      workExperience: [
        {
          beginTime: '2020.09',
          endTime: '2021.12',
          post: '前端工程师',
          department: '浙江吹牛科技有限公司',
          content:
            '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
          parseContent: [
            '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用',
            '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
          ],
        },
      ],
      projectExperience: [
        {
          beginTime: '2021.11',
          endTime: '2021.12',
          projectName: 'visResumeMook 可视化简历平台',
          post: '前端工程师',
          content:
            'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
          parseContent: [
            'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
            '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
            '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
          ],
          date: 1621145137865,
        },
      ],
    },
  };
  
  export default resumeModel;