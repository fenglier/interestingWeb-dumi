/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-16 11:34:37
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef } from 'react';
import style from "./index.module.scss";
var Trail = function Trail() {
  var containerRef = useRef(null);
  var moveHandle = function moveHandle(e) {
    if (!containerRef.current) return;
    var container = containerRef.current.getBoundingClientRect();
    var trail = document.createElement('div');
    trail.className = style.trail;
    trail.style.left = "".concat(e.clientX - container.left, "px");
    trail.style.top = "".concat(e.clientY - container.top, "px");
    trail.style.transform = 'translate(-50%,-50%)';
    containerRef.current.appendChild(trail);

    // 0.5秒后移除这个小元素
    setTimeout(function () {
      trail.remove();
    }, 500);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: style.container,
    onMouseMove: moveHandle,
    ref: containerRef
  });
};
export default Trail;