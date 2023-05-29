function findKthPositive(arr: number[], k: number): number {
  const uniqueArr = new Set(arr);
  const missing: number[] = [];

  for (let i = 1; i <= 10000; i += 1) {
    if (!uniqueArr.has(i)) missing.push(i);
  }

  return missing[k - 1];
}
