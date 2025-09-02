var _excluded = ["children", "onClick"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-13 17:06:33
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React, { useRef } from "react";
import styles from "./index.module.scss";
var Ripple = function Ripple(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  var buttonRef = useRef(null);
  var createRipple = function createRipple(event) {
    if (!buttonRef.current) return;
    var button = buttonRef.current;
    var rect = button.getBoundingClientRect();
    var size = Math.max(rect.width, rect.height);
    // NOTE:水波纹元素是以左上角为原点创建的，所以需要减去半径，让圆心对准点击点。
    var x = event.clientX - rect.left - size / 2;
    var y = event.clientY - rect.top - size / 2;
    var ripple = document.createElement("span");
    ripple.className = styles.ripple;
    ripple.style.width = ripple.style.height = "".concat(size, "px");
    ripple.style.left = "".concat(x, "px");
    ripple.style.top = "".concat(y, "px");
    button.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 6000);
  };
  var handleClick = function handleClick(e) {
    createRipple(e);
    onClick === null || onClick === void 0 || onClick(e);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: buttonRef,
    className: styles.rippleButton,
    onClick: handleClick
  }, rest), children);
};
export default Ripple;