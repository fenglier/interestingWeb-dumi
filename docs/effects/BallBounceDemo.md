---
title: 小球左右弹跳
order: 8
---

## 使用场景

## 代码演示

```tsx
import React from 'react';
import { BallBounce } from 'interestingWeb';

const BallBounceDemo = () => {
  return <BallBounce />;
};
export default BallBounceDemo;
```

## 原理

clientWidth 是一个 DOM 元素的属性，它返回的是：dom 元素可视内容区域的宽度，不包括边框（border）、滚动条（scrollbar）、外边距（margin），但包括内边距（padding）

> css 中 translateX 和 left 的区别
>
> 1. left 是定位属性，会改变元素的布局位置；
> 2. translateX 是变换属性，不影响布局，只是“视觉上的移动”。
