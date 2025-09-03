---
title: 树形组件
order: 4 
---

## 树形组件

## 使用场景

TODO

## 代码演示

```tsx
import {Tree} from "interestingWeb";
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: "Parent 1",
      value: "1",
      children: [
        {
          label: "Child 1-1",
          value: "1-1",
          children: [
            { label: "Grandchild 1-1-1", value: "1-1-1" },
            { label: "Grandchild 1-1-2", value: "1-1-2" },
          ],
        },
        { label: "Child 1-2", value: "1-2" },
      ],
    },
    {
      label: "Parent 2",
      value: "2",
      children: [
        { label: "Child 2-1", value: "2-1" },
        { label: "Child 2-2", value: "2-2" },
      ],
    },
  ];
  return (
    <Tree
      data={data}
      onChange={(checkNode,currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
    />
  );
};
export default TreeDemo
```

## API

参数|说明|类型|默认值
---|---|---|---
data|数据源| Arrary|-
onChange|点击选中节点时的回调| (checkNode: { expand?: boolean;  check: NodeCheckState;  label: string;  value: string;  id: string;  parent: string;  children?: InnerTreeNode[];}, currentTree: InnerTreeNode[]) => void|-


## 实现原理
