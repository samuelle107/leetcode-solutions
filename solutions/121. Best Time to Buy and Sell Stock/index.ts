function maxProfit(prices: number[]): number {
  let buy: number = prices[0];
  let sell: number = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i += 1) {
    const price = prices[i];

    if (price < buy) {
      buy = price;
      sell = price;
    }

    if (price > sell) {
      sell = price;
    }

    maxProfit = Math.max(maxProfit, sell - buy);
  }

  return maxProfit;
}

const prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
