---
title: 抖动
order: 2
---

## 使用场景

抖动效果常**引起用户注意或提示错误**，是“负反馈”的常见表现

## 代码演示

```tsx
import React from 'react';
import { Message, MessageWithCount, Shake } from 'interestingWeb';
const ShakeDemo = () => {
  return (
    <>
      <Shake>
        <Message />
      </Shake>
      <Shake>
        <MessageWithCount count={100} />
      </Shake>
    </>
  );
};
export default ShakeDemo;
```

## 实现原理

它是使用 translate 和 transform 实现的。

```scss
@keyframes shake {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0);
  }
}
```
