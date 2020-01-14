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

/**
 * 198. 打家劫舍
 * https://leetcode-cn.com/problems/house-robber/submissions/
 * f(k) = max(f(k - 1), f(k - 2) + nums[k])
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let prevMax = 0
  let curMax = 0
  for (let num of nums) {
      let temp = curMax
      curMax = Math.max(curMax, prevMax + num)
      prevMax = temp
  }
  return curMax
};

/**
 * 384. 打乱数组
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums
};

/**
* Resets the array to its original configuration and return it.
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums
};

/**
* Returns a random shuffling of the array.
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  let copy = [...this.nums]
  for (let i = 0; i < copy.length; i++) {
      let r = Math.floor(Math.random() * copy.length);
      [copy[i], copy[r]] = [copy[r], copy[i]]
  }
  return copy
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/


/**
 * 412. Fizz Buzz
 * https://leetcode-cn.com/problems/fizz-buzz/
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let result = []
  for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) {
          result.push('FizzBuzz')
      } else if (i % 5 === 0) {
          result.push('Buzz')
      } else if (i % 3 === 0) {
          result.push('Fizz')
      } else {
          result.push(`${i}`)
      }
  }
  return result
};
