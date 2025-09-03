/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-12 11:04:28
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React from "react";
import style from "./index.module.scss";
var Shake = function Shake(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("div", {
    className: style.shakeContainer
  }, children);
};
export default Shake;