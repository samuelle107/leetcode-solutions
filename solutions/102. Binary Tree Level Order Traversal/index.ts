import { TreeNode } from "../../types/binary-tree";

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  let q: TreeNode[] = [];
  const solutions: number[][] = [];

  q.push(root);

  while (q.length > 0) {
    const tempQ = q;
    q = [];

    const level: number[] = [];

    for (let i = 0; i < tempQ.length; i += 1) {
      const node = tempQ[i];
      level.push(node.val);

      if (node.left !== null) q.push(node.left);
      if (node.right !== null) q.push(node.right);
    }

    solutions.push(level);
  }

  return solutions;
}
