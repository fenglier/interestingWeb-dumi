---
title: 步骤条
order: 5 
group: 数据展示
---
# 使用场景

## 代码演示

```tsx
import {Steps} from "interestingWeb";
import React from 'react';

const StepsDemo = () => {
  const current = 1;
  const steps = [
    {
      title: "First",
      content: "First-content",
    },
    {
      title: "Second",
      content: "Second-content",
    },
    {
      title: "Last",
      content: "Last-content",
    },
  ];
  return <Steps current={current} items={steps} />;
};

export default StepsDemo
```

## API
参数|说明|类型|默认值
---|---|---|---|
current|已执行完哪个步骤|number|-
items|-|{title:string}[]|-

## 原理

结合flex布局和伪元素::after实现
