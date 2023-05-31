// Inefficient
// Time - O(N * M)
// Space O(1)
// KMP algorithm and Boyer Moore algorithm can be looked into
function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i += 1) {
    const currWord = haystack.slice(i, i + needle.length);

    if (currWord.length !== needle.length) continue;

    if (currWord === needle) return i;
  }

  return -1;
}
