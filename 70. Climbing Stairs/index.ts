function fib(n: number): number {
  let p1 = 1;
  let p2 = 2;
  let res = 1;

  if (n <= 2) {
    return res;
  }

  for (let i = 3; i < n; i += 1) {
    res = p1 + p2;
    p1 = p2;
    p2 = res;
  }

  return res;
}

function climbStairs(n: number): number {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return fib(n + 1);
}
