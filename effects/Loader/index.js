/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-07-23 14:29:40
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React from "react";
import style from "./index.module.scss";
var Loader = function Loader() {
  return /*#__PURE__*/React.createElement("div", {
    className: style.BFC,
    style: {
      display: "flex",
      width: "100%",
      height: "5rem",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: style.loader
  }));
};
export default Loader;