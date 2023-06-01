function parse(nums: number[]): string {
  return nums.join(".");
}

function permuteUnique(nums: number[]): number[][] {
  const solutions = new Set<string>();

  function backtrack(curr: number[], remaining: number[]) {
    if (remaining.length === 0) {
      solutions.add(parse(curr));
      return;
    }

    for (let i = 0; i < remaining.length; i += 1) {
      const num = remaining[i];
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

  return Array.from(solutions).map((solution) =>
    solution.split(".").map((item) => Number(item))
  );
}
