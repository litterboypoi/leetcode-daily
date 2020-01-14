/**
 * 121. 买卖股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxprofit = 0
  let min = Infinity
  for (let price of prices) {
      if (price < min) {
          min = price
      } else if (price - min > maxprofit) {
          maxprofit = price - min
      }
  }
  return maxprofit
};
// 动态规划法
var maxProfit_2 = function(prices) {
  let res = 0
  let min = Infinity
  for (let price of prices) {
      min = Math.min(price, min)
      res = Math.max(res, price - min)
  }
  return res
};

/**
 * 53. 最大子序和
 * https://leetcode-cn.com/problems/maximum-subarray/submissions/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let sum = 0
  let res = nums[0]
  for (let num of nums) {
      if (sum > 0) {
          sum += num
      } else {
          sum = num
      }
      res = Math.max(sum, res)
  }
  return res
};
