import { TreeNode } from "../../types/binary-tree";

/**
 * Time - O(N)
 * Space - O(N)
 * @param root
 * @param low
 * @param high
 * @returns
 */
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) return 0;

  /**
   * Val is the root's val if the root val is between the low and high range, inclusively.
   * Otherwise, it is 0.
   * */
  const val = low <= root.val && root.val <= high ? root.val : 0;

  return (
    rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high) + val
  );
}
