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

function groupAnagrams(strs: string[]): string[][] {
  const solution = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i];

    let found = false;

    solution.forEach((v, k) => {
      if (found) return;

      if (isAnagram(str, k)) {
        found = true;
        solution.get(k)!.push(str);
      }
    });

    if (found === false) {
      solution.set(str, [str]);
    }
  }

  return Array.from(solution).map((item) => item[1]);
}
