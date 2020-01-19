/**
 * 15. 三数之和
 * https://leetcode-cn.com/problems/3sum/
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  const res = []
  const resSet = new Set()
  for (let i = 1; i < nums.length - 1; i++) {
      let left = 0
      let right = nums.length - 1
      while(left < i && right > i) {
          let sum = nums[left] + nums[i] + nums[right]
          if (sum === 0) {
              if (!resSet.has(`${nums[left]},${nums[i]},${nums[right]}`)) {
                  res.push([nums[left], nums[i], nums[right]])
                  resSet.add(`${nums[left]},${nums[i]},${nums[right]}`)
              }
              right--
              left++
          } else if (sum > 0) {
              right--
          } else {
              left++
          }
      }
  }
  return res
};