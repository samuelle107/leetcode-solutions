const memo = new Map();

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

function choose(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

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
