/**
 * 876. 链表的中间结点
 * https://leetcode-cn.com/problems/middle-of-the-linked-list/
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let fast = head
  let slow = head
  while(fast && fast.next) {
      fast = fast.next && fast.next.next
      slow = slow.next
  }
  return slow
};

/**
 * 846. 一手顺子
 * https://leetcode-cn.com/problems/hand-of-straights/
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */
var isNStraightHand = function(hand, W) {
  if (hand.length === 0 || W === 0 || hand.length % W !== 0) {
      return false
  }
  hand = hand.sort((a, b) => a - b)
  let map = new Map()
  for (let i = 0; i < hand.length; i++) {
      map.set(hand[i], map.get(hand[i]) ? map.get(hand[i]) + 1 : 1)
  }
  for (let card of hand) {
      if (map.get(card) > 0) {
          const count = map.get(card)
          map.set(card, 0)
          for (let i = 1; i < W; i++) {
              if (map.get(card + i) && map.get(card + i) >= count) {
                  map.set(card + i, map.get(card + i) - count)
              } else {
                  return false
              }
          }
      }
  }
  return true
};

/**
 * 914. 卡牌分组
 * 获取每种卡片出现的次数，然后求次数的最大公约数
 * https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length === 0) {
      return false
  }
  let map = new Map()
  for (let n of deck) {
      if (map.has(n)) {
          map.set(n, map.get(n) + 1)
      } else {
          map.set(n, 1)
      }
  }
  let res = 0
  for (let c of map) {
      // init
      if (res === 0) {
          res = c[1]
      } else {
          res = gcd(res, c[1])
      }
  }
  return res > 1
};

/**
 * 求最大公约数
 * 这里用的是辗转相除法，还有辗转相减法、穷举法
 * @param {*} a
 * @param {*} b
 * @returns
 */
function gcd(a, b) {
  if (a === 1 || b === 1) {
      return 1
  }
  if (b > a) {
      let temp = a
      a = b
      b = temp
  }
  let mod = a % b
  if (mod === 0) {
      return b
  }
  return gcd(b, mod)
}
