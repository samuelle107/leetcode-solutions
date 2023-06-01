function permuteUnique(nums: number[]): number[][] {
  const solutions: number[][] = [];

  nums.sort((a, b) => a - b);

  function backtrack(curr: number[], remaining: number[]) {
    if (remaining.length === 0) {
      solutions.push([...curr]);
      return;
    }

    for (let i = 0; i < remaining.length; i += 1) {
      const num = remaining[i];

      if (num === remaining[i - 1]) continue;

      const newRemaining = [
        ...remaining.slice(0, i),
        ...remaining.slice(i + 1),
      ];

      curr.push(num);
      backtrack(curr, newRemaining);
      curr.pop();
    }
  }

  backtrack([], nums);

  return solutions;
}
