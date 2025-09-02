---
title: 两端对齐
order: 4
---

```tsx
import style from "./MiddleAdapt.module.scss";
const MiddleAdapt = () => {
  return (
    <>
      <h2>左侧固定，右侧固定，中间自适应（float实现）</h2>
      <div className={style.BFC8}>
        <div className={style.left2}>左侧固定</div>
        <div className={style.right2}>右侧固定</div>
        <div className={style.middle}>中间自适应</div>
      </div>
      <h2>左侧固定，右侧固定，中间自适应（flex实现）</h2>
      <div className={style.BFC9}>
        <div className={style.itemLeft}>左侧固定</div>
        <div className={style.itemMiddle}>中间自适应</div>
        <div className={style.itemRight}>右侧固定</div>
      </div>
    </>
  );
};

export default MiddleAdapt;
```

```scss
.BFC8 {
  background-color: var(--color-bg);
  overflow: hidden;
  border: var(--color-border) dashed 1px;
}

.left2 {
  float: left;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.right2 {
  float: right;
  height: 200px;
  width: 150px;
  background-color: var(--color-primary);
}

.middle {
  margin-left: 150px;
  margin-right: 150px;
  height: 200px;
  background-color: var(--color-secondary);
}

.BFC9 {
  background-color: var(--color-bg);
  display: flex;
  border: var(--color-bg) dashed 1px;
}

.itemLeft {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}
.itemMiddle {
  background-color: var(--color-secondary);
  height: 200px;

  flex: auto;
}
.itemRight {
  background-color: var(--color-primary);
  height: 200px;
  width: 150px;
}

```
