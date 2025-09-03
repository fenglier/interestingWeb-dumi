---
title: 吃豆人
order: 5
---

## 使用场景

常用于装饰、加载动画、视觉趣味等

## 代码演示

```tsx
import React from 'react';
import { Pacman } from 'interestingWeb';
const PacmanDemo = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '10rem',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      <Pacman />
    </div>
  );
};
export default PacmanDemo;
```

## 原理

> 关键点是 border-right:transparent 形成 2 个扇形，然后旋转它们，形成张闭嘴的效果；使用::before 伪元素形成眼睛；豆子靠近嘴巴消失。

> 无法直接用 CSS 让 absolute 子元素参与父元素尺寸计算
> 这是浏览器排版规则决定的，纯 CSS 无法让脱离文档流的子元素自然撑开父容器。
