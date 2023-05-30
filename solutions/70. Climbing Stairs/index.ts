// Naive choose method (expensive because of factorial)
// function factorial(n: number): number {
//   if (n === 0 || n === 1) return 1;

//   let fac = n;
//   for (let i = n - 1; i >= 1; i -= 1) {
//     fac = fac * i;
//   }

//   return fac;
// }

// function choose(n: number, r: number): number {
//   return factorial(n) / (factorial(r) * factorial(n - r));
// }

// function getDistinctNumberOfSteps(n: number): number {
//   const low = Math.ceil(n / 2);
//   let start = n;
//   let r = 0;

//   let distinct = 0;

//   while (start >= r) {
//     distinct += choose(start, r);

//     r += 1;
//     start -= 1;
//   }

//   return distinct;
// }

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
