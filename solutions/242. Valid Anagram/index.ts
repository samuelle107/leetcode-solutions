function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sFreq = new Map<string, number>();
  const tFreq = new Map<string, number>();

  for (let i = 0; i < s.length; i += 1) {
    const sChar = s[i];
    const tChar = t[i];

    sFreq.set(sChar, (sFreq.get(sChar) ?? 0) + 1);
    tFreq.set(tChar, (tFreq.get(tChar) ?? 0) + 1);
  }

  const sArr = Array.from(sFreq);

  for (let i = 0; i < sArr.length; i += 1) {
    const [sChar, sFreq] = sArr[i];

    if (sFreq === tFreq.get(sChar)) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}
