function firstUniqChar(s: string): number {
  const charMap = new Map<string, number>();
  const charMapIndex = new Map<string, number>();

  for (let i = 0; i < s.length; i += 1) {
    const curr = s[i];

    if (charMap.has(curr)) {
      charMap.set(curr, charMap.get(curr)! + 1);
    } else {
      charMap.set(curr, 1);
      charMapIndex.set(curr, i);
    }
  }

  const char = Array.from(charMap).find(([_char, count]) => {
    return count === 1;
  });

  if (!char) return -1;

  return charMapIndex.get(char[0])!;
}
