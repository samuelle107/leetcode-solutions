function maximumWealth(accounts: number[][]): number {
  let max = 0;

  for (let i = 0; i < accounts.length; i += 1) {
    const account = accounts[i];
    const wealth = account.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    max = Math.max(max, wealth);
  }

  return max;
}
