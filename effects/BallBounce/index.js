/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-15 14:54:54
 * @lastEditors: fengli
 * @lastEditTime:
 */

import style from "./index.module.scss";
import React, { useEffect, useRef } from 'react';
var BallBounce = function BallBounce() {
  var ballRef = useRef(null);
  var containerRef = useRef(null);
  useEffect(function () {
    if (!ballRef.current || !containerRef.current) return;
    var ball = ballRef.current;
    var container = containerRef.current;
    var x = 0;
    var vx = 2; // 初始速度
    var ballWidth = ball.getBoundingClientRect().width;
    var animate = function animate() {
      x += vx;
      var maxX = container.clientWidth - ballWidth;
      if (x <= 0 || x >= maxX) {
        vx = -vx; // 反弹
      }
      ball.style.transform = "translate(".concat(x, "px,-50%)");
      requestAnimationFrame(animate);
    };
    animate();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: style.container,
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    className: style.ball,
    ref: ballRef
  }));
};
export default BallBounce;