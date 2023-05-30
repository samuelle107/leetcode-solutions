/**
 * Space - O(n)
 * Time - O(n)
 * @param nums
 * @returns
 */
function runningSum(nums: number[]): number[] {
  const agg: number[] = [nums[0]];

  for (let i = 1; i < nums.length; i += 1) {
    agg[i] = agg[i - 1] + nums[i];
  }

  return agg;
}
