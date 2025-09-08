/*
 * @Author: fengli
 * @Description:
 * @Date: 2025-05-08 08:59:39
 * @lastEditors: fengli
 * @lastEditTime:
 */
interface OuterTreeNode {
  expand?: boolean; // 是否展开
  check?: boolean;
  label: string;
  value: string;
  id?: string;
  children?: OuterTreeNode[];
  /*   parent?: string; */
}
enum NodeCheckState {
  UNCHECKED = 0, // 未选中
  CHECKED = 1, // 选中
  INDETERMINATE = 2, // 半选
}
interface InnerTreeNode {
  expand?: boolean;
  check: NodeCheckState;
  disabled: boolean; // 是否禁用
  label: string;
  value: string;
  id: string;
  parent: string;
  children?: InnerTreeNode[];
}
interface TreeProps {
  data: OuterTreeNode[];
  onChange?: (checkNode: InnerTreeNode, currentTree: InnerTreeNode[]) => void;
  checked?: string[]; // 设置节点的选中状态。如果父节点被选中，子节点部分选中，则子节点的选中设置无效，子节点会被全部选择
  disabled?: string[]; // 设置节点的禁用状态。如果父节点被禁用，子节点部分禁用，则子节点的禁用设置无效，子节点会被全部禁用
}
import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
/**
 * 设置每个节点的 parent 和 id
 *
 * @param {OuterTreeNode} data
 * @param {OuterTreeNode} [parent]
 * @return {*}  {InnerTreeNode}
 */
const generateParentAndId = (
  data: InnerTreeNode,
  parent?: InnerTreeNode,
): InnerTreeNode => {
  let tempNode: InnerTreeNode = JSON.parse(JSON.stringify(data));
  if (
    tempNode !== undefined &&
    tempNode !== null &&
    (tempNode.children ?? []).length > 0
  ) {
    let children = (tempNode.children ?? []).map((item) => {
      const newItem = generateParentAndId(item , tempNode);
      return newItem;
    });
    tempNode.children = children;
  }
  tempNode.parent = parent?.id ? parent?.id : parent?.label || '';
  tempNode.id = tempNode.id ? tempNode.id : tempNode.label;
  tempNode.expand =
    tempNode.expand == undefined || tempNode.expand == null
      ? true
      : tempNode.expand;

  tempNode.check =
    tempNode.check == undefined || tempNode.check == null
      ? NodeCheckState.UNCHECKED
      : tempNode.check;
  return tempNode;
};

/**
 * 根据传入的 checked 设置节点的选中状态
 *
 * @param {Map<string, InnerTreeNode>} nodeMap
 * @param {string[]} checked
 * @return {*}
 */
