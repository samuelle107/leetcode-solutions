import { TreeNode } from "../../types/binary-tree";

function getAdjNodes(root: TreeNode) {
  const nodes: TreeNode[] = [];

  if (root.left) nodes.push(root.left);
  if (root.right) nodes.push(root.right);

  return nodes;
}

function maxDepth(root: TreeNode | null): number {
  let depth = 0;
  let q: TreeNode[] = [];
  const visited = new Set<TreeNode>();

  if (!root) return depth;

  q.push(root);
  visited.add(root);

  while (q.length > 0) {
    // Slightly modified BFS.
    // The goal is to traverse a depth every iteration
    // At every depth, get the adj nodes of all of the nodes at depth n
    // Replace the q with the current iteration's adj nodes
    q = q.map((node) => getAdjNodes(node)).flat();

    for (let i = 0; i < q.length; i += 1) {
      const curr = q[i];

      if (!visited.has(curr)) {
        q.push(curr);
        visited.add(curr);
      }
    }

    depth += 1;
  }

  return depth;
}
