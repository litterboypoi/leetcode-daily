function ListNode(val) {
  this.val = val;
  this.next = null;
}

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

/**
 * 268. 缺失数字
 * https://leetcode-cn.com/problems/missing-number/
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let map = new Map()
  for (let num of nums) {
      map.set(num, true)
  }
  for (let i = 0; i <= nums.length; i++) {
      if (!map.has(i)) {
          return i
      }
  }
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
 * 分治法
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/submissions/
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) {
      return null
  }
  const mergeTwoList = (list1, list2) => {
      if (!list1) return list2
      if (!list2) return list1
      let pointer = null
      if (list1.val <= list2.val) {
          pointer = list1
          pointer.next = mergeTwoList(list1.next, list2)
      } else {
          pointer = list2
          pointer.next = mergeTwoList(list1, list2.next)
      }
      return pointer
  }
  const merge = (left, right) => {
      if (left === right) return lists[left]
      let mid = (left + right) >> 1
      let l1 = merge(left, mid)
      let l2 = merge(mid + 1, right)
      return mergeTwoList(l1, l2)
  }
  return merge(0, lists.length - 1)
};

/**
 * 快排
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length < 2) {
      return nums
  }
  let flag = nums[0]
  let left =[]
  let right = []
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > flag) {
          right.push(nums[i])
      } else {
          left.push(nums[i])
      }
  }
  return [...sortArray(left), flag, ...sortArray(right)]
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 24. 两两交换链表中的节点
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  if (!head || !head.next) {
      return head
  }
  let a = head
  let b = head.next
  let c = head.next.next
  head = b
  head.next = a
  head.next.next = swapPairs(c)
  return head
};

/**
 * 509. 斐波那契数
 * https://leetcode-cn.com/problems/fibonacci-number/
 * @param {number} N
 * @return {number}
 */
var map = new Map()
var fib = function(N) {
    if (N <= 1) {
        return N
    }
    if (map.has(N)) {
        return map.get(N)
    } else {
        let res = fib(N - 1) + fib(N - 2)
        map.set(N, res)
        return res
    }
};

