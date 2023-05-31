// function maxArea(height: number[]): number {
//   let max = 0;

//   let l = 0;
//   let r = height.length - 1;

//   while (l <= r) {
//     const minHeight = Math.min(height[l], height[r]);
//     const width = r-l
//     const area = minHeight * (width);

//     max = Math.max(max, area);
//     // Bug here. Should be comparing the curr. left and right heights and increment the lower height of the two
//     if (height[l + 1] >= height[l]) {
//       l += 1;
//     } else {
//       r -= 1;
//     }
//   }

//   return max;
// }

/**
 * Greedy
 * @param height - y axis heights
 * @returns the max area
 */
function maxArea(height: number[]): number {
  let max = 0;
  let l = 0;
  let r = height.length - 1;

  while (l <= r) {
    const minHeight = Math.min(height[l], height[r]);
    const area = minHeight * (r - l);

    max = Math.max(max, area);

    // If the left height is smaller than the right,
    // Move the left height over to try to see if there is a taller left height,
    // Otherwise do the reverse on the right side
    if (height[l] <= height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }

  return max;
}
