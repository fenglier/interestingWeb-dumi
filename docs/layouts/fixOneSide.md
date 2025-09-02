---
title: 一侧固定
order: 3
---

```tsx
import style from './FixOneSide.module.scss';
const fixOneSide = () => {
  return (
    <>
      <h2>左侧固定，右侧自适应（flex实现）</h2>
      <div className={style.BFC5}>
        <div className={style.fixLeft}>左侧固定</div>
        <div className={style.autoAdapt}>右侧自适应</div>
      </div>
      <h2>右侧固定，左侧自适应（float实现）</h2>
      <div className={style.BFC6}>
        <div className={style.rightFloat}>右侧固定</div>
        <div className={style.autoLeft}>左侧自适应</div>
      </div>
      <h2>左侧固定，右侧自适应（float实现）</h2>
      <div className={style.BFC7}>
        <div className={style.leftFloat}>左侧固定</div>
        <div className={style.autoRight}>右侧自适应</div>
      </div>
    </>
  );
};
export default fixOneSide
```

```scss
.BFC5 {
  display: flex;
  align-items: flex-start;
  height: 200px;
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
}
.fixLeft {
  width: 20%;
  height: 100%;
  background-color: var(--color-primary);
}

.autoAdapt {
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-secondary);
}

.BFC6 {
  background-color: var(--color-bg);
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.rightFloat {
  float: right;
  height: 200px;
  color: var(--color-text);
  background-color: var(--color-primary);
  width: 200px;
}

.autoLeft {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}

.BFC7 {
  background-color: bisque;
  border: var(--color-border) dashed 1px;
  width: 100%;
  overflow: hidden;
}

.leftFloat {
  float: left;
  height: 200px;
  width: 150px;
  color: var(--color-text);
  background-color: var(--color-primary);
}

.autoRight {
  overflow: hidden;
  background-color: var(--color-secondary);
  height: 200px;
}
```
