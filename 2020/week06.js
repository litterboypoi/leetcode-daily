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