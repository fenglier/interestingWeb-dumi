---
title: 抽屉
order: 15
---

# 抽屉组件 (Drawer)

一个使用 `react.createPortal` 实现的抽屉组件，支持上下左右四个方向的定位。

## 特性

- ✨ 支持四个方向定位：`left`、`right`、`top`、`bottom`
- 🎯 使用 `react.createPortal` 渲染到 `body` 下，避免层级问题
- 🎨 平滑的过渡动画
- 🛡️ 可点击遮罩层关闭
- 📏 自定义抽屉大小和动画时长
- 💻 TypeScript 支持
- 🎭 自定义样式类名支持

## 使用场景

用于应用的侧边栏打开，如左右侧菜单栏。同时支持顶部抽屉（如通知中心）和底部抽屉（如底部导航）等场景。

## 代码演示

### 基本使用

```tsx
import { useState } from 'react';
import Drawer from '@/effects/Drawer';

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>打开右侧抽屉</button>

      <Drawer
        open={open}
        position="right"
        size={320}
        closable
        onClose={() => setOpen(false)}
      >
        <div>
          <h2>抽屉标题</h2>
          <p>这是抽屉内容</p>
          <button onClick={() => setOpen(false)}>关闭</button>
        </div>
      </Drawer>
    </div>
  );
};

export default DrawerDemo;
```

### 四个方向的使用示例

```tsx
import { useState } from 'react';
import Drawer from '@/effects/Drawer';

const FullDemo = () => {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);
  const [topOpen, setTopOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setLeftOpen(true)}>左侧抽屉</button>
        <button onClick={() => setRightOpen(true)}>右侧抽屉</button>
        <button onClick={() => setTopOpen(true)}>顶部抽屉</button>
        <button onClick={() => setBottomOpen(true)}>底部抽屉</button>
      </div>

      {/* 左侧抽屉 */}
      <Drawer
        open={leftOpen}
        position="left"
        size={300}
        onClose={() => setLeftOpen(false)}
      >
        <div>
          <h2>左侧抽屉</h2>
          <p>这是从左侧滑出的抽屉内容</p>
          <button onClick={() => setLeftOpen(false)}>关闭</button>
        </div>
      </Drawer>

      {/* 右侧抽屉 */}
      <Drawer
        open={rightOpen}
        position="right"
        size={400}
        duration={500}
        onClose={() => setRightOpen(false)}
      >
        <div>
          <h2>右侧抽屉</h2>
          <p>这是从右侧滑出的抽屉内容</p>
          <button onClick={() => setRightOpen(false)}>关闭</button>
        </div>
      </Drawer>

      {/* 顶部抽屉 */}
      <Drawer
        open={topOpen}
        position="top"
        size={200}
        onClose={() => setTopOpen(false)}
      >
        <div>
          <h2>顶部抽屉</h2>
          <p>这是从顶部滑出的抽屉内容</p>
          <button onClick={() => setTopOpen(false)}>关闭</button>
        </div>
      </Drawer>

      {/* 底部抽屉 */}
      <Drawer
        open={bottomOpen}
        position="bottom"
        size={250}
        onClose={() => setBottomOpen(false)}
      >
        <div>
          <h2>底部抽屉</h2>
          <p>这是从底部滑出的抽屉内容</p>
          <button onClick={() => setBottomOpen(false)}>关闭</button>
        </div>
      </Drawer>
    </div>
  );
};

export default FullDemo;
```

## API

### Props

| 属性        | 类型                                     | 默认值    | 说明                                   |
| ----------- | ---------------------------------------- | --------- | -------------------------------------- |
| open        | boolean                                  | -         | 抽屉是否打开                           |
| position    | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 抽屉位置                               |
| children    | ReactNode                                | -         | 抽屉内容                               |
| closable    | boolean                                  | true      | 点击遮罩层是否关闭抽屉                 |
| onClose     | ()=>void                                 | ()=>{}    | 点击关闭的回调函数                     |
| size        | `number \| string`                       | 320       | 抽屉宽度（左右方向）或高度（上下方向） |
| duration    | number                                   | 300       | 抽屉过渡动画时长（毫秒）               |
| maskClass   | string                                   | -         | 自定义遮罩层样式类名                   |
| drawerClass | string                                   | -         | 自定义抽屉内容样式类名                 |

## 原理

抽屉组件使用 `transform: translateX/Y` 来实现滑动效果：

- 隐藏时：`transform: translateX(100%)` 或 `transform: translateX(-100%)`
- 显示时：`transform: translateX(0)`
- 结合 `transition: transform` 实现平滑的过渡动画

使用 `react.createPortal` 将抽屉内容渲染到 `body` 下，确保抽屉的层级不会被父级元素影响，同时避免样式污染。
