/**
 * Time - O(N log(N))
 * Space- O(N)
 * @param str
 * @returns
 */
function sortAlphabet(str: string): string {
  return [...str].sort().join("");
}

/**
 * Space - O(N)
 * Time - O(N)
 * @param s
 * @param t
 * @returns
 */
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

/**
 * Time - O(N * K * log(K))
 * Space - O(N * K), where K = max length of a string
 * @param strs
 * @returns
 */
function groupAnagrams(strs: string[]): string[][] {
  const solution = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i += 1) {
    const str = strs[i];
    const sortedStr = sortAlphabet(str);

    if (solution.get(sortedStr)) {
      solution.get(sortedStr)!.push(str);
    } else {
      solution.set(sortedStr, [str]);
    }
  }

  return Array.from(solution).map((item) => item[1]);
}
