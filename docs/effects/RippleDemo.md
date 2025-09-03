---
title: 水波纹 Ripple
order: 11
---

## 代码演示

```tsx
import React from 'react';
import { Ripple } from 'interestingWeb';

const RippleDemo = () => {
  return (
    <Ripple>
      <div
        style={{
          width: '5rem',
          height: '5rem',
          backgroundColor: 'var(--color-bg-primary)',
        }}
      ></div>
    </Ripple>
  );
};
export default RippleDemo;
```

## 原理

它是一种非常常见的用户交互反馈动画。实现原理如下：

1. 用户点击按钮，记录点击位置（相对于按钮的位置）。通过 event.clientX/clientY 获取点击点的坐标
2. 在该位置创建一个圆形元素（div），并设置初始样式。
3. 用 CSS 动画（transform: scale(...) + opacity）来让它从小变大+渐隐。
4. 动画结束后移除该元素。
