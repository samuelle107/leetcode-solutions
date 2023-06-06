function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0 && n === 1) {
    return n;
  }

  const trustedByMap = new Map<number, number[]>();
  const trustMap = new Map<number, number[]>();

  for (let i = 0; i < trust.length; i += 1) {
    trustedByMap.set(trust[i][1], [
      ...(trustedByMap.get(trust[i][1]) ?? []),
      trust[i][0],
    ]);

    trustMap.set(trust[i][0], [
      ...(trustMap.get(trust[i][0]) ?? []),
      trust[i][1],
    ]);
  }

  const arr = Array.from(trustedByMap);

  for (let i = 0; i < arr.length; i += 1) {
    const potential = arr[i];

    if (
      potential[1].length === n - 1 &&
      trustMap.get(potential[0]) === undefined
    ) {
      return potential[0];
    }
  }

  return -1;
}

const n = 4,
  trust = [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ];
console.log(findJudge(n, trust));
