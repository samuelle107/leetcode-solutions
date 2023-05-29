function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  // Left can be equal to right, but left cannot be greater than right,
  // otherwise the search range is invalid
  while (l <= r) {
    // Find the mid-point between left and right
    const mid = Math.floor((l + r) / 2);

    if (nums[mid] === target) return mid;

    // If the target is greater than the mid,
    // that means the target must be in the right half
    // Keep the right pointer the same,
    // but move the left pointer to the right of the mid (mid was already checked)
    if (target > nums[mid]) l = mid + 1;

    // If the target is less than the mid,
    // that means the target must be in the left half.
    // Keep the left pointer the same,
    // but move the right pointer to the left of the mid (mid was already checked)
    if (target < nums[mid]) r = mid - 1;
  }

  return -1;
}
