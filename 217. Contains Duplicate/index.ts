function containsDuplicate(nums: number[]): boolean {
  const unique = new Set<number>();

  for (let i = 0; i < nums.length; i += 1) {
    const curr = nums[i];

    if (unique.has(curr)) return true;

    unique.add(curr);
  }

  return false;
}
