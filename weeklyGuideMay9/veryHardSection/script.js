"use strict";

// DONE 
 const leastCoins = (coins, amount) => {
    if (amount < 1) {
      return 0;
    }
  
    const cache = Array(amount + 1);
    cache.fill(0);
  
    return coinChange(coins, amount, cache);
  }
  
  const coinChange = (coins, remainder, cache) => {

    if (remainder < 0) {
      return -1;
    }
  
    if (remainder === 0) {
      return 0;
    }
  
    if (cache[remainder] !== 0) {
      return cache[remainder];
    }

    let minimum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      const changeResult = coinChange(coins, remainder - coin, cache);
  
      if (changeResult >= 0 && changeResult < minimum) {
        minimum = 1 + changeResult;
      }
    }
  
    cache[remainder] = (minimum === Number.MAX_SAFE_INTEGER) ? -1 : minimum;
  
    return cache[remainder];
  }
  

  console.log(leastCoins([1,2,5],11));
  console.log(leastCoins([2],3));