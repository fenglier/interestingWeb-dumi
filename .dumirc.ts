/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-09-01 15:41:18
 * @lastEditors: fengli
 * @lastEditTime:
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  base: '/interestingWeb-dumi/', // 由于 GitHub Pages 是非域名根路径部署, base 和 publicPath 配置项需改为 仓库名称
  publicPath: '/interestingWeb-dumi/',
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'IW',
    logo: '/interestingWeb-dumi/logo.webp',
    socialLinks: {
      github: 'https://github.com/fenglier/interestingWeb-dumi',
    },
  },
  metas: [
    {
      name: 'google-site-verification',
      content: 'SfMpPiW0Ypn8ji_BIWJNQjtrWezIlrtcIcagxyCvJLY',
    },
    { name: 'keywords', content: 'interestingWeb,有趣,布局,特效,组件,样式' },
    {
      name: 'description',
      content: '一个收集各种有趣的网页布局、特效、组件、样式的网站',
    },
  ],
});
