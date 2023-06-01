function subsetXORSum(nums: number[]): number {
  let solution = 0;

  function backtrack(index: number, curr: number[], currXORSum: number) {
    // Terminates when out of bound
    // When terminating, the current sum should be the running sum of the permuted nums
    if (index === nums.length) {
      solution += currXORSum;

      return;
    }

    const num = nums[index];

    // Backtracking
    // Explore all possible paths
    // In this case, either include or exclude current value
    curr.push(num);
    backtrack(index + 1, curr, currXORSum ^ num);
    curr.pop();

    backtrack(index + 1, curr, currXORSum);
  }

  backtrack(0, [], 0);

  return solution;
}
