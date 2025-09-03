---
title: 鼠标尾迹
order: 14
---

## 代码演示

```tsx
import React from 'react';
import { Trail } from 'interestingWeb';

const TrailDemo = () => {
  return <Trail />;
};
export default TrailDemo;
```

## 原理

通过插入一个 position:absolute 的 div，添加一个淡出动画实现。
