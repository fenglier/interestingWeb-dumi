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
 * @Date: 2025-09-02 10:20:23
 * @lastEditors: fengli
 * @lastEditTime: 
 */
import React, { useEffect, useRef, useState } from "react";
import styles from "@/components/Carousel/index.module.scss";
import { debounce } from "lodash";
var Carousel = function Carousel(_ref) {
  var children = _ref.children,
    _ref$autoPlay = _ref.autoPlay,
    autoPlay = _ref$autoPlay === void 0 ? true : _ref$autoPlay,
    _ref$interval = _ref.interval,
    interval = _ref$interval === void 0 ? 3000 : _ref$interval,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 50 : _ref$width,
    _ref$defaultAnimation = _ref.defaultAnimationTime,
    defaultAnimationTime = _ref$defaultAnimation === void 0 ? 1 : _ref$defaultAnimation;
  var _useState = useState(autoPlay),
    _useState2 = _slicedToArray(_useState, 2),
    innerAutoPlay = _useState2[0],
    setInnerAutoPaly = _useState2[1];
  var _useState3 = useState(1),
    _useState4 = _slicedToArray(_useState3, 2),
    currentIndex = _useState4[0],
    setCurrentIndex = _useState4[1]; // 初始显示第一张（实际是第2个元素）
  var currentIndexRef = useRef(currentIndex);
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isAnimating = _useState6[0],
    setIsAnimating = _useState6[1];
  var trackRef = useRef(null);
  var total = children.length;

  // 克隆 slides
  var slides = [children[children.length - 1]].concat(_toConsumableArray(children), [children[0] // clone first
  ]);

  // 滑动函数
  var goToSlide = function goToSlide(index) {
    if (!trackRef.current) return;
    if (isAnimating) return; // 避免重复点击
    setIsAnimating(true);
    setCurrentIndex(index);
  };
  var pre = debounce(function () {
    setInnerAutoPaly(false);
    goToSlide(currentIndex - 1);
  }, 100);
  var next = debounce(function () {
    setInnerAutoPaly(false);
    goToSlide(currentIndex + 1);
  }, 100);

  // 动画结束处理（实现无缝跳转）
  var handleTransitionEnd = function handleTransitionEnd() {
    setIsAnimating(false);
    if (currentIndex === 0) {
      setCurrentIndex(total);
    } else if (currentIndex === total + 1) {
      setCurrentIndex(1);
    }
  };

  /*   // 自动轮播
  useEffect(() => {
    // FIXME:自动播放不正确。如何保证自动播放和按钮控制不冲突
    if (!innerAutoPlay) return;
    const timer = setInterval(() => {
      goToSlide(currentIndexRef.current + 1);
    }, defaultAnimationTime * 1000 + 1000);
    return () => clearInterval(timer);
  }, [currentIndex, innerAutoPlay]); */

  useEffect(function () {
    currentIndexRef.current = currentIndex; // 始终保持最新值
  }, [currentIndex]);
  useEffect(function () {
    var timeoutId;
    if (innerAutoPlay) {
      var tick = function tick() {
        setCurrentIndex(function (prev) {
          goToSlide(prev + 1);
          return prev + 1;
        });
        timeoutId = setTimeout(tick, defaultAnimationTime * 1000 + 50); // 每次设置新的定时器
      };
      tick(); // 启动
    }
    return function () {
      return clearTimeout(timeoutId);
    }; // 清理
  }, [innerAutoPlay]);
  return /*#__PURE__*/React.createElement("div", {
    className: styles.carousel
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.trackWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.track,
    ref: trackRef,
    style: {
      transform: "translateX(-".concat(currentIndex * width, "%)"),
      transition: isAnimating ? "transform ".concat(defaultAnimationTime, "s linear") : "none"
    },
    onTransitionEnd: handleTransitionEnd
  }, slides.map(function (slide, i) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.slide,
      style: {
        flexBasis: "".concat(width, "%")
      },
      key: i
    }, slide);
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.controls
  }, /*#__PURE__*/React.createElement("button", {
    onClick: pre
  }, "\u2039"), /*#__PURE__*/React.createElement("button", {
    onClick: next
  }, "\u203A")));
};
var AnimationCarousel = function AnimationCarousel(_ref2) {
  var items = _ref2.items,
    animationTime = _ref2.animationTime;
  var contentRef = useRef(null);
  useEffect(function () {
    if (!contentRef.current) return;
    contentRef.current.style.animation = "".concat(styles.marquee, " ").concat(animationTime, "s linear infinite");
  }, []);
  var renderItems = [].concat(_toConsumableArray(items), _toConsumableArray(items));
  return /*#__PURE__*/React.createElement("div", {
    className: styles.scrollContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.scrollContent,
    ref: contentRef
  }, renderItems.map(function (item) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.item,
      style: {
        width: "".concat(item.width, "px")
      }
    }, item.element);
  })));
};
export { AnimationCarousel };
export default Carousel;