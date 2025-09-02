/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-17 15:05:01
 * @lastEditors: fengli
 * @lastEditTime:
 */
// BarrageItem.tsx
import React, { useEffect, useRef } from "react";
import style from "./index.module.scss";
var BarrageItem = function BarrageItem(_ref) {
  var barrage = _ref.barrage,
    containerRef = _ref.containerRef,
    onOutScreen = _ref.onOutScreen;
  var elRef = useRef(null);

  /* ref={fn} 形式的回调函数，每次渲染时都会被调用一次，即使 DOM 元素没变 */
  useEffect(function () {
    var el = elRef.current;
    if (!el || !containerRef.current) return;
    var containerWidth = containerRef.current.offsetWidth;
    var elWidth = el.offsetWidth;
    var animation = el.animate([{
      transform: "translateX(0px)"
    }, {
      transform: "translateX(-".concat(elWidth + containerWidth, "px)")
    }], {
      duration: 8000,
      easing: "linear",
      fill: "forwards"
    });

    // 存动画引用
    el._barrageAnim = animation;
    var checkIfOutOfScreen = function checkIfOutOfScreen() {
      var rect = el.getBoundingClientRect();
      var parentRect = containerRef.current.getBoundingClientRect();
      if (rect.right < parentRect.left) {
        onOutScreen(barrage.id);
      } else {
        requestAnimationFrame(checkIfOutOfScreen);
      }
    };
    requestAnimationFrame(checkIfOutOfScreen);
  }, [barrage.id, containerRef]);
  return /*#__PURE__*/React.createElement("div", {
    ref: elRef,
    className: style.barrage,
    style: {
      top: "".concat(barrage.top, "px")
    },
    onMouseEnter: function onMouseEnter(e) {
      var _barrageAnim;
      return (_barrageAnim = e.currentTarget._barrageAnim) === null || _barrageAnim === void 0 ? void 0 : _barrageAnim.pause();
    },
    onMouseLeave: function onMouseLeave(e) {
      var _barrageAnim2;
      return (_barrageAnim2 = e.currentTarget._barrageAnim) === null || _barrageAnim2 === void 0 ? void 0 : _barrageAnim2.play();
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: style.text
  }, barrage.text), /*#__PURE__*/React.createElement("button", {
    className: style.likeBtn,
    onClick: function onClick(e) {
      e.stopPropagation();
      alert("\u4F60\u70B9\u8D5E\u4E86\uFF1A".concat(barrage.text));
    }
  }, "\u2764\uFE0F"));
};
export default BarrageItem;