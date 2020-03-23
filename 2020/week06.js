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