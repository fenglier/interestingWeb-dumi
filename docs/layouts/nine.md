---
title: 九宫格布局
order: 2 <!-- order 越小越靠前，默认为 0 -->
---

使用flex布局，设置每个子元素的width为33%

```tsx
import React from 'react';

import style from "./NineLayout.module.scss";
const NineLayout = () => {
  return (
    <div className={style.flex} >
      <div className={style.item}>1</div>
      <div className={style.item}>2</div>
      <div className={style.item}>3</div>
      <div className={style.item}>4</div>
      <div className={style.item}>5</div>
      <div className={style.item}>6</div>
      <div className={style.item}>7</div>
      <div className={style.item}>8</div>
      {/*  <div className="item">9</div> */}
    </div>
  );
};
export default NineLayout;
```

```scss
.flex {
  display: flex;
  /*  height: 30rem; */
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  /*   background-color: var(--color-bg); */
  flex-wrap: wrap;
  gap: 0.5%;
  border: var(--color-border) dashed 1px;
}
.item {
  width: 33%;
  aspect-ratio: 1 / 1;
  border: var(--color-border) dashed 1px;
  background-color: var(--color-bg-primary);
}
```