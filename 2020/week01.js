/**
 * 69. x 的平方根
 * https://leetcode-cn.com/problems/sqrtx/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 1) {
      return x
  }
  let max = x
  let min = 0
  let mid = 0
  while (true) {
      mid = Math.floor((max + min) / 2)
      if (mid === min) {
          return mid
      }
      if (mid ** 2 > x) {
          max = mid
      } else if (mid ** 2 < x) {
          min = mid
      } else {
          return mid
      }
  }
};

mySqrt(8)