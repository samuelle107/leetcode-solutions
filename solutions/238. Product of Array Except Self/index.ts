function getPreSum(nums: number[]) {
  const res: number[] = [1];

  for (let i = 0; i < nums.length - 1; i += 1) {
    res.push(nums[i] * res[res.length - 1]);
  }

  return res;
}

function productExceptSelf(nums: number[]): number[] {
  const arr1: number[] = getPreSum(nums);
  let arr2: number[] = getPreSum(nums.reverse()).reverse();

  const result: number[] = [];

  for (let i = 0; i < nums.length; i += 1) {
    result.push(arr1[i] * arr2[i]);
  }

  return result;
}
