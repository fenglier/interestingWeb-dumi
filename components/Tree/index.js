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
 * @Date: 2025-05-08 08:59:39
 * @lastEditors: fengli
 * @lastEditTime:
 */
var NodeCheckState = /*#__PURE__*/function (NodeCheckState) {
  NodeCheckState[NodeCheckState["UNCHECKED"] = 0] = "UNCHECKED";
  NodeCheckState[NodeCheckState["CHECKED"] = 1] = "CHECKED";
  NodeCheckState[NodeCheckState["INDETERMINATE"] = 2] = "INDETERMINATE";
  return NodeCheckState;
}(NodeCheckState || {});
import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";
var generateParentAndId = function generateParentAndId(data, parent) {
  var _tempNode$children;
  var tempNode = JSON.parse(JSON.stringify(data));
  if (tempNode !== undefined && tempNode !== null && ((_tempNode$children = tempNode.children) !== null && _tempNode$children !== void 0 ? _tempNode$children : []).length > 0) {
    var _tempNode$children2;
    var children = ((_tempNode$children2 = tempNode.children) !== null && _tempNode$children2 !== void 0 ? _tempNode$children2 : []).map(function (item) {
      var newItem = generateParentAndId(item, tempNode);
      return newItem;
    });
    tempNode.children = children;
  }
  tempNode.parent = parent !== null && parent !== void 0 && parent.id ? parent === null || parent === void 0 ? void 0 : parent.id : (parent === null || parent === void 0 ? void 0 : parent.label) || "";
  tempNode.id = tempNode.id ? tempNode.id : tempNode.label;
  tempNode.expand = tempNode.expand == undefined || tempNode.expand == null ? true : tempNode.expand;
  tempNode.check = tempNode.check == undefined || tempNode.check == null ? NodeCheckState.UNCHECKED : tempNode.check;
  return tempNode;
};
var useTreeNode = function useTreeNode(data) {
  var _JSON$parse;
  var _useState = useState((_JSON$parse = JSON.parse(JSON.stringify(data))) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.map(function (item) {
      return generateParentAndId(item, undefined);
    })),
    _useState2 = _slicedToArray(_useState, 2),
    node = _useState2[0],
    setNode = _useState2[1];
  var nodeMap = useRef(new Map());
  useEffect(function () {
    var _JSON$parse2;
    var node = (_JSON$parse2 = JSON.parse(JSON.stringify(data))) === null || _JSON$parse2 === void 0 ? void 0 : _JSON$parse2.map(function (item) {
      return generateParentAndId(item, undefined);
    });
    setNode(node);
    var map = new Map();
    var gennerateHashMap = function gennerateHashMap(data) {
      var _data$children;
      if (data.id) {
        map.set(data.id, data);
      }
      if (data !== undefined && data !== null && ((_data$children = data.children) !== null && _data$children !== void 0 ? _data$children : []).length > 0) {
        var _data$children2;
        ((_data$children2 = data.children) !== null && _data$children2 !== void 0 ? _data$children2 : []).forEach(function (item) {
          gennerateHashMap(item);
        });
      }
    };
    node.map(function (item) {
      gennerateHashMap(item);
    });
    nodeMap.current = map;
  }, [data]);
  return [node, nodeMap, setNode];
};
var Tree = function Tree(_ref) {
  var data = _ref.data,
    onChange = _ref.onChange;
  var _useTreeNode = useTreeNode(data),
    _useTreeNode2 = _slicedToArray(_useTreeNode, 3),
    node = _useTreeNode2[0],
    nodeMap = _useTreeNode2[1],
    setNode = _useTreeNode2[2];
  var handleChange = function handleChange(e) {
    var _currentNode$children;
    var _e$target = e.target,
      checked = _e$target.checked,
      id = _e$target.id;
    /* 查询当前节点，并设置它的check */
    var currentNode = nodeMap.current.get(id);
    currentNode.check = checked ? NodeCheckState.CHECKED : NodeCheckState.UNCHECKED;

    /* 设置后代节点的check。父节点被选择。所有子节点，包括子节点的子节点...，都被选择。取消也一样 */
    var setChildrenCheck = function setChildrenCheck(currentNode) {
      currentNode.check = checked ? NodeCheckState.CHECKED : NodeCheckState.UNCHECKED;
      if (currentNode.children) {
        currentNode.children.forEach(function (item) {
          setChildrenCheck(item);
        });
      }
    };
    ((_currentNode$children = currentNode.children) !== null && _currentNode$children !== void 0 ? _currentNode$children : []).forEach(function (item) {
      setChildrenCheck(item);
    });

    /* 实现半选功能。子节点没有被全部选择是半选，全部被选择是全选 */
    var iterator = currentNode;
    while (nodeMap.current.get(iterator.parent)) {
      iterator = nodeMap.current.get(iterator.parent);
    }
    var rootNode = iterator;
    var setParentCheck = function setParentCheck(node) {
      if (node.children) {
        node.check = NodeCheckState.UNCHECKED;
        var childrenCheck = node.children.map(function (item) {
          return setParentCheck(item);
        });
        var deduplicatedCheck = new Set(childrenCheck);
        if (deduplicatedCheck.size === 1) {
          if (deduplicatedCheck.has(NodeCheckState.CHECKED)) {
            node.check = NodeCheckState.CHECKED;
          } else if (deduplicatedCheck.has(NodeCheckState.UNCHECKED)) {
            node.check = NodeCheckState.UNCHECKED;
          } else {
            node.check = NodeCheckState.INDETERMINATE;
          }
        } else {
          node.check = NodeCheckState.INDETERMINATE;
        }
        return node.check;
      } else {
        return node.check;
      }
    };
    setParentCheck(rootNode);
    setNode(_toConsumableArray(node));
    var checkedNode = JSON.parse(JSON.stringify(currentNode));
    var currentTree = JSON.parse(JSON.stringify(node));
    onChange && onChange(checkedNode, currentTree);
  };
  var toggleExpand = function toggleExpand(e) {
    var id = e.currentTarget.id;
    var currentNode = nodeMap.current.get(id);
    currentNode.expand = !currentNode.expand;
    setNode(_toConsumableArray(node));
  };
  var generateTree = function generateTree(data) {
    var setExpand = function setExpand(item) {
      var _item$children;
      if (((_item$children = item === null || item === void 0 ? void 0 : item.children) !== null && _item$children !== void 0 ? _item$children : []).length > 0) {
        {
          /* 实现折叠功能 */
        }
        return /*#__PURE__*/React.createElement("svg", {
          width: "1rem",
          height: "1rem",
          id: item.id,
          onClick: toggleExpand,
          className: item.expand ? style.arrowDown : style.arrowRight
        }, /*#__PURE__*/React.createElement("use", {
          href: "#arrow-down"
        }));
      } else {
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
          style: {
            display: "inline-block",
            width: "1rem",
            height: "1rem"
          }
        }));
      }
    };
    return data.map(function (item) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.value
      }, setExpand(item), /*#__PURE__*/React.createElement("input", {
        type: "checkbox",
        name: item.label,
        value: item.value,
        id: item.id,
        onChange: handleChange,
        checked: item.check === NodeCheckState.CHECKED,
        ref: function ref(el) {
          if (el) {
            el.indeterminate = item.check === NodeCheckState.INDETERMINATE;
          }
        }
      }), item.label, item.expand && item.children && item.children.length > 0 && /*#__PURE__*/React.createElement("div", {
        className: style.childPadding
      }, generateTree(item.children)));
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement("symbol", {
    id: "arrow-down",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
  })), /*#__PURE__*/React.createElement("symbol", {
    id: "arrow-right",
    viewBox: "0 0 1024 1024"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
  }))), generateTree(node));
};
export default Tree;