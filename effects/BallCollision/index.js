/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-16 10:19:44
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useEffect, useRef } from 'react';
var BallCollision = function BallCollision() {
  var canvasRef = useRef(null);
  useEffect(function () {
    var canvas = canvasRef.current;
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 400;
    var BALL_COUNT = 10;
    var BALL_RADIUS = 20;
    var balls = [];

    // 初始化小球
    for (var i = 0; i < BALL_COUNT; i++) {
      balls.push({
        x: Math.random() * (canvas.width - 2 * BALL_RADIUS) + BALL_RADIUS,
        y: Math.random() * (canvas.height - 2 * BALL_RADIUS) + BALL_RADIUS,
        vx: Math.random() * 4,
        vy: Math.random() * 4,
        radius: BALL_RADIUS,
        color: "hsl(".concat(Math.random() * 360, ", 70%, 60%)")
      });
    }
    var distance = function distance(b1, b2) {
      return Math.hypot(b1.x - b2.x, b1.y - b2.y);
    };
    var resolveCollision = function resolveCollision(b1, b2) {
      // 简化：交换速度
      var tempVx = b1.vx;
      var tempVy = b1.vy;
      b1.vx = b2.vx;
      b1.vy = b2.vy;
      b2.vx = tempVx;
      b2.vy = tempVy;
    };
    var update = function update() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 遍历小球
      balls.forEach(function (b, i) {
        // 更新位置
        b.x += b.vx;
        b.y += b.vy;

        // 边界反弹
        if (b.x - b.radius <= 0 || b.x + b.radius >= canvas.width) b.vx *= -1;
        if (b.y - b.radius <= 0 || b.y + b.radius >= canvas.height) b.vy *= -1;

        // 与其他球检测碰撞
        for (var j = i + 1; j < balls.length; j++) {
          var other = balls[j];
          var d = distance(b, other);
          if (d < b.radius + other.radius) {
            resolveCollision(b, other);
          }
        }

        // 画球
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = b.color;
        ctx.fill();
        ctx.closePath();
      });
      requestAnimationFrame(update);
    };
    update();
  }, []);
  return /*#__PURE__*/React.createElement("canvas", {
    ref: canvasRef,
    style: {
      border: '0.1rem solid var(--color-bg-secondary)'
    }
  });
};
export default BallCollision;