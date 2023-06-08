import { MinPriorityQueue } from "@datastructures-js/priority-queue";

/**
 * Time - O(log(K))
 * Space - O(K)
 * @param nums
 * @param k
 * @returns
 */
function findKthLargest(nums: number[], k: number): number {
  const q = new MinPriorityQueue<number>();

  for (let i = 0; i < nums.length; i += 1) {
    q.enqueue(nums[i]);

    // This will m ake the q always have the top k elements in ascending order
    if (q.size() > k) {
      // Popping removes the smallest number (in a min priority queue)
      q.dequeue();
    }
  }

  const res = q.dequeue();

  if (typeof res === "number") {
    return res;
  }

  return res.element;
}
