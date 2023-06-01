function subsets(nums: number[]): number[][] {
  const solutions: number[][] = [];

  function backtrack(index: number, curr: number[]): void {
    if (index === nums.length) {
      solutions.push([...curr]);

      return;
    }

    const num = nums[index];

    curr.push(num);
    backtrack(index + 1, curr);
    curr.pop();

    backtrack(index + 1, curr);
  }

  backtrack(0, []);

  return solutions;
}
