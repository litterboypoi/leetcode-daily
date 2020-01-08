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

// 33. 搜索旋转排序数组
// https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
// class Solution {
//     public int search(int[] nums, int target) {
//         int l = 0, r = nums.length - 1;
//         while(l <= r) {
//             int mid = (l + r) / 2;
//             if (nums[mid] == target) {
//                 return mid;
//             }
//             if (nums[l] > nums[mid]) {
//                 if (nums[mid] < target && nums[r] >= target) {
//                     l = mid + 1;
//                 } else {
//                     r = mid - 1;
//                 }
//             } else {
//                 if (nums[l] <= target && nums[mid] > target) {
//                     r = mid - 1;
//                 } else {
//                     l = mid + 1;
//                 }
//             }
//         }
//         return -1;
//     }
// }

/**
 * 6. Z 字形变换
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
      return s
  }
  let strList = Array(Math.min(s.length, numRows)).fill('')
  let curRow = 0
  let isGoingDown = false
  let c = 2 * (numRows - 1)
  for (let i = 0; i < s.length; i++) {
      strList[curRow] += s.charAt(i)
      if (i % c === 0 || i % c === numRows - 1 ) {
          isGoingDown = !isGoingDown
      }
      curRow = isGoingDown ? curRow + 1 : curRow - 1
  }
  return strList.join('')
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 23. 合并K个排序链表
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let finishListCount = 0
  let head = null
  let pointer = null
  while (true) {
      finishListCount = 0
      let minIndex = 0
      for (let i = 0; i < lists.length; i++) {
          if (!lists[i]) {
              finishListCount++
              continue
          }
          if (!lists[minIndex] || lists[i].val < lists[minIndex].val) {
              minIndex = i
          }
      }
      if (finishListCount === lists.length) {
          break
      }
      if (!pointer) {
          head = pointer = new ListNode(lists[minIndex].val)
          lists[minIndex] = lists[minIndex].next
      } else {
          pointer.next = new ListNode(lists[minIndex].val)
          pointer = pointer.next
          lists[minIndex] = lists[minIndex].next
      }
  }
  return head
};

/**
 * 122. 买卖股票的最佳时机 II
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) {
      return 0
  }
  let top = prices[prices.length - 1]
  let bottom = prices[prices.length - 1]
  let award = 0
  for (let i = prices.length - 1; i >= 0; i--) {
      if (prices[i] <= bottom) {
          bottom = prices[i]
      } else {
          award += top - bottom
          top = bottom = prices[i]
      }
  }
  award += top - bottom
  return award
};

/**
 * 48. 旋转图像
 * https://leetcode-cn.com/problems/rotate-image/
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 先转置矩阵，然后翻转每一行。
var rotate_1 = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
      for (let j = i; j < matrix[0].length; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j <Math.floor(matrix[0].length / 2); j++) {
        [matrix[i][j], matrix[i][matrix[0].length - j -1]] = [matrix[i][matrix[0].length - j -1], matrix[i][j]]
      }
  }
};

rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
])
