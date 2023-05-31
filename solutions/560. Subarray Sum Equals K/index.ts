// Definitely not optimal.
// Time - O(N^3)
// function subarraySum(nums: number[], k: number): number {
//   let counter = 0;

//   // Generate all sub arrays
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i; j < nums.length; j += 1) {
//       if (j >= i) {
//         // These two operations are super expensive, adding an extra O(N) loop
//         const subArray = nums.slice(i, j + 1);
//         const subSum = subArray.reduce((prev, curr) => prev + curr, 0);

//         if (subSum === k) counter += 1;
//       }
//     }
//   }

//   return counter;
// }

// Better, but still could be improved
// Use a running sum for every sub array
// Time O(N^2)
// function subarraySum(nums: number[], k: number): number {
//   let counter = 0;

//   // Generate all sub arrays
//   for (let i = 0; i < nums.length; i += 1) {
//     let sum = 0;

//     for (let j = i; j < nums.length; j += 1) {
//       sum += nums[j];

//       if (sum === k) counter += 1;
//     }
//   }

//   return counter;
// }

function subarraySum(nums: number[], k: number): number {
  let counter = 0;
  let cumSum = 0;

  /** Stores the cumulative sum and the frequency */
  const cumulativeSumFreq = new Map<number, number>();
  // Base case (The sum of the empty set is equal to 0, and is present when initializing)
  cumulativeSumFreq.set(0, 1); // Initialize with 0 cumulative sum

  for (let i = 0; i < nums.length; i += 1) {
    // Cum sum up to i
    cumSum += nums[i];

    // Remove the prefix sum up until the current sum.
    // If such a cum sum exists, then there exists a subarray with sum 'k'
    // starting from the postion after the last occurence of the previous cum sum
    // EX: nums = [1, -1, 1, 1, 1, 1], k = 3
    // At index 4, the cum sum is 4.
    // cumSum - k = 4 - 3 = 1
    // There are two occurences where the previous cum sums equal 1
    // Those are at index 0 and indexes 0 to 2
    // Removing those subarrays yields subarrays that sum up to k
    // [_, -1, 1, 1, 1, 1] and [_, _, _, 1, 1, 1]
    if (cumulativeSumFreq.has(cumSum - k)) {
      counter += cumulativeSumFreq.get(cumSum - k)!;
    }

    // Set/Update cum sum freq
    if (cumulativeSumFreq.has(cumSum)) {
      cumulativeSumFreq.set(cumSum, cumulativeSumFreq.get(cumSum)! + 1);
    } else {
      cumulativeSumFreq.set(cumSum, 1);
    }
  }

  return counter;
}
