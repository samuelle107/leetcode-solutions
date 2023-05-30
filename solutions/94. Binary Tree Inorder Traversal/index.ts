import { TreeNode } from "../../types/binary-tree";

function inorderTraversal(root: TreeNode | null): number[] {
  const arr: number[] = [];

  function dfs(root: TreeNode | null): void {
    if (!root) return;

    dfs(root.left);
    arr.push(root.val);
    dfs(root.right);
  }

  dfs(root);

  return arr;
}
