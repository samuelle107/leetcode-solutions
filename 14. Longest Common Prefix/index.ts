/**
 *
 * @param strs list of strings from 1 to 200
 * @param index current index of the string from 1 to 200
 * @returns the character if all the strings at position index is a match, otherwise undefined
 */
function areCharsAtICommon(strs: string[], index: number): string | undefined {
  // Assume there is a character at the first str's current position.
  // If there is no character, then it is not possible for this position to be part of the longest prefix
  const baseChar: string | undefined = strs[0][index];

  if (baseChar === undefined) return undefined;

  const isMatch = strs.every((str) => str[index] === baseChar);

  return isMatch ? baseChar : undefined;
}

/**
 * Runtime - O(max length of Strs)
 * Space - O(max length of N * N)
 * @param strs list of strings from 1 to 200
 * @returns the longest common prefix
 */
function longestCommonPrefix(strs: string[]): string {
  // Stores the common prefix
  const chars: string[] = [];

  // Loop to 200 because that's the range from LeetCode
  for (let i = 0; i <= 200; i += 1) {
    const val = areCharsAtICommon(strs, i);

    if (val === undefined) {
      break;
    } else {
      chars.push(val);
    }
  }

  // Concat the char arr into a string
  return chars.join("");
}
