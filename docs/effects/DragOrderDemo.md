---
title: 拖动排序
order: 9
---

## 代码演示

```tsx
/**
 * transform: true
 */
import React from 'react';
import { DragOrder } from 'interestingWeb';

const DragOrderDemo = () => {
  return <DragOrder />;
};

export default DragOrderDemo;
```

## 原理

实现思路概览：
鼠标按下某项，记录当前索引;生成一个 visibiligy =hidden,opacity = 0 的元素进行站位。 创建一个 clone 的元素（fixed 定位）跟随鼠标移动

拖动过程中不断获取鼠标横坐标；

判断鼠标在哪个菜单项中间线之前，动态调整数组顺序；相应的修改没有元素的位置，当前被拖动的元素前面的元素，如果中间线大于鼠标，后移一个元素位置；当前被拖动的元素后面的元素，如果中间线小于鼠标，前移动一个位置（视觉上移动就行）。

鼠标释放，移除监听器，完成拖动。判断 clone 元素以及之前的菜单项的视口位置（不含隐藏元素），从而获取到排序后的元素顺序。
