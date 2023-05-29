// function findKthPositive(arr: number[], k: number): number {
//   const uniqueArr = new Set(arr);
//   const missing: number[] = [];

//   for (let i = 1; i <= 10000; i += 1) {
//     if (!uniqueArr.has(i)) missing.push(i);
//   }

//   return missing[k - 1];
// }

// 1, 9, k = 4

//

// Naive solution
// function findKthPositive(arr: number[], k: number): number {
//   let missing = 0;
//   let j = 0;
//   let tmp = k;

//   while (tmp > 0) {
//     missing += 1;

//     if (missing !== arr[j]) {
//       tmp -= 1;
//     } else {
//       // only increment j when the missing matches the current
//       j += 1;
//     }

//     console.log(missing, j, arr[j], tmp);
//   }

//   return missing;
// }

/**
 * Time - O(n)
 * Space - O(1)
 * @param arr
 * @param k
 * @returns
 */
function findKthPositive(arr: number[], k: number): number {
  /** Keeps track of the real numbers from 1 -> the limit */
  let curr = 0;
  /** The index of arr. Only increases if curr and arr[j] are equal */
  let j = 0;
  /** The number of missing numbers. Used to keep looping until missingNumbersSoFar matches k */
  let missingNumsSoFar = 0;

  // When loop will terminate when missingNums === k. Curr will be missing number when missingNumsSoFar === k
  while (missingNumsSoFar < k) {
    curr += 1;

    // If the current number (correct order) does not match the array element,
    // then that means that there are missing numbers
    // Increase the count of missing numbers and continue the iteration, increasing curr again and checking again
    // This will "fill up" the buffer of the missing numbers and keep track of the current missing number
    if (curr !== arr[j]) {
      missingNumsSoFar += 1;
    } else {
      // All is well if the current number matches arr[j].
      // Keep incrementing J until it finds the next missing number

      j += 1;
    }
  }

  return curr;
}
