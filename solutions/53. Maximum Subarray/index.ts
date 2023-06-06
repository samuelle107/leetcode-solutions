/**
 * Kadane's algorithm
 * @param nums
 * @returns
 */
function maxSubArray(nums: number[]): number {
  let currSum = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i += 1) {
    if (currSum < 0) {
      currSum = 0;
    }

    currSum += nums[i];

    max = Math.max(max, currSum);

    console.log(i, currSum, max);
  }

  return max;
}
