function canMakeArithmeticProgression(arr: number[]): boolean {
  arr = arr.sort((a, b) => a - b);

  let isProgression = true;
  let diff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    const prev = arr[i - 1];
    const curr = arr[i];

    if (curr - prev !== diff) return false;
  }

  return isProgression;
}
