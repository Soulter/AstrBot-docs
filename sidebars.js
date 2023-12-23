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
    {
      type: 'category',
      label: '部署',
      items: ['部署/通过命令行部署', '部署/通过 Docker 部署', '部署/通过 Windows 部署'],
    },
    {
      type: 'category',
      label: '配置',
      items: ['配置/平台配置', '配置/语言模型配置', '配置/插件配置', '配置/其他功能配置'],
    },
    {
      type: 'category',
      label: '开发',
      items: ['开发/插件开发'],
    },
  ],
};

export default sidebars;
