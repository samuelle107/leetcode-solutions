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

import { MaxPriorityQueue } from "@datastructures-js/priority-queue";

function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  const heap = new MaxPriorityQueue<number>((key) => freq.get(key)!);

  freq.forEach((value, key) => {
    heap.push(key);
  });

  console.log(heap.toArray());

  const arr: number[] = [];

  for (let i = 0; i < k; i += 1) {
    arr.push(heap.pop());
  }

  return arr;
}
