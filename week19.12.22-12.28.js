/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 206. 反转链表-迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let current = head
    while (current) {
        let temp = current.next
        current.next = prev
        prev = current
        current = temp
    }
    return prev
};