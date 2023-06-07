function majorityElement(nums: number[]): number {
  const freq = new Map<number, number>();
  let highest = 0;

  for (let i = 0; i < nums.length; i += 1) {
    const num = nums[i];

    freq.set(num, (freq.get(num) ?? 0) + 1);

    if (freq.get(num)! > (freq.get(highest) ?? 0)) {
      highest = num;
    }
  }

  return highest;
}
