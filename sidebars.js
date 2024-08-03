/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  tutorialSidebar: [
    "开始",
    {
      type: 'category',
      label: '开始上手',
      items: [
        '开始上手/从零开始',
        {
          type: 'category',
          label: '部署此项目',
          items: ['开始上手/部署/Windows部署', '开始上手/部署/Docker部署', '开始上手/部署/命令行部署'],
          link: {
            type: 'generated-index',
            title: '部署 AstrBot',
            description: '多种部署方式。',
            slug: '/部署',
            keywords: ['部署'],
          },
        },
        '开始上手/可视化面板',
        '开始上手/大语言模型',
        '开始上手/消息平台',
        '开始上手/插件'
      ],
      link: {
        type: 'generated-index',
        title: '开始上手',
        description: '开始上手',
        slug: '/get-started',
        keywords: ['开始上手'],
      },
    },
    {
      type: 'category',
      label: '开发',
      items: ['开发/插件开发', '开发/例子：helloworld'],
    },
    {
      type: 'category',
      label: '进阶',
      items: ['进阶/接入OneAPI'],
    },
  ],
};

export default sidebars;