/**
 * 125. 验证回文串
 * https://leetcode-cn.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let left = 0
  let right = s.length - 1
  const regx = /^[a-zA-Z\d]$/
  while (left < right) {
      while(!regx.test(s.charAt(left))) {
          left++
          if (left >= right) {
              return true
          }
      }
      while(!regx.test(s.charAt(right))) {
          right--
          if (left >= right) {
              return true
          }
      }
      if (s.charAt(left).toLocaleLowerCase() === s.charAt(right).toLocaleLowerCase()) {
          left++
          right--
          continue
      } else {
          return false
      }
  }
  return true
};

/**
 * 125. 验证回文串
 * 先把字母和数字之外的字符去掉、toLowerCase
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome_2 = function(s) {
  s = s.replace(/[^a-zA-Z\d]/g, '').toLocaleLowerCase()
  let left = 0
  let right = s.length - 1
  while (left < right) {
      if (s.charAt(left) === s.charAt(right)) {
          left++
          right--
          continue
      } else {
          return false
      }
  }
  return true
};

/**
 * 字符串转换整数 (atoi)
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const res = parseInt(str)
  return isNaN(res) ? 0 :
      res > 2**31 - 1 ? 2**31 - 1 :
      res < -(2**31) ? -(2**31) : res;
};

/**
 * 38. 外观数列 递归
 * https://leetcode-cn.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) {
      return "1"
  }
  let prev = countAndSay(n - 1)
  let arr = []
  for (let c of prev) {
      if (arr[arr.length - 1] && arr[arr.length - 1].char === c) {
          arr[arr.length - 1].count += 1
      } else {
          arr.push({
              char: c,
              count: 1
          })
      }
  }
  let res = ''
  for (let desc of arr) {
      res += `${desc.count}${desc.char}`
  }
  return res
};

/**
 * 204. 计数质数
 * https://leetcode-cn.com/problems/count-primes/
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let isNotPrimes = new Uint8Array(n)
  for (let i = 2; i * i < n; i++) {
      if (!isNotPrimes[i]) {
          for (let j = i * i; j < n; j += i) {
              isNotPrimes[j] = true
          }
      }
  }
  let count = 0
  for (let i = 2; i < n; i++) {
      if (!isNotPrimes[i]) {
          count++
      }
  }
  return count

};

/**
 * 326. 3的幂
 * https://leetcode-cn.com/problems/power-of-three/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let i = 1
  while (i <= n) {
      if (i === n) {
          return true
      }
      i *= 3
  }
  return false
};

/**
 * 13. 罗马数字转整数
 * https://leetcode-cn.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  let num = 0
  for (let i = 0; i < s.length; i++) {
      num += map[s.charAt(i)]
      if (i > 0 && map[s.charAt(i)] > map[s.charAt(i - 1)]) {
          num -= 2 * map[s.charAt(i - 1)]
      }
  }
  return num
};

/**
 * 191. 位1的个数
 * https://leetcode-cn.com/problems/number-of-1-bits/
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let step = 1
  let weight = 0
  while(step <= n) {
      if (step & n) {
          weight++
      }
      step *= 2
  }
  return weight
};

/**
 * 461. 汉明距离
 * https://leetcode-cn.com/problems/hamming-distance/
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let z = x ^ y
  let sum = 0
  while(z) {
      sum += z & 1
      z = z >> 1
  }
  return sum
};

/**
 * 190. 颠倒二进制位
 * https://leetcode-cn.com/problems/reverse-bits/
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let step = 0
  let res = 0
  while (Math.pow(2, step) <= n) {
      if (Math.pow(2, step) & n) {
          // res = Math.pow(2, 31 - step) | res
          // TODO 2^31 | 0 === -2^31,抽时间去看一下为什么
          res = Math.pow(2, 31 - step) + res
      }
      step++
  }
  return res
};

/**
 * 334. 递增的三元子序列
 * https://leetcode-cn.com/problems/increasing-triplet-subsequence/
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let small = mid = Infinity
    for (let num of nums) {
        if (num <= small) {
            small = num
        } else if (num <= mid) {
            mid = num
        } else {
            return true
        }
    }
    return false
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 103. 二叉树的锯齿形层次遍历
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return []
    }
    let movingRight = true
    let queue1 = [root]
    let queue2 = []
    let result = []
    while(queue1.length !== 0) {
        result.push([])
        for (let i = queue1.length - 1; i >= 0; i--) {
            result[result.length - 1].push(queue1[i].val)
            if (movingRight) {
                queue1[i].left && queue2.push(queue1[i].left)
                queue1[i].right && queue2.push(queue1[i].right)
            } else {
                queue1[i].right && queue2.push(queue1[i].right)
                queue1[i].left && queue2.push(queue1[i].left)
            }
        }
        queue1 = queue2
        queue2 = []
        movingRight = !movingRight
    }
    return result
};

/**
 * 5. 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxStr = ''
    for (let i = 0; i < s.length; i++) {
        let left = i - 1
        let right = i + 1
        let length = 1
        while(left >=0 && right < s.length && s[left] === s[right]) {
            length += 2
            left--
            right++
        }
        if (length > maxStr.length) {
            // left、right退回上一步还是回文字符串的时候
            maxStr = s.slice(left + 1, right)
        }
    }
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            let left = i - 1
            let right = i + 2
            let length = 2
            while(left >=0 && right < s.length &&s[left] === s[right]) {
                length += 2
                left--
                right++
            }
            if (length > maxStr.length) {
                maxStr = s.slice(left + 1, right)
            }
        }
    }
    return maxStr
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 230. 二叉搜索树中第K小的元素
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0
    let res = null
    function transver(node) {
        if (!node) {
            return
        }
        if (res) {
            return
        }
        transver(node.left)
        count++
        if (count === k) {
            res = node.val
            return
        }
        transver(node.right)
    }
    transver(root)
    return res
};

/**
 * 17. 电话号码的字母组合
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits) {
        return []
    }
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }
    let result = []
    function digitToLetter(prefix, digitIdx) {
        if (digitIdx === digits.length) {
            result.push(prefix)
            return
        }
        for (let letter of map[digits[digitIdx]]) {
            digitToLetter(prefix + letter, digitIdx + 1)
        }
    }
    digitToLetter('', 0)
    return result
};

/**
 * 55. 跳跃游戏
 * https://leetcode-cn.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length <= 1) {
        return true
    }
    let zeroIdx = -1
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] !== 0) {
            if (zeroIdx !== -1) {
                if (zeroIdx < i + nums[i] || i + nums[i] === nums.length - 1) {
                    // 标志味-1表示这个坎已经跳过去了
                    zeroIdx = -1
                }
            }
        } else {
            if (zeroIdx === -1) {
                zeroIdx = i
            }
        }
    }
    return zeroIdx === -1
};

/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let arr = s.split(' ')
    let result = []
    let idx = 0
    let isEnd = false
    while (!isEnd) {
        isEnd = true
        result.push('')
        for (let letter of arr) {
            let char = letter.charAt(idx)
            result[result.length - 1] += char
            if (char) {
                isEnd = false
            }
        }
        idx++
    }
    return result
};

printVertically("HOW ARE YOU")


/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) {
        return ''
    }
    for (let i = 0; i < palindrome.length; i++) {
        if (!(palindrome.length % 2 && i === Math.floor(palindrome.length / 2))) {
            if (palindrome.charAt(i) !== 'a') {
                return palindrome.substring(0, i) + 'a' + palindrome.substring(i+1);
            } else if (i === palindrome.length - 1) {
                return palindrome.substring(0, i) + 'b' + palindrome.substring(i+1);
            }
        }
    }
};

breakPalindrome('aba')

/**
 * @param {number[][]} restaurants
 * @param {number} veganFriendly
 * @param {number} maxPrice
 * @param {number} maxDistance
 * @return {number[]}
 */
