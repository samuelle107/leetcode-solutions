/**
 * Time - O(N * log(N)) + O(K)
 * Space - O(N)
 * @param nums
 * @param k
 * @returns
 */
function topKFrequent(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  return Array.from(freq)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, k)
    .map((item) => item[0]);
}

const nums = [1, 1, 1, 2, 2, 3],
  k = 2;

console.log(topKFrequent(nums, 2));
