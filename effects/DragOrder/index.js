function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * @Author: fengli
 * @Description: TODO:元素水平拖动改变位置
 * @Date: 2025-06-25 15:14:54
 * @lastEditors: fengli
 * @lastEditTime:
 */

import React, { useRef, useState } from 'react';
import styles from "./Menu.module.scss";

// 图片素材从lucide-react库中引入
import { Home, ShoppingCart, Tv, User } from 'lucide-react';
var initialItems = [{
  id: 'home',
  icon: /*#__PURE__*/React.createElement(Home, null),
  label: '首页'
}, {
  id: 'cart',
  icon: /*#__PURE__*/React.createElement(ShoppingCart, null),
  label: '购物车'
}, {
  id: 'me',
  icon: /*#__PURE__*/React.createElement(User, null),
  label: '我的'
}, {
  id: 'tv',
  icon: /*#__PURE__*/React.createElement(Tv, null),
  label: '视频'
}];
var offsetX = 0; // 鼠标点击时的偏移量
var offsetY = 0; // 鼠标点击时的偏移量

var BottomMenu = function BottomMenu() {
  var _useState = useState(initialItems),
    _useState2 = _slicedToArray(_useState, 2),
    items = _useState2[0],
    setItems = _useState2[1];
  var itemsRef = useRef(items);
  var dragIndexRef = useRef(null);
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    hoverIndex = _useState4[0],
    setHoverIndex = _useState4[1];
  var menuRef = useRef(null);
  var handleHover = function handleHover(index) {
    return function (e) {
      if (dragIndexRef.current !== null) return; // 如果正在拖动，禁止hover
      setHoverIndex(index);
    };
  };
  var handleMouseDown = function handleMouseDown(index) {
    return function (e) {
      dragIndexRef.current = index;
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      if (!menuRef.current) return;
      var children = Array.from(menuRef.current.children);
      var clonedElement = children[index].cloneNode(true);
      clonedElement.style.position = 'fixed';
      clonedElement.style.zIndex = '1000'; // 确保克隆元素在最上层
      var rect = children[index].getBoundingClientRect();
      var x = e.clientX;
      var y = e.clientY;
      console.log(rect.left, rect.top, rect.width, rect.height);
      offsetX = x - rect.left;
      offsetY = y - rect.top;

      // TODO:位置不对，似乎向右移动了一小段距离
      clonedElement.style.top = "".concat(children[index].offsetTop, "px");
      clonedElement.style.left = "".concat(children[index].offsetLeft, "px");
      menuRef.current.insertAdjacentElement('afterend', clonedElement);
      children[index].style.opacity = '0.2'; // 设置拖动时的透明度
      //children[index].style.visibility = "hidden"; // 隐藏原元素
    };
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (dragIndexRef.current === null || !menuRef.current) return;
    var draggingIndex = dragIndexRef.current;
    var children = Array.from(menuRef.current.children);
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var menuLeft = menuRef.current.getBoundingClientRect().left;

    // 克隆元素的位置
    var clonedElement = menuRef.current.nextSibling;
    if (clonedElement) {
      // TODO: 处理克隆元素的位置
      var dragHiddenRect = children[draggingIndex].getBoundingClientRect();
      clonedElement.style.transform = "translate(".concat(mouseX - offsetX - dragHiddenRect.left, "px,").concat(mouseY - offsetY - dragHiddenRect.top, "px)");
    }
    for (var i = 0; i < children.length; i++) {
      var rect = children[i].getBoundingClientRect();
      //const midX = rect.left + rect.width / 2;

      var midX = menuLeft + children[i].offsetLeft + rect.width / 2; // 元素的中线位置
      console.log('offsetLeft:', children[i].offsetLeft);
      if (i < draggingIndex) {
        // 如果是拖动元素的左边
        if (mouseX < midX) {
          // 和后面元素'交换'位置
          var nextRect = children[i + 1].getBoundingClientRect();
          var nextRectMidX = menuLeft + children[i + 1].offsetLeft + nextRect.width / 2;
          children[i].style.transform = "translateX(".concat(nextRectMidX - midX, "px)");

          /*           let temp = itemsRef.current[i];
          itemsRef.current[i] = itemsRef.current[i + 1];
          itemsRef.current[i + 1] = temp; */
        } else {
          children[i].style.transform = 'translateX(0px)'; // 恢复位置
        }
      }
      if (i > draggingIndex) {
        // 如果是拖动元素的右边。
        if (mouseX > midX) {
          console.log('mouseX:', mouseX, 'midX:', midX);
          // 和前面元素'交换'位置
          var prevRect = children[i - 1].getBoundingClientRect();
          var prevRectMidX = menuLeft + children[i - 1].offsetLeft + prevRect.width / 2;
          console.log('preRect.left:', prevRect.left, 'prevRect.width:', prevRect.width);
          console.log('prevRectMidX:', prevRectMidX);
          children[i].style.transform = "translateX(".concat(-(midX - prevRectMidX), "px)");
          /* 
          let temp = itemsRef.current[i];
          itemsRef.current[i] = itemsRef.current[i - 1];
          itemsRef.current[i - 1] = temp; */
        } else {
          children[i].style.transform = 'translateX(0px)'; // 恢复位置
        }
      }
    }
  };
  var handleMouseUp = function handleMouseUp() {
    var _menuRef$current, _menuRef$current2;
    // 判断clone元素以及之前的菜单项的视口位置（不含因此元素），从而获取到排序后的元素顺序。
    var getNewOrder = function getNewOrder() {
      if (!menuRef.current) return [];
      var clonedElement = menuRef.current.nextSibling;
      var children = Array.from(menuRef.current.children);
      // 构建一个数组，将因此的元素替换为克隆元素，然后使用冒泡排序
      children.splice(dragIndexRef.current, 1, clonedElement);
      var preOrder = children.map(function (child, index) {
        return {
          el: child,
          order: index
        };
      });
      preOrder.sort(function (a, b) {
        var aRect = a.el.getBoundingClientRect();
        var bRect = b.el.getBoundingClientRect();
        return aRect.left - bRect.left; // 按照左边界位置排序
      });
      var newOrderIndex = preOrder.map(function (item) {
        return item.order;
      });
      return newOrderIndex;
    };
    var newOrder = getNewOrder();
    dragIndexRef.current = null;
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    var children = Array.from(((_menuRef$current = menuRef.current) === null || _menuRef$current === void 0 ? void 0 : _menuRef$current.children) || []);
    // 恢复原元素的样式
    children.forEach(function (child) {
      // child.style = ""; // 恢复所有样式
      child.style.cssText = '';
    });

    // 重新渲染排序后的节点
    var newItems = newOrder.map(function (index) {
      return itemsRef.current[index];
    });
    setItems(newItems);
    itemsRef.current = newItems; // 更新引用
    setHoverIndex(null); // 清除hover状态

    // 清理克隆元素
    (_menuRef$current2 = menuRef.current) === null || _menuRef$current2 === void 0 || (_menuRef$current2 = _menuRef$current2.nextSibling) === null || _menuRef$current2 === void 0 || _menuRef$current2.remove();
  };
  return /*#__PURE__*/React.createElement("div", {
    className: styles.container
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.bottomMenu,
    ref: menuRef
  }, items === null || items === void 0 ? void 0 : items.map(function (item, index) {
    var hoverCss;
    if (dragIndexRef.current) {
      // TODO: 处理拖动时的hover样式
      hoverCss = '';
      /*    hoverCss =
      hoverIndex == dragIndexRef.current ? styles.menuItemHover : ""; */
    } else {
      hoverCss = hoverIndex == index ? styles.menuItemHover : '';
    }
    return /*#__PURE__*/React.createElement("div", {
      key: item.id,
      className: "".concat(styles.menuItem, " ").concat(dragIndexRef.current === index ? styles.dragging : '', "  ").concat(hoverCss, " "),
      onMouseDown: handleMouseDown(index),
      onMouseEnter: handleHover(index),
      onMouseLeave: function onMouseLeave() {
        return setHoverIndex(null);
      }
    }, item.icon, /*#__PURE__*/React.createElement("span", {
      className: styles.label
    }, item.label));
  })));
};
export default BottomMenu;