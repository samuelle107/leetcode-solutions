import { TreeNode } from "../../types/binary-tree";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const right = invertTree(root.right);
  const left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
}
