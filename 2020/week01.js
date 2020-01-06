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

// 374. 猜数字大小
// https://leetcode-cn.com/problems/guess-number-higher-or-lower/
/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */
    //   public class Solution extends GuessGame {
    //     public int guessNumber(int n) {
    //         int left = 1, right = n;
    //         while (left <= right) {
    //             int mid = left + (right - left) / 2;
    //             int r = guess(mid);
    //             if (r == 0) {
    //                 return mid;
    //             } else if (r == 1) {
    //                 left = mid + 1;
    //             } else {
    //                 right = mid - 1;
    //             }
    //         }
    //         return 0;
    //     }
    // }