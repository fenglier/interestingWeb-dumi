---
title: 小球自由落体
order: 6
---

## 使用场景

## 代码演示

```tsx
import React from 'react';
import { BallFreeDown } from 'interestingWeb';

const BallFreeDownDemo = () => {
  return <BallFreeDown />;
};

export default BallFreeDownDemo;
```

## 原理

通过 e.clientX/Y 获取鼠标相对于**视口**位置，dom.getBoundingClientRect().top/left 获取 dom 元素相对于**视口**的位置。通过**el.style.top**控制小球拖动时的位置

为什么“useRef 获取 DOM 引用（不要每次都 document.getElementById）”

> 1.  避免跨组件、全局副作用污染
>     document.getElementById 是全局查找，如果你的页面上有多个同 ID 的元素（或多个组件都叫 ball），你很可能操作到了错误的元素。
> 2.  useRef 更高效，也更符合 React 思想
>     useRef 是 React 提供的方式，用于在组件中获取并持久保存某个 DOM 元素的引用，而不是每次都重新查找。
