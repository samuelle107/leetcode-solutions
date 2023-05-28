// 1; // 1

// 2; // 2

// 3; // 3
// 1 + 1 + 1;
// 1 + 2;
// 2 + 1;

// 4; // 5

// 1 + 1 + 1 + 1;

// 1 + 1 + 2;
// 2 + 1 + 1;
// 1 + 2 + 1;

// 2 + 2;

// 5; // 8 => 3 paths with "2s"
// 1 + 1 + 1 + 1 + 1;

// 2 + 1 + 1 + 1;
// 1 + 2 + 1 + 1;
// 1 + 1 + 2 + 1;
// 1 + 1 + 1 + 2;

// 1 + 2 + 2;
// 2 + 1 + 2;
// 2 + 2 + 1;

// 6; // choose(6, 0)
// 1 + 1 + 1 + 1 + 1 + 1;

// // choose (5, 1)
// 2 + 1 + 1 + 1 + 1;
// 1 + 2 + 1 + 1 + 1;
// 1 + 1 + 2 + 1 + 1;
// 1 + 1 + 1 + 2 + 1;
// 1 + 1 + 1 + 1 + 2;

// // Choose (4, 2)
// 2 + 2 + 1 + 1;
// 2 + 1 + 2 + 1;
// 2 + 1 + 1 + 2;
// 1 + 2 + 2 + 1;
// 1 + 2 + 1 + 2;
// 1 + 1 + 2 + 2;

// // Choose (3, 3)
// 2 + 2 + 2;

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;

  let fac = n;
  for (let i = n - 1; i >= 1; i -= 1) {
    fac = fac * i;
  }

  return fac;
}

function choose(n: number, r: number): number {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function getDistinctNumberOfSteps(n: number): number {
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
