---
title: 弹幕
order: 9
---

## 代码演示

```tsx
import React from 'react';
import { Barrage } from 'interestingWeb';
const BarrageDemo = () => {
  return <Barrage />;
};
export default BarrageDemo;
```

## 原理

弹幕系统（Barrage / Danmaku）是指：用户发送的评论文字以“漂浮字幕”的形式在屏幕上横向滚动。bilibili 的弹幕是一个个 div 元素，从右往左移动的。

1. 鼠标移动到弹幕上，显示点赞。js 通过 animationPlayState（running/pause）来控制动画状态。(暂停动画后，动画的 duration 和实际运行时长对不上了)
