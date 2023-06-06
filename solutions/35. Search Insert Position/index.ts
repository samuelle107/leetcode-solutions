function searchInsert(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  let m = -1;

  while (l <= r) {
    m = Math.floor((l + r) / 2);

    if (nums[m] === target) return m;

    if (target > nums[m]) l = m + 1;

    if (target < nums[m]) r = m - 1;
  }

  return l;
}
