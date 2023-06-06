function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.sort((a, b) => a - b);
  const solutions: number[][] = [];

  function backtrack(cumSum: number, acc: number[]) {
    if (cumSum >= target) {
      if (cumSum === target) {
        solutions.push([...acc]);
      }

      return;
    }

    // With
    for (let i = 0; i < candidates.length; i += 1) {
      const candidate = candidates[i];

      acc.push(candidate);

      backtrack(cumSum + candidate, acc);

      acc.pop();
    }
  }

  const freq = new Map<number, number>();

  for (let i = 0; i < candidates.length; i += 1) {
    const curr = candidates[i];

    freq.set(curr, (freq.get(curr) ?? 0) + 1);
  }

  backtrack(0, []);

  const sortedSolutions = solutions.map((solution) =>
    solution.sort((a, b) => a - b)
  );

  const unique = new Set<string>();

  for (let i = 0; i < sortedSolutions.length; i += 1) {
    const solution = sortedSolutions[i];

    unique.add(JSON.stringify(solution));
  }

  return Array.from(unique).map((solution) => JSON.parse(solution) as number[]);
}

const candidates = [2, 3, 6, 7],
  target = 7;

console.log(combinationSum(candidates, target));
