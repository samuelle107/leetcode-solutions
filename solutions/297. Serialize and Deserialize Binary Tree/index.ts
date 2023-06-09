import { TreeNode } from "../../types/binary-tree";

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  if (root === null) return "[]";

  const solutions: (number | null)[] = [];
  let q: (TreeNode | null)[] = [];

  q.push(root);

  while (q.length) {
    const tempQ = q;
    q = [];

    for (let i = 0; i < tempQ.length; i += 1) {
      const node = tempQ[i];

      solutions.push(node?.val ?? null);

      if (!node) continue;

      q.push(node.left);
      q.push(node.right);
    }
  }

  return JSON.stringify(solutions);
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const arr = JSON.parse(data);

  if (arr.length === 0) return null;

  const root = new TreeNode(arr[0]);
  let q: (TreeNode | null)[] = [root];
  let i = 1;

  while (q.length) {
    const node = q.shift();

    // Node can be null or undefined (undefined if arr cannot shift anymore)
    if (!node) continue;

    // Make sure to not get burnt by doing !arr[i]
    const left = arr[i] !== null ? new TreeNode(arr[i]) : null;
    const right = arr[i + 1] !== null ? new TreeNode(arr[i + 1]) : null;

    node.left = left;
    node.right = right;

    q.push(left);
    q.push(right);

    i += 2;
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
