---
title: 树形组件
order: 4
group: 数据录入
demo:
  cols: 2
---


## 使用场景



## 代码演示

```tsx
/**
 * title: 基础使用
 * description:
 */
import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
    />
  );
};
export default TreeDemo;
```

```tsx
/**
 * title: 展开节点
 * description: 设置节点的expand
 */
import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      expand: true,
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          expand: false,
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
    />
  );
};
export default TreeDemo;
```

```tsx
/**
 * title: 设置默认选择
 * description: 通过Tree的checked属性设置
 */
import { Tree } from 'interestingWeb';
import React from 'react';
const TreeDemo = () => {
  const data = [
    {
      label: 'Parent 1',
      value: '1',
      expand: true,
      children: [
        {
          label: 'Child 1-1',
          value: '1-1',
          expand: false,
          children: [
            { label: 'Grandchild 1-1-1', value: '1-1-1' },
            { label: 'Grandchild 1-1-2', value: '1-1-2' },
          ],
        },
        { label: 'Child 1-2', value: '1-2' },
      ],
    },
    {
      label: 'Parent 2',
      value: '2',
      children: [
        { label: 'Child 2-1', value: '2-1' },
        { label: 'Child 2-2', value: '2-2' },
      ],
    },
  ];
  const checked = ['Child 1-1'];
  return (
    <Tree
      data={data}
      onChange={(checkNode, currentTree) => {
        console.log(checkNode);
        console.log(currentTree);
      }}
      checked={checked}
    />
  );
};
export default TreeDemo;
```

## API

| 参数     | 说明                                                                                             | 类型                                          | 默认值 |
| -------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------- | ------ |
| data     | 数据源                                                                                           | Array<{labe:string,value:string,children:[]}> | -      |
| onChange | 点击选中节点时的回调                                                                             | (checkNode, currentTree) => void              | -      |
| selected | 设置节点的选中状态。如果父节点被选中，子节点部分选中，则子节点的选中设置无效，子节点会被全部选择 | -                                             | -      |
| expand   | 设置展开的节点                                                                                   |                                               |        |

### treeNode 节点

对节点的操作有选中、展开、禁用。有两种方式来设置，一种是直接在 treeData 的每个节点进行设置，但此时要保证子节点和父节点都设置正确。例如设置自己点为全选，父节点并不会自动设置选择；第二种方式是，通过 tree 的属性来设置

| 参数   | 说明             | 类型                           | 默认值 |
| ------ | ---------------- | ------------------------------ | ------ |
| expand | 节点是否默认展开 | boolean                        | false  |
| label  | 节点展示标签     | string                         | -      |
| value  | 节点值           | string                         | -      |
| id     | 节点 id       | -                              | 默认是label的值    |
| check  | 节点选中类型     | 0: 未选择，1：全选，2 表示半选 | -      |

## 实现原理
