import { TreeNode } from "../../types/binary-tree";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // Base case.
  if (!p && !q) return true;

  // either p or q doesnt exist, which means that they cannot be the same tree
  if (!p || !q) return false;

  // Recursively check to make sure that at every node,
  // the subtree is the same and the current nodes' value are equal
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}
