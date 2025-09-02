function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-16 14:08:16
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef, useState } from "react";
import style from "./index.module.scss";
import BarrageItem from "./BarrageItem";
var idCounter = 0;
var Barrage = function Barrage() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    barrages = _useState2[0],
    setBarrages = _useState2[1];
  var containerRef = useRef(null);
  var addBarrage = function addBarrage(text) {
    var id = idCounter++;
    var top = Math.random() * 80 + 10;
    var newBarrage = {
      id: id,
      text: text,
      top: top
    };
    setBarrages(function (prev) {
      return [].concat(_toConsumableArray(prev), [newBarrage]);
    });
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var input = e.currentTarget.elements.namedItem("barrageText");
    var text = input.value.trim();
    if (text) {
      addBarrage(text);
      input.value = "";
    }
  };

  // 控制每个弹幕动画
  var handleAnimation = function handleAnimation(el, barrageId) {
    if (!el || !containerRef.current) return;
    var containerWidth = containerRef.current.offsetWidth;
    var elWidth = el.offsetWidth;
    var animation = el.animate([{
      transform: "translateX(".concat(0, "px)")
    }, {
      transform: "translateX(-".concat(elWidth + containerWidth, "px)")
    }], {
      duration: 8000,
      easing: "linear",
      fill: "forwards" // 保持最终位置
    });

    // 存引用
    el._barrageAnim = animation;

    // 手动监听动画是否真正移出屏幕
    var checkIfOutOfScreen = function checkIfOutOfScreen() {
      var rect = el.getBoundingClientRect();
      var parentRect = containerRef.current.getBoundingClientRect();
      if (rect.right < parentRect.left) {
        setBarrages(function (prev) {
          return prev.filter(function (b) {
            return b.id !== barrageId;
          });
        });
      } else {
        requestAnimationFrame(checkIfOutOfScreen);
      }
    };
    requestAnimationFrame(checkIfOutOfScreen);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: style.wrapper
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: style.inputBar
  }, /*#__PURE__*/React.createElement("input", {
    name: "barrageText",
    placeholder: "\u53D1\u9001\u5F39\u5E55..."
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "\u53D1\u9001")), /*#__PURE__*/React.createElement("div", {
    className: style.barrageContainer,
    ref: containerRef
  }, barrages.map(function (barrage) {
    return /*#__PURE__*/React.createElement(BarrageItem, {
      key: barrage.id,
      barrage: barrage,
      containerRef: containerRef,
      onOutScreen: function onOutScreen(id) {
        return setBarrages(function (prev) {
          return prev.filter(function (b) {
            return b.id !== id;
          });
        });
      }
    });
  })));
};
export default Barrage;