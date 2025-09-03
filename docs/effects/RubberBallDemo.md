---
title: 橡皮筋拉伸
order: 12
---

## 代码演示

```tsx
import React from 'react';
import { RubberBall } from 'interestingWeb';

const RubberBallDemo = () => {
  return <RubberBall />;
};

export default RubberBallDemo;
```

## 原理

“橡皮筋拉伸”动画常用于模拟具有弹性阻尼的物体拉伸与回弹，比如拖拽一个小球时，它像橡皮筋一样被拉长、松开后回弹。

> 1.  **scaleX(...)**：模拟橡皮筋的横向变形，1 + 拉伸距离 / 系数
> 2.  cubic-bezier(...)：实现弹性回弹效果的关键
> 3.  可根据拉伸长度动态控制 scale 值，模拟更强的弹力
