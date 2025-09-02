/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-01 20:20:08
 * @lastEditors: fengli
 * @lastEditTime:
 */
import React from "react";
import styles from "./Card.module.scss";
var Card = function Card(_ref) {
  var card = _ref.card,
    top = _ref.top,
    left = _ref.left,
    height = _ref.height,
    width = _ref.width,
    title = _ref.title,
    author = _ref.author,
    like = _ref.like;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.card,
    style: {
      top: "".concat(top, "px"),
      left: "".concat(left, "px"),
      width: "".concat(width, "px")
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "".concat(height, "px"),
      width: "".concat(width, "px"),
      backgroundColor: "".concat(card.backgroundColor)
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.cardFooter
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.title
  }, title), /*#__PURE__*/React.createElement("div", {
    className: styles.author
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.authorInfo
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.avatar,
    style: {
      backgroundColor: "".concat(card.backgroundColor)
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.name
  }, author)), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16"
  }, /*#__PURE__*/React.createElement("use", {
    href: "#like"
  })), /*#__PURE__*/React.createElement("div", {
    className: "like"
  }, like))));
};
export default Card;