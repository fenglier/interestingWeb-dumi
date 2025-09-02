---
title: 树形组件
order: 4 
---

采用HashMap和树的嵌套对象实现

```tsx
import Tree from "@/components/Tree/index.tsx";
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
