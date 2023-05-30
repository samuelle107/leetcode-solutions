function isOdd(n: number): boolean {
  return n % 2 !== 0;
}

/**
 * If both the low and high are odd, then the number of odd numbers will be ((high - low) / 2) + 1 rounded up
 * Otherwise, it will just be (high - low) / 2, rounded up
 * @param low - lower range
 * @param high - higher range
 * @returns the number of odd nmbers between the range, inclusive
 */
function countOdds(low: number, high: number): number {
  const adder = isOdd(low) && isOdd(high) ? 1 : 0;

  return Math.ceil((high - low) / 2) + adder;
}
