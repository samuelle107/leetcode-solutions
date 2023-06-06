const phone: Record<string, string[]> = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  const solutions: string[] = [];

  function backtrack(index: number, curr: string) {
    if (index === digits.length) {
      if (curr.length) {
        solutions.push(curr);
      }

      return;
    }

    const digit = digits.charAt(index);

    const alphas = phone[digit];

    for (let i = 0; i < alphas.length; i += 1) {
      const alpha = alphas[i];

      curr += alpha;
      backtrack(index + 1, curr);
      curr = curr.slice(0, curr.length - 1);
    }
  }

  backtrack(0, "");

  return solutions;
}

const digits = "23";

console.log(letterCombinations(digits));
