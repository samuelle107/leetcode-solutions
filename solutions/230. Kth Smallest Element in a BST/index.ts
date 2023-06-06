import { TreeNode } from "../../types/binary-tree";

function kthSmallest(root: TreeNode | null, k: number): number {
  let counter = 0;
  let solution = 0;

  function dfs(node: TreeNode | null) {
    if (!node || counter >= k) return 0;

    dfs(node.left);
    counter += 1;

    if (counter === k) {
      solution = node.val;
    }
    dfs(node.right);
  }

  dfs(root);

  return solution;
}
