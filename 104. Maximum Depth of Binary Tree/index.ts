class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function getAdjNodes(root: TreeNode, depth: number) {
  const nodes: [TreeNode, number][] = [];

  if (root.left) nodes.push([root.left, depth + 1]);
  if (root.right) nodes.push([root.right, depth + 1]);

  return nodes;
}

function maxDepth(root: TreeNode | null): number {
  let depth = 0;
  const q: [TreeNode, number][] = [];
  const visited = new Set<TreeNode>();

  if (!root) return depth;

  q.push([root, 1]);
  visited.add(root);

  while (q.length > 0) {
    const node = q.pop()!;
    depth = Math.max(node[1], depth);
    const adjNodes = getAdjNodes(node[0], node[1]);

    for (let i = 0; i < adjNodes.length; i += 1) {
      const curr = adjNodes[i];

      if (!visited.has(curr[0])) {
        q.push(curr);
        visited.add(curr[0]);
      }
    }
  }

  return depth;
}
