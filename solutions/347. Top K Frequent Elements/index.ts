// /**
//  * Time - O(N * log(N)) + O(K)
//  * Space - O(N)
//  * @param nums
//  * @param k
//  * @returns
//  */
// function topKFrequent(nums: number[], k: number): number[] {
//   const freq = new Map<number, number>();

//   for (let i = 0; i < nums.length; i += 1) {
//     const num = nums[i];

//     freq.set(num, (freq.get(num) ?? 0) + 1);
//   }

//   return Array.from(freq)
//     .sort((a, b) => {
//       return b[1] - a[1];
//     })
//     .slice(0, k)
//     .map((item) => item[0]);
// }

import { MinPriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const heap = new MinPriorityQueue<number>({
    priority: (val) => freq.get(val)!,
  });

  freq.forEach((value, key) => {
    heap.enqueue(key);

    if (heap.size() > k) heap.dequeue();
  });

  return heap
    .toArray()
    .reverse()
    .map((item) => {
      return typeof item === "number" ? item : item.element;
    });
}
