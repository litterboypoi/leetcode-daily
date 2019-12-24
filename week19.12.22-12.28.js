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

/**
 * 707. 设计链表-双向链表
 * https://leetcode-cn.com/problems/design-linked-list/
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null
    this.tail = null
};

function DoublyListNode(val, next = null, prev = null) {
    this.prev = prev
    this.next = next
    this.val = val
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let temp = 0
    let cur = this.head
    while (cur) {
        if (temp === index) {
            return cur.val
        }
        cur = cur.next
        temp++
    }
    return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (this.head) {
        let newNode = new DoublyListNode(val, this.head)
        this.head.prev = newNode
        this.head = newNode
    } else {
        this.head = new DoublyListNode(val)
        this.tail = this.head
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (this.tail) {
        let newNode = new DoublyListNode(val, null, this.tail)
        this.tail.next = newNode
        this.tail = newNode
    } else {
        this.tail = new DoublyListNode(val)
        this.head = this.tail
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val)
        return
    }
    let temp = 0
    let prev = null
    let cur = this.head
    while (cur) {
        if (temp === index) {
            let newNode = new DoublyListNode(val, cur, prev)
            if (prev) {
                prev.next = newNode
            }
            cur.prev = newNode
            return
        }
        prev = cur
        cur = cur.next
        temp++
    }
    if (temp === index) {
        this.addAtTail(val)
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let temp = 0
    let prev = null
    let cur = this.head
    while(cur) {
        if (temp === index) {
            if (prev) {
                prev.next = cur.next
            } else {
                this.head = cur.next
            }
            if (cur.next) {
                cur.next.prev = prev
            } else {
                this.tail = prev
            }
        }
        prev = cur
        cur = cur.next
        temp++
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

 var obj = new MyLinkedList()
 obj.addAtHead(7)
 obj.addAtHead(2)
 obj.addAtHead(1)
 obj.addAtIndex(3, 0)
 obj.deleteAtIndex(2)
 obj.addAtHead(6)
 obj.addAtTail(4)
 obj.get(4)
 obj.get(1)
 obj.deleteAtIndex(1)
 obj.get(1)