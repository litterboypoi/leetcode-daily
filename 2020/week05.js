/**
 * 300. 最长上升子序列__动态规划
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 思路：设dp(i)为以nums[i]为结尾的最长子序列（其中0<=i<n）,dp(i) = Max(dp(j)) + 1 （其中0<=j<i,nums[j]<nums[i]）
 * LIS = Max(dp(i))
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let map = new Map()
  function dp(n) {
      if (map.has(n)) {
          return map.get(n)
      }
      if (n === 0) {
          map.set(0,1)
          return 1
      }
      let res = 1
      for (let i = 0; i < n; i++) {
          if (nums[i] < nums[n]) {
              res = Math.max(res, dp(i) + 1)
          }
      }
      map.set(n, res)
      return res
  }
  let max = 0
  for (let i = 0; i < nums.length; i++) {
      max = Math.max(max, dp(i))
  }
  return max
};