---
title: 组件
order: 1 <!-- order 越小越靠前，默认为 0 -->
---


# 轮播图

这是一个简单的轮播图组件，用于展示多个项目。它支持自动轮播、左右切换等功能。

<div>
  采用“克隆首尾元素 + translateX + transition”的方式<br/> 
  **核心思路**
  <ol>
    <li>
      添加首尾克隆元素：
      <ul>
        <li>比如轮播内容是 [A, B, C]，那么实际渲染内容为 [C, A, B, C, A]。</li>
        <li>初始展示的是索引 1 的位置（也就是真实的 A）。</li>
        <li>
          当你向左滑动到C（索引0）
          或向右滑动到A（索引4）时，等动画结束后立即跳转到对应的真实位置
          C（索引3） 或 A（索引1），无过渡跳转。
        </li>
      </ul>
    </li>
    <li>
      使用 translateX + transition
      实现过渡，在过渡结束后执行无动画的跳转，保证用户感知不到跳动。
    </li>
  </ol>
</div>

---

<code src="../demos/CarouselDemo.tsx"></code>


<code src="../demos/AnimationCarouselDemo.tsx"></code>