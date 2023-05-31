const memo = new Map();

/**
 * Uses memoization to calculate n!
 * Space - O(n) (Trade off for efficient code)
 * Time - O(n)
 * @param n
 * @returns n!
 */
function factorial(n: number) {
  if (n === 0 || n === 1) {
    return 1;
  }

  if (memo.has(n)) {
    return memo.get(n);
  }

  const result = n * factorial(n - 1);
  memo.set(n, result);

  return result;
}

// https://www.cuemath.com/n-choose-k-formula/
function choose(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

// 4
// 4 choose 0 = 1
// 1 + 1 + 1 + 1

// 3 choose 1 = 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2

// 2 choose 2 = 1
// 2 + 2

/**
 * Intuition - When writing out the possible combinations, I found that the base case for every n was just taking n "1" steps.
 * For every "1" pair, it can be combined into a "2".
 * For every 2, you can move the 2 around to make a different path.
 * As a result, for every 2 you add, you can use the mathematical choose formula to calculate all the placements of 2s that you have
 * It can be stated as Σ C(n - r, r) where r starts at 0 and increases by until (n-r) = r
 * Using that formula at every iteration yields the number of paths that is possible using (n-r) "1"s and r "2"s.
 * Sum up every iteration yields the number of all possible paths
 * @param n
 * @returns
 */
function climbStairs(n: number): number {
  let start = n;
  let r = 0;

  let distinct = 0;

  while (start >= r) {
    distinct += choose(start, r);

    r += 1;
    start -= 1;
  }

  return distinct;
}
