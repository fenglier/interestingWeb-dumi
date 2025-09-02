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
 * @Date: 2025-05-12 12:58:13
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useEffect, useState } from 'react';
import style from "./index.module.scss";
var Shake = function Shake(_ref) {
  var items = _ref.items,
    onChange = _ref.onChange;
  if (!Array.isArray(items)) {
    throw Error('items must be an array');
  }
  var _useState = useState(Array(items.length).fill(false)),
    _useState2 = _slicedToArray(_useState, 2),
    expand = _useState2[0],
    setExpand = _useState2[1];
  var handleClick = function handleClick(index, key) {
    // 设置当前展开的元素，以及向父组件告知被点击的元素的key
    expand[index] = !expand[index];
    setExpand(_toConsumableArray(expand));
    onChange(key || String(index));
  };
  useEffect(function () {
    // TODO:设置当前被展开的元素
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: style.container
  }, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: style.exist,
      onClick: function onClick() {
        return handleClick(index, item.key);
      }
    }, item.exist), /*#__PURE__*/React.createElement("div", {
      className: "".concat(style.expander, " ").concat(expand[index] ? style.open : '')
    }, item.expander));
  }));
};
export default Shake;