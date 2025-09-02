interface OuterTreeNode {
    expand?: boolean;
    checked?: boolean;
    label: string;
    value: string;
    id?: string;
    children?: OuterTreeNode[];
}
declare enum NodeCheckState {
    UNCHECKED = 0,
    CHECKED = 1,
    INDETERMINATE = 2
}
interface InnerTreeNode {
    expand?: boolean;
    check: NodeCheckState;
    label: string;
    value: string;
    id: string;
    parent: string;
    children?: InnerTreeNode[];
}
interface TreeProps {
    data: OuterTreeNode[];
    onChange?: (checkNode: InnerTreeNode, currentTree: InnerTreeNode[]) => void;
}
import React from "react";
declare const Tree: React.FC<TreeProps>;
export default Tree;
