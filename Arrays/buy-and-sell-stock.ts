//You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

function maxProfit(prices: number[]): number {
  let mx : number = 0;
  let N = prices.length;

  for(let i : number = 0; i < N-1; ++i) {
      for(let j : number = i + 1; j < N; ++j) {
          let profit : number = prices[j] - prices[i];
          mx = Math.max(mx, profit);
      }
  }

  return mx;
};