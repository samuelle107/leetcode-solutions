import { TreeNode } from "../../types/binary-tree";

function minDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  let q: TreeNode[] = [];

  q.push(root);

  let depth = 0;

  while (q.length > 0) {
    const tempQ = q;
    q = [];
    depth += 1;

    for (let i = 0; i < tempQ.length; i += 1) {
      const curr = tempQ[i];

      if (curr.left === null && curr.right === null) {
        return depth;
      }

      if (curr.left !== null) q.push(curr.left);
      if (curr.right !== null) q.push(curr.right);
    }
  }

  return depth;
}
