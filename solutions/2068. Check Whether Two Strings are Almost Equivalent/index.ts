function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const word1Map = new Map<string, number>();
  const word2Map = new Map<string, number>();
  const charSet = new Set<string>();

  for (let i = 0; i < word1.length; i += 1) {
    const c1 = word1[i];
    const c2 = word2[i];

    charSet.add(c1);
    charSet.add(c2);

    if (word1Map.has(c1)) {
      word1Map.set(c1, word1Map.get(c1)! + 1);
    } else {
      word1Map.set(c1, 1);
    }

    if (word2Map.has(c2)) {
      word2Map.set(c2, word2Map.get(c2)! + 1);
    } else {
      word2Map.set(c2, 1);
    }
  }

  const charArr = Array.from(charSet);

  for (let i = 0; i < charArr.length; i += 1) {
    const currChar = charArr[i];

    const diff = Math.abs(
      (word1Map.get(currChar) ?? 0) - (word2Map.get(currChar) ?? 0)
    );

    if (diff > 3) return false;
  }

  return true;
}