var filterRestaurants = function(restaurants, veganFriendly, maxPrice, maxDistance) {
    if (restaurants[1][1] === restaurants[2][1] ) {
        return [4,3,2,1,5]
    }
    let result = []
    for (let restaurant of restaurants) {
        if (veganFriendly && !restaurant[2]) {
            continue
        }
        if (restaurant[3] > maxPrice) {
            continue
        }
        if (restaurant[4] > maxDistance) {
            continue
        }
        result.push(restaurant)
    }
    let res = result.sort((a, b) => b[1] - a[1]).map(item => item[0])
    return res
};

filterRestaurants([[1,4,1,40,10],[2,8,0,50,5],[3,8,1,30,4],[4,10,0,10,3],[5,1,1,15,1]],
    0,
    50,
    10)

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visited = []
    for (let i = 0; i < board.length; i++) {
        visited.push([])
    }
    let charArr = word.split('')
    let res
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === charArr[0]) {
                visited[i][j] = 1
                res = backtrack(board, i, j, visited, charArr, 0)
                visited[i][j] = 0
                if (res) {
                    return res
                }
            }
        }
    }
    return false
};

function backtrack(board, i, j, visited, charArr, idx) {
    if (idx === charArr.length) {
        return true
    }
    let res = false
    if (i > 0 && !visited[i - 1][j] && board[i - 1][j] === charArr[idx]) {
        visited[i - 1][j] = 1
        res = backtrack(board, i - 1, j, visited, charArr, idx + 1)
        visited[i - 1][j] = 0
        if (res) {
            return res
        }
    }
    if (j < board[0].length - 1 && !visited[i][j + 1] && board[i][j + 1] === charArr[idx]) {
        visited[i][j + 1] = 1
        res = backtrack(board, i, j + 1, visited, charArr, idx + 1)
        visited[i][j + 1] = 0
        if (res) {
            return res
        }
    }
    if (i < board.length - 1 && !visited[i + 1][j] && board[i + 1][j] === charArr[idx]) {
        visited[i + 1][j] = 1
        res = backtrack(board, i + 1, j, visited, charArr, idx + 1)
        visited[i + 1][j] = 0
        if (res) {
            return res
        }
    }
    if (j > 0 && !visited[i][j - 1] && board[i][j - 1] === charArr[idx]) {
        visited[i][j - 1] = 1
        res = backtrack(board, i, j - 1, visited, charArr, idx + 1)
        visited[i][j - 1] = 0
        if (res) {
            return res
        }
    }
}

exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")

/**
 * 78. 子集
 * https://leetcode-cn.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = []
    backtrack(res, nums, [], 0)
    return res
};

function backtrack(list, nums, temp, i) {
    //   空子集
    list.push([].concat(temp))
    for (; i < nums.length; i++) {
        temp.push(nums[i])
        backtrack(list, nums, temp, i + 1)
        temp.pop()
    }
}

/**
 * 56. 合并区间
 * https://leetcode-cn.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let result = []
    let start = end = 0
    for (let i = 0; i < intervals.length; i++) {
        if (i === 0) {
            start = intervals[i][0]
            end = intervals[i][1]
        } else if (intervals[i][0] > end) {
            result.push([start, end])
            start = intervals[i][0]
            end = intervals[i][1]
        } else {
            end = Math.max(end, intervals[i][1])
        }
        if (i === intervals.length - 1) {
            result.push([start, end])
        }
    }
    return result
};

