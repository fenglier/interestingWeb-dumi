---
title: 小球碰撞
order: 7
---

## 使用场景

## 代码演示

```tsx
import React from 'react';
import { BallCollision } from 'interestingWeb';

const BallCollisionDemo = () => {
  return <BallCollision />;
};

export default BallCollisionDemo;
```

## 原理

多球碰撞（2D）动画效果

1. 每个球具有状态：位置（x, y）、速度（vx, vy）、半径、颜色等
2. 更新位置：每一帧根据速度更新球的位置
3. 边界反弹：如果球撞到容器边缘，反弹（反转速度方向）
4. 球与球碰撞检测：如果两个球相交，则处理碰撞响应（交换速度或反弹方向）

> Canvas 和 DOM 元素（如 div）在动画处理上各有优劣。
>
> 1. Canvas 更适合大量元素的高频动画。Canvas 是基于像素绘制的位图渲染，每一帧是重画整个画面。相比之下，DOM 是基于节点的，每个小球一个 div，浏览器需要频繁地：重排（reflow）、重绘（repaint）、处理复杂的 DOM 结构
> 2. 精细控制绘图和物理行为。
> 3. 避免过多 DOM 操作导致性能瓶颈。DOM 操作属于昂贵操作，尤其是当涉及成百上千个节点时。Canvas 只管理一个 canvas 元素，所有更新都是在显存中完成的。

| 场景                         | 更合适的技术   |
| ---------------------------- | -------------- |
| 网页布局、可访问性好、易交互 | DOM + CSS + JS |
| 游戏、图形模拟器、粒子系统   | Canvas / WebGL |
