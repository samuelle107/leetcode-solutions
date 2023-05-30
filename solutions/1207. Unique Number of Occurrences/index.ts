function uniqueOccurrences(arr: number[]): boolean {
  const freq = new Map<number, number>();

  for (let i = 0; i < arr.length; i += 1) {
    const curr = arr[i];

    if (freq.has(curr)) {
      freq.set(curr, freq.get(curr)! + 1);
    } else {
      freq.set(curr, 1);
    }
  }

  const uniqueOccurrences = new Set(
    Array.from(freq).map((item) => {
      return item[1];
    })
  );

  return Array.from(uniqueOccurrences).length === Array.from(freq).length;
}
