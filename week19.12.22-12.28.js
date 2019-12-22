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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 234. 回文链表
 * https://leetcode-cn.com/problems/palindrome-linked-list/submissions/
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    // 通过快慢指针找到链表的中间节点
    while (fast) {
        slow = slow.next
        fast = fast.next && fast.next.next
    }
    // 反转链表的后半部分
    let prev = null
    while (slow) {
        const temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }

    // check
    while (head && prev) {
        if (head.val !== prev.val) {
            return false
        }
        head = head.next
        prev = prev.next
    }
    return true
};