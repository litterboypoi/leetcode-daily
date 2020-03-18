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

/**
 * 836. 矩形重叠
 * https://leetcode-cn.com/problems/rectangle-overlap/
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
// 排除不相交的情况
var isRectangleOverlap = function(rec1, rec2) {
  if(rec2[1] >= rec1[3] || rec1[1] >= rec2[3]){
   return false;
  }
  if(rec1[0] >= rec2[2] || rec1[2] <= rec2[0]){
      return false;
    }
  return true;
};
// 如果这两个矩形重叠那么重叠的部分也是一个矩形
// 那么这代表了两个矩形与 xx 轴平行的边（水平边）投影到 xx 轴上时会有交集，与 yy 轴平行的边（竖直边）投影到 yy 轴上时也会有交集。
var isRectangleOverlap = function(rec1, rec2) {
  return (Math.min(rec1[2], rec2[2]) > Math.max(rec1[0], rec2[0]) &&
    Math.min(rec1[3], rec2[3]) > Math.max(rec1[1], rec2[1]));
};

/**
 * 最接近的三数之和
 * https://leetcode-cn.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let minAbs = Infinity
  let sum = 0
  for (let i = 0; i < nums.length - 2; i++) {
      let l = i + 1
      let r = nums.length - 1
      while( l < r) {
          let temp = nums[i] + nums[l] + nums[r]
          if (Math.abs(temp - target) < minAbs) {
              minAbs = Math.abs(temp - target)
              sum = temp
          }
          if (temp > target) {
              r--
          } else if (temp < target) {
              l++
          } else {
              return temp
          }
      }
  }
  return sum
};
