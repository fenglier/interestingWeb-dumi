/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-12 16:01:56
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React from "react";
import style from "./index.module.scss";
var Pacman = function Pacman() {
  return /*#__PURE__*/React.createElement("div", {
    className: style.pacMan
  }, /*#__PURE__*/React.createElement("div", {
    className: style.eyeCenter
  }, /*#__PURE__*/React.createElement("div", {
    className: style.eye
  })), /*#__PURE__*/React.createElement("div", {
    className: style.mouth1
  }), /*#__PURE__*/React.createElement("div", {
    className: style.mouth2
  }), /*#__PURE__*/React.createElement("div", {
    className: style.bean1
  }), /*#__PURE__*/React.createElement("div", {
    className: style.bean2
  }));
};
export default Pacman;