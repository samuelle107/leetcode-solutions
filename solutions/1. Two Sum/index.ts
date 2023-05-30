function twoSum(nums: number[], target: number): number[] {
  // numbers is going to always be at least two numbers and the solution will always exist
  // Need to store difference inside an object.
  // K will be the difference between the current num and the target, value will be the index
  // Essentially, we will save the difference so we can see when we see it again in the future.

  const diff = new Map<number, number>();

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];
    const currDiff = target - num;
    const prevDiffIndex = diff.get(num);

    if (prevDiffIndex !== undefined) {
      return [prevDiffIndex, i];
    }

    diff.set(currDiff, i);
  }

  return [];
}