const setUpNodeCheckState = (
  nodeMap: Map<string, InnerTreeNode>,
  checked: string[],
) => {
  if (nodeMap.size === 0) return;
  checked.forEach((id) => {
    const currentNode = nodeMap.get(id);
    if (currentNode) {
      currentNode.check = NodeCheckState.CHECKED;
      // 设置后代节点的check（disabled一样）。父节点被选择。所有子节点，包括子节点的子节点...，都被选择。取消也一样
      const setChildrenCheck = (currentNode: InnerTreeNode) => {
        currentNode.check = NodeCheckState.CHECKED;
        if (currentNode.children) {
          currentNode.children.forEach((item: InnerTreeNode) => {
            setChildrenCheck(item);
          });
        }
      };
      (currentNode.children ?? []).forEach((item: InnerTreeNode) => {
        setChildrenCheck(item);
      });

      // 实现半选功能。子节点没有被全部选择是半选，全部被选择是全选
      let iterator = currentNode;
      while (nodeMap.get(iterator.parent)) {
        iterator = nodeMap.get(iterator.parent)!;
      }
      const rootNode = iterator;
      const setParentCheck = (node: InnerTreeNode) => {
        if (node.children) {
          node.check = NodeCheckState.UNCHECKED;
          let childrenCheck: NodeCheckState[] = node.children.map(
            (item: InnerTreeNode) => {
              return setParentCheck(item);
            },
          );
          let deduplicatedCheck = new Set(childrenCheck);
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
    }
  });
};

const setUpNodeDisabledState = (
  nodeMap: Map<string, InnerTreeNode>,
  disabled: string[],
) => {
  if (nodeMap.size === 0) return;
  disabled.forEach((id) => {
    const currentNode = nodeMap.get(id);
    if (currentNode) {
      currentNode.disabled = true;
      // 设置后代节点的disabled。父节点被disabled。所有子节点，包括子节点的子节点...，都被disabled。
      const setChildrenDisabled = (currentNode: InnerTreeNode) => {
        currentNode.disabled = true;
        if (currentNode.children) {
          currentNode.children.forEach((item: InnerTreeNode) => {
            setChildrenDisabled(item);
          });
        }
      };
      (currentNode.children ?? []).forEach((item: InnerTreeNode) => {
        setChildrenDisabled(item);
      });
    }
  });
};

const useTreeNode = (
  data: OuterTreeNode[],
  checked: string[] = [],
  disabled: string[] = [],
): any[] => {
  const [node, setNode] = useState<InnerTreeNode[]>(
    JSON.parse(JSON.stringify(data))?.map((item:InnerTreeNode) =>
      generateParentAndId(item, undefined),
    ),
  );
  const nodeMap = useRef<Map<string, InnerTreeNode>>(new Map());
  useEffect(() => {
    let node: InnerTreeNode[] = JSON.parse(JSON.stringify(data))?.map(
      (item: InnerTreeNode) => generateParentAndId(item, undefined),
    );
    setNode(node);
    const map = new Map<string, InnerTreeNode>();
    const gennerateHashMap = (data: InnerTreeNode) => {
      if (data.id) {
        map.set(data.id, data);
      }
      if (
        data !== undefined &&
        data !== null &&
        (data.children ?? []).length > 0
      ) {
        (data.children ?? []).forEach((item) => {
          gennerateHashMap(item);
        });
      }
    };
    node.map((item) => {
      gennerateHashMap(item);
    });
    nodeMap.current = map;
    setUpNodeCheckState(map, checked);
    setUpNodeDisabledState(map, disabled);
  }, [data, checked, disabled]);
  return [node, nodeMap, setNode];
};
const defaultChecked: string[] = [];
const defaultDisabled: string[] = [];
const Tree: React.FC<TreeProps> = ({
  data,
  checked = defaultChecked,
  disabled = defaultDisabled,
  onChange,
}) => {
  const [node, nodeMap, setNode] = useTreeNode(data, checked, disabled);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;
    /* 查询当前节点，并设置它的check */
    const currentNode = nodeMap.current.get(id);
    currentNode.check = checked
      ? NodeCheckState.CHECKED
      : NodeCheckState.UNCHECKED;

    /*
     * 设置后代节点的check。父节点被选择。所有子节点，包括子节点的子节点...，都被选择。取消也一样
     * 但是，当子节点为disabled时，不设置子孙节点。
     */
    const setChildrenCheck = (currentNode: InnerTreeNode) => {
      currentNode.check = checked
        ? NodeCheckState.CHECKED
        : NodeCheckState.UNCHECKED;
      if (currentNode.children) {
        currentNode.children.forEach((item: InnerTreeNode) => {
          // 当子节点disabled为true时，不设置子孙节点
          if (!item.disabled) setChildrenCheck(item);
        });
      }
    };
    (currentNode.children ?? []).forEach((item: InnerTreeNode) => {
      setChildrenCheck(item);
    });

    /* 实现半选功能。子节点没有被全部选择是半选，全部被选择是全选 */
    let iterator = currentNode;
    while (nodeMap.current.get(iterator.parent)) {
      iterator = nodeMap.current.get(iterator.parent);
    }
    const rootNode = iterator;

    const setParentCheck = (node: InnerTreeNode) => {
      if (node.children) {
        node.check = NodeCheckState.UNCHECKED;
        let childrenCheck: NodeCheckState[] = node.children.map(
          (item: InnerTreeNode) => {
            return setParentCheck(item);
          },
        );
        let deduplicatedCheck = new Set(childrenCheck);
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
    setNode([...node]);
    let checkedNode = JSON.parse(JSON.stringify(currentNode));
    let currentTree = JSON.parse(JSON.stringify(node));
    onChange && onChange(checkedNode, currentTree);
  };
  const toggleExpand = (e: React.MouseEvent<SVGSVGElement>) => {
    const id = e.currentTarget.id;
    const currentNode = nodeMap.current.get(id);
    currentNode.expand = !currentNode.expand;
    setNode([...node]);
  };
  const generateTree = (data: InnerTreeNode[]) => {
    const setExpand = (item: InnerTreeNode) => {
      if ((item?.children ?? []).length > 0) {
        {
          /* 实现折叠功能 */
        }
        return (
          <svg
            width="1rem"
            height="1rem"
            id={item.id}
            onClick={toggleExpand}
            className={item.expand ? style.arrowDown : style.arrowRight}
          >
            <use href="#arrow-down"></use>
          </svg>
        );
      } else {
        return (
          <>
            <span
              style={{ display: 'inline-block', width: '1rem', height: '1rem' }}
            ></span>
          </>
        );
      }
    };

    return data.map((item) => {
      return (
        <div key={item.value}>
          {setExpand(item)}
          <input
            disabled={item.disabled}
            type="checkbox"
            name={item.label}
            value={item.value}
            id={item.id}
            onChange={handleChange}
            checked={item.check === NodeCheckState.CHECKED}
            ref={(el) => {
              if (el) {
                el.indeterminate = item.check === NodeCheckState.INDETERMINATE;
              }
            }}
          />
          {item.label}
          {item.expand && item.children && item.children.length > 0 && (
            <div className={style.childPadding}>
              {generateTree(item.children)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol id="arrow-down" viewBox="0 0 1024 1024">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </symbol>
        <symbol id="arrow-right" viewBox="0 0 1024 1024">
          <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
        </symbol>
      </svg>
      {generateTree(node)}
    </>
  );
};
export default Tree;
