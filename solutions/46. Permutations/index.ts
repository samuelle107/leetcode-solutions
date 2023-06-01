function permute(nums: number[]): number[][] {
  const solutions: number[][] = [];

  function backtrack(curr: number[], remainingNums: Set<number>) {
    if (remainingNums.size === 0) {
      solutions.push([...curr]);

      return;
    }

    const arr = Array.from(remainingNums);

    for (let i = 0; i < arr.length; i += 1) {
      const nextNum = arr[i];

      remainingNums.delete(nextNum);
      curr.push(nextNum);

      backtrack(curr, remainingNums);

      remainingNums.add(nextNum);
      curr.pop();
    }
  }

  backtrack([], new Set(nums));

  return solutions;
}

const nums = [1, 2, 3];

console.log(permute(nums));
