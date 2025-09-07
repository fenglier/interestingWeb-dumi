---
title: 瀑布流
order: 2
---

## 瀑布流

适用于内容尺寸不一样时，提升信息密度。

## 代码演示
<code src="../demos/WaterFall.tsx"></code>

## API

方法|说明|类型|
---|---|---
getData|获取瀑布流数据|(page: number) => Promise<CardType[]>。page是第几页的意思，CardType { auhtor: string; title: string;id: string;  width: number;  height: number;  left: number;  top: number;  like: number;}|

## 原理

使用 Masonry算法，没渲染一张卡片就要重新判断哪一列最短，然后把Card插入到该列下方。left top 实现瀑布流，通过获取真实 dom，确定 left 和 top

