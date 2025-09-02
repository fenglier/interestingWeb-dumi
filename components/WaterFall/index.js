function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// src/App.jsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Card.module.scss";
import Card from "./Card";
import debounce from "lodash/debounce";
var rafThrottle = function rafThrottle(fn) {
  var lock = false;
  return function () {
    var _this = this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (lock) return;
    lock = true;
    window.requestAnimationFrame(function () {
      fn.apply(_this, args);
      lock = false;
    });
  };
};

/* 只是使用data1和data2中的尺寸信息，图片用背景颜色替换 */

var getColumnsByWidth = function getColumnsByWidth(width) {
  if (width >= 1200) return 5;
  if (width >= 992) return 4;
  if (width >= 768) return 3;
  return 2;
};
var getGapByWidth = function getGapByWidth(width) {
  if (width >= 1200) return 10;
  if (width >= 992) return 10;
  if (width >= 768) return 10;
  return 10;
};
var getLeftRightPaddingByWidth = function getLeftRightPaddingByWidth(width) {
  if (width >= 1200) return 24;
  if (width >= 992) return 24;
  if (width >= 768) return 24;
  return 24;
};
var useContainer = function useContainer(getData) {
  var containerRef = useRef(null);
  var columns = useRef(getColumnsByWidth(window.innerWidth));
  var gap = useRef(getGapByWidth(window.innerWidth));
  var leftRightPadding = useRef(getLeftRightPaddingByWidth(window.innerWidth));
  var cardWidth = useRef(0);
  var columnHeights = useRef(Array(columns.current).fill(0));
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    initCardPositions = _useState2[0],
    setInitCardPositions = _useState2[1];
  var _useState3 = useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    cardPositions = _useState4[0],
    setCardPositions = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    cards = _useState6[0],
    setCards = _useState6[1];
  var _useState7 = useState(window.innerWidth),
    _useState8 = _slicedToArray(_useState7, 2),
    containerWidth = _useState8[0],
    setContainerWidth = _useState8[1];
  var page = useRef(1); // 记录是获取那一页的数据
  var finish = useRef(false);
  var handleResize = debounce(function () {
    if (!containerRef.current) return;
    var width = containerRef.current.offsetWidth;
    var newColumns = getColumnsByWidth(width);
    var newGap = getGapByWidth(width);
    var newPadding = getLeftRightPaddingByWidth(width);
    var newCardWidth = (width - (newColumns - 1) * newGap - 2 * newPadding) / newColumns;

    // 判断是否有真正变化才 setState
    if (newColumns !== columns.current || newGap !== gap.current || newPadding !== leftRightPadding.current || newCardWidth !== cardWidth.current) {
      columns.current = newColumns;
      gap.current = newGap;
      leftRightPadding.current = newPadding;
      cardWidth.current = newCardWidth;
      setContainerWidth(width);
    }
  }, 200);
  var handleScroll = rafThrottle(function () {
    if (!containerRef.current) return;
    var _containerRef$current = containerRef.current,
      scrollTop = _containerRef$current.scrollTop,
      scrollHeight = _containerRef$current.scrollHeight,
      clientHeight = _containerRef$current.clientHeight;
    var distanceToBottom = scrollHeight - clientHeight - scrollTop;
    if (distanceToBottom <= 50 && !finish.current) {
      var temp = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var data;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return getData(page.current++);
              case 2:
                data = _context.sent;
                if (data) {
                  setCards(function (pre) {
                    return [].concat(_toConsumableArray(pre), _toConsumableArray(data.map(function (card) {
                      return _objectSpread(_objectSpread({}, card), {}, {
                        like: Number(card.like)
                      });
                    })));
                  });
                } else {
                  finish.current = true;
                }
              case 4:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function temp() {
          return _ref.apply(this, arguments);
        };
      }();
      temp();
    }
  });

  /* 计算card的位置 */

  var calculateInitCardPositions = function calculateInitCardPositions(cards, cardWidth) {
    var positions = [];
    /* 计算图片高度 */
    cards.forEach(function (card) {
      //计算卡片高度
      var cardHeight = Math.floor(card.height * cardWidth / card.width);
      // 更新卡片位置
      positions.push({
        id: card.id,
        width: cardWidth,
        height: cardHeight,
        left: 0,
        top: 0,
        auhtor: "",
        title: "",
        like: 0
      });
    });
    /* 计算每个card的left和right  */
    return positions;
  };

  /* 根据已经渲染出来的dom，计算card的，从而移动card */

  var calculatePositions2 = function calculatePositions2(columnHeight, containerRef, leftRightPadding, cardWidth, gap, initCardPositions) {
    var positions = [];
    var children = containerRef.current.children;
    Array.from(children).forEach(function (dom, index) {
      // 找到当前高度最小的列
      var minHeight = Math.min.apply(Math, _toConsumableArray(columnHeight));
      var columnIndex = columnHeight.indexOf(minHeight);

      // 计算卡片放置的位置
      var left = columnIndex ? leftRightPadding + columnIndex * (cardWidth + gap) : leftRightPadding;
      var top = minHeight;

      //NOTE:真实dom的高度
      var cardHeight = dom.getBoundingClientRect().height;

      // 更新卡片位置
      positions.push(_objectSpread(_objectSpread({}, initCardPositions[index]), {}, {
        top: top,
        left: left
      }));

      // 更新列高度
      columnHeight[columnIndex] += cardHeight + gap;
    });
    return [positions, columnHeight];
  };

  /* 监听Card父容器的宽度，设置card的列数、card之间的gap、cardWidth以及父容器左右的padding */
  useEffect(function () {
    if (!containerRef.current) return;
    var width = containerRef.current.offsetWidth;
    var newColumns = getColumnsByWidth(width);
    var newGap = getGapByWidth(width);
    var newPadding = getLeftRightPaddingByWidth(width);
    var newCardWidth = (width - (newColumns - 1) * newGap - 2 * newPadding) / newColumns;
    columns.current = newColumns;
    gap.current = newGap;
    leftRightPadding.current = newPadding;
    cardWidth.current = newCardWidth;
    var temp = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getData(page.current++);
            case 2:
              data = _context2.sent;
              if (data) {
                /*      // 先把card的位置信息计算出来。此时所有的卡牌都在父容器左上角
                const cp = calculatePositions([...data], newCardWidth);
                setCardPositions([...cp]); */
                setCards(_toConsumableArray(data));
              } else {
                finish.current = true;
              }
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function temp() {
        return _ref2.apply(this, arguments);
      };
    }();
    temp();
    var observer = new ResizeObserver(function () {
      handleResize();
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return function () {
      observer.disconnect();
      page.current = 1;
    };
  }, []);

  // card列数、card宽带变化时，重新计算card的位置
  useEffect(function () {
    if (containerWidth <= 0) return;
    if (columns.current <= 0) return;
    if (cardWidth.current <= 0) return;
    var cp = calculateInitCardPositions(cards, cardWidth.current);
    setInitCardPositions(_toConsumableArray(cp));
    setCardPositions(_toConsumableArray(cp));
  }, [containerWidth, cards]);

  // 一个card一个card的移动到相应的位置
  useLayoutEffect(function () {
    var _containerRef$current2;
    if (!containerRef.current) return;
    if (containerWidth <= 0) return;
    var children = (_containerRef$current2 = containerRef.current) === null || _containerRef$current2 === void 0 ? void 0 : _containerRef$current2.children;
    if (children.length > 0) {
      // 获取卡片位置
      var _calculatePositions = calculatePositions2(Array(columns.current).fill(0), containerRef, leftRightPadding.current, cardWidth.current, gap.current, initCardPositions),
        _calculatePositions2 = _slicedToArray(_calculatePositions, 2),
        cp = _calculatePositions2[0],
        tempColumnHeight = _calculatePositions2[1];
      setCardPositions(_toConsumableArray(cp));
      columnHeights.current = _toConsumableArray(tempColumnHeight);
    }
  }, [initCardPositions]);
  return [cards, containerRef, cardPositions, handleScroll];
};
var WaterFall = function WaterFall(_ref3) {
  var getData = _ref3.getData;
  var _useContainer = useContainer(getData),
    _useContainer2 = _slicedToArray(_useContainer, 4),
    cards = _useContainer2[0],
    containerRef = _useContainer2[1],
    cardPositions = _useContainer2[2],
    handleScroll = _useContainer2[3];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("symbol", {
    id: "like",
    viewBox: "0 0 16 16"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    fillOpacity: ".8",
    d: "M3.256 3.913a3.083 3.083 0 0 0-.003 4.397L8 12.998l4.743-4.684a3.085 3.085 0 0 0 .001-4.4c-.6-.593-1.4-.914-2.233-.914a3.17 3.17 0 0 0-1.91.635L8 4.087l-.601-.452A3.17 3.17 0 0 0 5.489 3c-.834 0-1.634.321-2.233.913m10.19 5.111-4.748 4.69a.996.996 0 0 1-1.397 0L2.549 9.02a4.083 4.083 0 0 1 .004-5.82A4.17 4.17 0 0 1 5.488 2c.907 0 1.787.29 2.512.835A4.17 4.17 0 0 1 10.51 2c1.093 0 2.146.422 2.936 1.202a4.085 4.085 0 0 1 0 5.822"
  }))), /*#__PURE__*/React.createElement("div", {
    className: styles.masonry,
    ref: containerRef,
    onScroll: handleScroll
  }, cards.map(function (card) {
    var position;
    if (cardPositions.find(function (pos) {
      return pos.id === card.id;
    })) {
      position = cardPositions.find(function (pos) {
        return pos.id === card.id;
      });
      return /*#__PURE__*/React.createElement(Card, {
        key: card.id,
        title: card.title,
        author: card.auhtor,
        like: card.like,
        height: position.height,
        width: position.width,
        top: position.top,
        left: position.left,
        card: card
      });
    } else {
      return;
    }
  })));
};
export default WaterFall;