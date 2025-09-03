/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-11 16:53:10
 * @lastEditors: fengli
 * @lastEditTime:
 */
import style from "./index.module.scss";
import React from "react";
var Steps = function Steps(_ref) {
  var items = _ref.items,
    current = _ref.current;
  var st = items.map(function (i, index) {
    if (index < current) {
      // finish
      return /*#__PURE__*/React.createElement("div", {
        className: style.item
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(style.icon, " ").concat(style.iconFinish)
      }, index + 1), /*#__PURE__*/React.createElement("div", {
        className: "".concat(style.content, " ").concat(style.finish)
      }, i.title));
    } else if (index == current) {
      // active
      return /*#__PURE__*/React.createElement("div", {
        className: style.item
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          position: "relative"
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(style.icon, " ").concat(style.iconActive)
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(style.icon)
      }, index + 1)), /*#__PURE__*/React.createElement("div", {
        className: "".concat(style.content, " ").concat(style.active)
      }, i.title));
    } else {
      // wait
      return /*#__PURE__*/React.createElement("div", {
        className: style.item
      }, /*#__PURE__*/React.createElement("div", {
        className: style.icon
      }, index + 1), /*#__PURE__*/React.createElement("div", {
        className: style.content
      }, i.title));
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, st);
};
export default Steps;