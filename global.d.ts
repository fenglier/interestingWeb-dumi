// 让打包时，ts识别scss模块化
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
