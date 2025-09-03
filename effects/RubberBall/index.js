function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-16 09:56:05
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef, useState } from "react";
import style from "./index.module.scss";
var RubberBall = function RubberBall() {
  var ballRef = useRef(null);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isDragging = _useState2[0],
    setIsDragging = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    startX = _useState4[0],
    setStartX = _useState4[1];
  var handleMouseDown = function handleMouseDown(e) {
    if (!ballRef.current) return;
    setIsDragging(true);
    setStartX(e.clientX);
    ballRef.current.style.transition = "none";
  };
  var handleMouseMove = function handleMouseMove(e) {
    if (!isDragging) return;
    if (!ballRef.current) return;
    var deltaX = e.clientX - startX;
    var stretch = 1 + Math.min(Math.abs(deltaX) / 150, 0.5); // 限制最大拉伸
    var direction = deltaX >= 0 ? 1 : -1;
    ballRef.current.style.transform = "translate(".concat(deltaX, "px,-50%) scaleX(").concat(stretch, ")");
  };
  var handleMouseUp = function handleMouseUp() {
    if (!isDragging) return;
    if (!ballRef.current) return;
    setIsDragging(false);
    ballRef.current.style.transition = "transform 0.4s cubic-bezier(0.25, 1.5, 0.5, 1)";
    ballRef.current.style.transform = "translate(0,-50%) scaleX(1)";
  };
  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, /*#__PURE__*/React.createElement("div", {
    ref: ballRef,
    className: style.ball,
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
    onMouseLeave: handleMouseUp
  }));
};
export default RubberBall;