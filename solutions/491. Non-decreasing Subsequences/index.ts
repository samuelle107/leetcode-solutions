function findSubsequences(nums: number[]): number[][] {
  const subSequences = new Set<string>();

  function backtrack(i: number, lastLargestNum: number, currSeq: number[]) {
    if (nums.length === i) {
      if (currSeq.length >= 2) {
        subSequences.add(JSON.stringify(currSeq));
      }

      return;
    }

    const curr = nums[i];

    // Backtracking
    // At each index, the paths are:
    // Explore with the current number
    // or explore without the current number
    // Because there are two choices at every index
    // This runs in O(N^2)
    if (curr >= lastLargestNum) {
      currSeq.push(curr);
      backtrack(i + 1, curr, currSeq);
      currSeq.pop();
    }

    backtrack(i + 1, lastLargestNum, currSeq);
  }

  backtrack(0, -101, []);

  return Array.from(subSequences).map((subSeq) => JSON.parse(subSeq));
}
