/**
 * Space - O(N!)
 * Time - O(N!)
 * @param nums
 * @returns
 */
function permute(nums: number[]): number[][] {
  const solutions: number[][] = [];

  function backtrack(curr: number[], remainingNums: number[]) {
    if (remainingNums.length === 0) {
      solutions.push([...curr]);

      return;
    }

    const arr = Array.from(remainingNums);

    for (let i = 0; i < arr.length; i += 1) {
      const nextNum = arr[i];

      // Remove current element from remaining
      // Alternative to using Set to track remaining elements
      const newRemaining = [
        ...remainingNums.slice(0, i),
        ...remainingNums.slice(i + 1),
      ];

      curr.push(nextNum);
      backtrack(curr, newRemaining);
      curr.pop();
    }
  }

  backtrack([], nums);

  return solutions;
}
