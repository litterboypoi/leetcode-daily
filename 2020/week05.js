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

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 113. 路径总和 II
 * https://leetcode-cn.com/problems/path-sum-ii/submissions/
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  let result = []
  function dfs(node, acc, path) {
      if (!node) {
          path.push(null)
          return
      }
      path.push(node.val)
      if (!node.left && !node.right) {
          if (acc === node.val) {
              result.push([...path])
          }
          return
      }
      dfs(node.left, acc - node.val, path)
      path.pop()
      dfs(node.right, acc - node.val, path)
      path.pop()
  }
  dfs(root, sum, [])
  return result
};

/**
 * 12. 整数转罗马数字
 * https://leetcode-cn.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  function fun(one, five, ten, num) {
      if (num === 4) {
          return one + five
      } else if (num === 9) {
          return one + ten
      } else if (num < 4) {
          return Array(num).fill(one).join('')
      } else {
          return five + Array(num - 5).fill(one).join('')
      }
  }
  let result = ''
  let map = {
      1: {one: 'I', five: 'V'},
      2: {one: 'X', five: 'L'},
      3: {one: 'C', five: 'D'},
      4: {one: 'M'}
  }
  let level = 1
  while (num !== 0) {
      let temp = num % 10
      num = Math.floor(num / 10)
      result = fun(map[level].one, map[level].five, map[level + 1] && map[level + 1].one, temp) + result
      level++
  }
  return result
};