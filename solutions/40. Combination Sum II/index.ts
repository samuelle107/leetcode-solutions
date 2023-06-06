function combinationSum2(candidates: number[], target: number): number[][] {
  const solutions: number[][] = [];
  candidates = candidates.sort((a, b) => a - b);

  function backtrack(cumSum: number, acc: number[], start: number) {
    if (cumSum >= target) {
      if (cumSum === target) {
        solutions.push([...acc]);
      }

      return;
    }

    for (let i = start; i < candidates.length; i += 1) {
      const candidate = candidates[i];
      const prev = candidates[i - 1];

      if (start === i || candidates[i] !== prev) {
        acc.push(candidate);
        backtrack(cumSum + candidate, acc, i + 1);
        acc.pop();
      }
    }
  }

  backtrack(0, [], 0);

  return solutions;
}
