---
title: 页面栈
order: 2
---

传统的路由导航在返回时，父页面的状态会丢失。为了解决这个问题，使用了**页面栈**（pageStack）的方式。页面的切换是通过 css 控制页面的显示和隐藏解决的。也就是说：所有页面都挂载在 DOM 里，只通过 display: none 或 visibility 切换。
