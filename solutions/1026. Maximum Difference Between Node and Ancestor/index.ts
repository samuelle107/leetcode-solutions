import { TreeNode } from "../../types/binary-tree";

function maxAncestorDiff(root: TreeNode | null): number {
  /** Return the max diff in a sub tree */
  function dfs(
    node: TreeNode | null,
    currMin: number,
    currMax: number
  ): number {
    // When there is no node, calc the max diff in that sub tree
    if (!node) return currMax - currMin;

    currMax = Math.max(currMax, node.val);
    currMin = Math.min(currMin, node.val);

    return Math.max(
      dfs(node.left, currMin, currMax),
      dfs(node.right, currMin, currMax)
    );
  }

  return dfs(root, root!.val, root!.val);
}
