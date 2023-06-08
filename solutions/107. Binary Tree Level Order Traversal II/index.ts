import { TreeNode } from "../../types/binary-tree";

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (root === null) return [];

  const solutions: number[][] = [];
  let q: TreeNode[] = [];

  q.push(root);

  while (q.length > 0) {
    const tempQ = q;
    q = [];

    const level: number[] = [];

    for (let i = 0; i < tempQ.length; i += 1) {
      const curr = tempQ[i];
      level.push(curr.val);

      if (curr.left !== null) q.push(curr.left);
      if (curr.right !== null) q.push(curr.right);
    }

    solutions.push(level);
  }

  return solutions.reverse();
}
