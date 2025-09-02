/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-15 16:15:39
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useEffect, useRef } from 'react';
import style from "./index.module.scss";

/* 移动方向 */
var Direction = /*#__PURE__*/function (Direction) {
  Direction["left"] = "left";
  Direction["right"] = "right";
  Direction["static"] = "static";
  return Direction;
}(Direction || {});
var InertiaBall = function InertiaBall() {
  var ballRef = useRef(null);
  var containerRef = useRef(null);
  var isDragging = false;
  var startX = 0;
  var currentX = 0;
  var lastX = 0;
  var velocity = 0;
  var animationFrame;
  // 小球惯性运动的时候是否碰撞到边界
  var direction;
  var hitBorder = false;
  var friction = 0.98;
  var onMouseDown = function onMouseDown(e) {
    isDragging = true;
    startX = e.clientX;
    lastX = e.clientX;
    cancelAnimationFrame(animationFrame);
  };
  var onMouseMove = function onMouseMove(e) {
    if (!ballRef.current || !containerRef.current) return;
    if (!isDragging) return;

    // 拖动边界
    var dx = e.clientX - startX;
    var container = containerRef.current.getBoundingClientRect();
    var ball = ballRef.current.getBoundingClientRect();
    if (dx > 0) {
      direction = Direction.right;
      if (container.right - ball.right < 0) {
        dx = 0;
      }
    } else {
      direction = Direction.left;
      if (ball.left - container.left < 0) {
        dx = 0;
      }
    }
    currentX += dx;
    ballRef.current.style.transform = "translate(".concat(currentX, "px,-50%)");
    velocity = e.clientX - lastX;
    lastX = e.clientX;
    startX = e.clientX;
  };
  var onMouseUp = function onMouseUp() {
    isDragging = false;
    inertia();
  };
  var inertia = function inertia() {
    if (!ballRef.current || !containerRef.current) return;
    velocity *= friction;
    currentX += velocity;
    // 惯性移动边界
    var container = containerRef.current.getBoundingClientRect();
    var ball = ballRef.current.getBoundingClientRect();
    /* NOTE:请注意，getBoundingClientRect的left和right是元素左/右边缘到视口左侧的距离。不要和css中那个left，right混淆，它是相对于父容器的坐边缘和右边缘的距离 */
    if (direction === Direction.right) {
      // 向右移动判断右边界
      if (container.right - ball.right < 0) {
        currentX = currentX - -(container.right - ball.right);
        hitBorder = true;
        direction = Direction.left;
        velocity = -velocity;
      }
    } else if (direction === Direction.left) {
      // 向左移动判断左边界
      if (ball.left - container.left < 0) {
        currentX = currentX - (ball.left - container.left);
        hitBorder = true;
        direction = Direction.right;
        velocity = -velocity;
      }
    }
    ballRef.current.style.transform = "translate(".concat(currentX, "px,-50%)");
    if (Math.abs(velocity) > 0.1) {
      animationFrame = requestAnimationFrame(inertia);
    } else {
      hitBorder = false;
      direction = Direction.static;
    }
  };
  useEffect(function () {
    if (!ballRef.current) return;
    var ball = ballRef.current;
    ball.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return function () {
      ball.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: style.container,
    ref: containerRef
  }, /*#__PURE__*/React.createElement("div", {
    ref: ballRef,
    className: style.ball
  }));
};
export default InertiaBall;