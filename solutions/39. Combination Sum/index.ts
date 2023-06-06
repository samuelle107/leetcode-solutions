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

    for (let i = 0; i < candidates.length; i += 1) {
      const candidate = candidates[i];
      const prev = acc[acc.length - 1] ?? 0;

      // Inherently makes "acc" sorted
      // Also makes it so that combinations that work, but are not sorted are not added
      // Prevents perms of the same set from being added
      if (candidate >= prev) {
        acc.push(candidate);
        backtrack(cumSum + candidate, acc);
        acc.pop();
      }
    }
  }

  backtrack(0, []);

  return solutions;
}

const candidates = [2, 3, 6, 7],
  target = 7;

console.log(combinationSum(candidates, target));
