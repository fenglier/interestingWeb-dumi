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
    logo: '/interestingWeb-dumi/logo.png',
  },
});
