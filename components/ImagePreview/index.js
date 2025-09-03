function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-13 11:39:02
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import style from "./index.module.scss";
// 动画时长
var ANIMATION_TIME = 0.3;
var ImagePreview = function ImagePreview(_ref) {
  var src = _ref.src,
    alt = _ref.alt,
    width = _ref.width;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    zoomed = _useState2[0],
    setZoomed = _useState2[1];
  var _useState3 = useState(''),
    _useState4 = _slicedToArray(_useState3, 2),
    transform = _useState4[0],
    setTransform = _useState4[1];
  var preTransfromRef = useRef('');
  var imageRef = useRef(null);
  var zoomedRef = useRef(null);
  var handleClick = function handleClick() {
    if (!imageRef.current) return;
    var rect = imageRef.current.getBoundingClientRect();

    // 计算thumbnail相比于原图的缩放比率。FIXME:当图片过小的时候，放大后的尺寸不一定为window.innerHeight*0.9
    var scale;
    if (window.innerWidth > window.innerHeight) {
      scale = rect.height / (window.innerHeight * 0.9);
    } else {
      scale = rect.width / (window.innerWidth * 0.9);
    }
    var translateX = rect.left;
    var translateY = rect.top;
    var startTransform = "translate(".concat(translateX, "px, ").concat(translateY, "px) scale(").concat(scale, ", ").concat(scale, ")");
    flushSync(function () {
      setTransform(startTransform);
      setZoomed(true);
    });
    // 通过transition控制动画
    var endTransform = "translate(50vw, 50vh) translate(-50%, -50%) scale(1, 1)";
    // NOTE:同步执行js代码，是不会有动画的。orgin → end 这一变化被当作一次性完成，没有触发动画。
    setTimeout(function () {
      preTransfromRef.current = startTransform;
      setTransform(endTransform);
    }, 50);
    /*  flushSync(() => {}); */
  };
  var handleClose = function handleClose() {
    // 动画关闭效果
    setTransform(preTransfromRef.current);
    setTimeout(function () {
      setZoomed(false);
    }, ANIMATION_TIME * 1000);
  };
  var handleZoomImgClick = function handleZoomImgClick(e) {
    e.stopPropagation();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
    ref: imageRef,
    width: "".concat(width ? width : 200),
    src: src || alt
    /*     alt={alt} */,
    className: style.thumbnail,
    onClick: handleClick
  }), zoomed && /*#__PURE__*/React.createElement("div", {
    className: style.overlay,
    onClick: handleClose
  }, /*#__PURE__*/React.createElement("img", {
    src: src || alt,
    onClick: handleZoomImgClick,
    className: style.zoomedImage,
    ref: zoomedRef,
    style: {
      transform: transform,
      transition: "transform ".concat(ANIMATION_TIME, "s ease")
      // animation: `${style.scaleUp} 0.3s ease forwards`,
    }
  })));
};
export default ImagePreview;