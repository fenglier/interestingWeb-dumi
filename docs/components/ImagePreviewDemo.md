---
title: 图片预览
order: 7
---

## 使用场景
需要显示图片时使用

## 代码演示

```tsx
import { ImagePreview } from 'interestingWeb';
import React from 'react';

const ImagePreviewDemo = () => {
  return (
    <>
      <ImagePreview
        width={300}
        height={300}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <ImagePreview
        width={300}
        height={300}
        src="https://images.pexels.com/photos/33668610/pexels-photo-33668610.jpeg"
      />
    </>
  );
};

export default ImagePreviewDemo;
```

## API

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| width  | 图片宽度 | number | -      |
| height | 图片高度 | number | -      |
| src    | 图片资源 | -      | -      |

## 原理

1. 以原图片为参照点放大（缩放原始位置）
2. 全屏预览时图片居中
3. 放大过程带动画
4. 背景遮罩 + 关闭按钮

<p>
实现方案：使用 CSS transform + transform-origin + transition + JavaScript 控制。关键点：记录原图的位置（getBoundingClientRect），把模态图设置为绝对定位，从原图位置开始，使用 transform: scale(...) + transform-origin 实现平滑放大。
</p>

<p>旋转的实现，是通过transform-origin: center center 设置选择中心，再在已有旋转的基础上顺时针和逆时针旋转</p>
