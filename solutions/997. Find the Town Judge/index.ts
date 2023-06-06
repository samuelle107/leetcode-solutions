/**
 * Space - O(N)
 * Time - O(T + N), T is number of trusts, and N is number of people
 * @param n
 * @param trust
 * @returns
 */
function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0 && n === 1) {
    return n;
  }

  /** A map containing the number of times the person has been trusted */
  const trustedFreq = new Map<number, number>();
  /** A set of people that are trusted by others */
  const potentialJudges = new Set<number>();

  for (let i = 0; i < trust.length; i += 1) {
    const [trustee, trusted] = trust[i];

    trustedFreq.set(trusted, (trustedFreq.get(trusted) ?? 0) + 1);
    potentialJudges.add(trustee);
  }

  for (let [person, freq] of trustedFreq.entries()) {
    if (freq === n - 1 && !potentialJudges.has(person)) {
      return person;
    }
  }

  return -1;
}
