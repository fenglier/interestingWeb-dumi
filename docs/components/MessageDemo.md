---
title: 未读消息
order: 6
demo:
  cols: 2
---


## 使用场景

显示未读信息。

## 代码演示

```tsx
import { Message } from 'interestingWeb';
import React from 'react';
const MessageDemo = () => {
  return (
    <>
      <Message />
      <Message count={99} />
    </>
  );
};
export default MessageDemo;
```

## API

| 参数  | 说明             | 类型   | 默认值 |
| ----- | ---------------- | ------ | ------ |
| count | 显示未读信息数量。没有这个参数就单纯提示有未读信息 | number | -      |

## 实现原理

使用伪元素::after ,'position:absolute'和 left、top 实现、

1. ::after 插入的位置是内容（content）的最后面，就像你在元素末尾加了一段文字；
2. 它的渲染位置仍在 content 区域之内；
