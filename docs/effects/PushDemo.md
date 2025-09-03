---
title: 推开
order: 3
---

## 使用场景

## 代码演示

```tsx
import React from 'react';
import { Push } from 'interestingWeb';

const PushDemo = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;
  const items = [
    { key: '1', exist: 'header 1', expander: <p>{text}</p> },
    {
      key: '2',
      exist: 'header 2',
      expander: <p>{text}</p>,
    },
    {
      key: '3',
      exist: 'header 3',
      expander: <p>{text}</p>,
    },
  ];
  return (
    <div style={{ height: '5rem' }}>
      <Push
        items={items}
        defaultActive={2}
        onChange={(id) => {
          console.log(id);
        }}
      />
    </div>
  );
};

export default PushDemo
```

## 原理

推开效果，即一个元素的尺寸变化，推开另外一个元素。在折叠面板、侧边栏展开、评论/回复框展开中常用到。

> 难点是如何推开其它元素。可以使用 CSS height, margin, padding, 让盒子的高度从 0 开始变得，再使用 transition 控制过渡效果

> 需要和覆盖（Overlay）效果相区别，元素是浮在其它元素上面，不影响其他内容。
