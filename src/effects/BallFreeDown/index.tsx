/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-15 11:02:54
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useEffect, useRef } from 'react';
import style from './index.module.scss';
const BallFreeDown = () => {
  let isDragging = false;
  let offsetY: number;
  let y = 0; // 当前高度
  let vy = 0; // 当前速度
  let gravity = 0.5; // 重力加速度
  let bounce = 0.7; // 反弹系数
  let ground = 200; // 地面位置（可调整）

  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);
  const startAnimation = () => {
    if (!ballRef.current) return;

    function animate() {
      vy += gravity; // 加速度叠加速度
      y += vy; // 速度叠加位置

      // 到达底部 -> 反弹
      if (y >= ground) {
        y = ground;
        vy = -vy * bounce; // 向上反弹 + 能量衰减

        // 如果速度很小了，就停止动画
        if (Math.abs(vy) < 1) return;
      }

      if (ballRef.current) {
        ballRef.current.style.top = y + 'px';
      }

      requestAnimationFrame(animate);
    }

    animate();
  };
  useEffect(() => {
    startAnimation();
  }, []);

  // 👇 左键拖动小球
  const mouseDownHandle = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button === 0) {
      if (!ballRef.current) return;
      // 左键
      isDragging = true;
      vy = 0; // 暂停掉落速度
      const rect = ballRef.current.getBoundingClientRect();
      // NOTE: 正表示在圆心下方，负表示在圆心上方
      offsetY = e.clientY - rect.top - rect.height / 2;
      ballRef.current.style.cursor = 'grabbing';

      // ✅ 添加全局监听器
      window.addEventListener('mousemove', windowMouseMoveHandle);
      window.addEventListener('mouseup', windowMouseUpHandle);
    }
  };

  // Handler for React events (for the ball itself)
  const mouseMoveHandle = (e: React.MouseEvent<HTMLDivElement>): any => {
    // No-op for React event, actual drag logic handled by native event below
  };

  const mouseUpHandle = (e: React.MouseEvent<HTMLDivElement>): any => {
    // No-op for React event, actual drag logic handled by native event below
  };

  // Handler for native window events
  const windowMouseMoveHandle = (e: MouseEvent): void => {
    if (isDragging) {
      if (!ballRef.current || !containerRef.current || !groundRef.current)
        return;
      const rect = ballRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const groundRect = groundRef.current?.getBoundingClientRect();
      if (e.clientY - (rect.height / 2 + offsetY) < containerRect.top) {
        y = 0;
        isDragging = false;
      } else if (e.clientY + (rect.height / 2 - offsetY) > groundRect.top) {
        isDragging = false;
      } else {
        const yInContainer =
          e.clientY - containerRect.top - offsetY - rect.height / 2;
        y = yInContainer;
      }
      ballRef.current.style.top = `${y}px`;
    }
  };

  const windowMouseUpHandle = (e: MouseEvent): void => {
    if (e.button === 0) {
      if (!ballRef.current) return;
      isDragging = false;
      ballRef.current.style.cursor = 'grab';
      vy = 0;

      // ✅ 移除全局监听器，避免内存泄漏
      window.removeEventListener('mousemove', windowMouseMoveHandle);
      window.removeEventListener('mouseup', windowMouseUpHandle);

      startAnimation();
    }
  };
  return (
    <>
      <div ref={containerRef} className={style.container} id="container">
        <div
          ref={ballRef}
          id="ball"
          onMouseMove={mouseMoveHandle}
          onMouseUp={mouseUpHandle}
          onMouseDown={mouseDownHandle}
          className={style.ball}
          onClick={startAnimation}
        ></div>
        <div id="ground" ref={groundRef} className={style.ground}></div>
      </div>
    </>
  );
};

export default BallFreeDown;
