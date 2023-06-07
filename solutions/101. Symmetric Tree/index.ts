/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from "../../types/binary-tree";

function isSymmetric(root: TreeNode | null): boolean {
  function isMirrored(n1: TreeNode | null, n2: TreeNode | null) {
    if (n1 === null && n2 === null) return true;
    if (n1 === null || n2 === null) return false;

    return (
      n1.val === n2.val &&
      isMirrored(n1.left, n2.right) &&
      isMirrored(n1.right, n2.left)
    );
  }

  return isMirrored(root, root);
}
