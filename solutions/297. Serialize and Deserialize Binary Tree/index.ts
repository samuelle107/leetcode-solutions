import { TreeNode } from "../../types/binary-tree";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root === null) return "[]";

  const solution: (number | null)[] = [];
  let q: (TreeNode | null)[] = [];

  q.push(root);

  // Level BFS
  while (q.length) {
    const tempQ = q;
    q = [];

    for (let i = 0; i < tempQ.length; i += 1) {
      const curr = tempQ[i];

      if (curr === null) {
        solution.push(null);

        continue;
      } else {
        solution.push(curr.val);
      }

      q.push(curr.left);
      q.push(curr.right);
    }
  }

  return JSON.stringify(solution);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  let stream: (number | null)[] = [];
  const arr = JSON.parse(data);

  if (Array.isArray(arr)) {
    if (arr.length === 0) return null;

    stream = arr;
  }

  const rVal = stream[0];

  if (rVal === null) return null;

  const root = new TreeNode(rVal);
  // Root has already been added, so start at 1
  let i = 1;
  let q: (TreeNode | null)[] = [root];

  // Slightly modified BFS
  while (q.length) {
    const node = q.shift();

    if (!node) continue;

    const lVal = stream[i];
    const rVal = stream[i + 1];

    const leftNode = lVal !== null ? new TreeNode(lVal) : null;
    const rightNode = rVal !== null ? new TreeNode(rVal) : null;

    node.left = leftNode;
    node.right = rightNode;

    q.push(leftNode);
    q.push(rightNode);

    i += 2;
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
