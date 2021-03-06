function ListNode(val, next = null) {
   this.val = val;
   this.next = next;
}
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


//  var obj = new MyLinkedList()
//  obj.addAtHead(7)
//  obj.addAtHead(2)
//  obj.addAtHead(1)
//  obj.addAtIndex(3, 0)
//  obj.deleteAtIndex(2)
//  obj.addAtHead(6)
//  obj.addAtTail(4)
//  obj.get(4)
//  obj.get(1)
//  obj.deleteAtIndex(1)
//  obj.get(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 21. 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let p1 = l1
    let p2 = l2
    let newList = null
    let cur = null
    while(p1 || p2) {
        if (!p1) {
            if (cur) {
                cur.next = p2
            } else {
                newList = cur = p2
            }
            return newList
        }
        if (!p2) {
            if (cur) {
                cur.next = p1
            } else {
                newList = cur = p1
            }
            return newList
        }
        if (p1.val > p2.val) {
            if (cur) {
                cur.next = p2
                p2 = p2.next
                cur = cur.next
            } else {
                cur = p2
                newList = cur
                p2 = p2.next
            }
        } else {
            if (cur) {
                cur.next = p1
                p1 = p1.next
                cur = cur.next
            } else {
                cur = p1
                newList = cur
                p1 = p1.next
            }
        }
    }
    return newList
};

/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
function Node(val,prev = null,next = null,child = null) {
   this.val = val;
   this.prev = prev;
   this.next = next;
   this.child = child;
};
/**
 * 430. 扁平化多级双向链表
 * https://leetcode-cn.com/problems/flatten-a-multilevel-doubly-linked-list/
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  let pointer = null
  let newHead = null
  function dfs(child) {
      let p1 = child
      while (p1) {
          if (pointer) {
              pointer.next = new Node(p1.val, pointer)
              pointer = pointer.next
          } else {
              pointer = new Node(p1.val, pointer)
              newHead = pointer
          }
          if (p1.child) {
              dfs(p1.child)
          }
          p1 = p1.next
      }
  }
  dfs(head)
  return newHead
};


/**
 * 61. 旋转链表
 * https://leetcode-cn.com/problems/rotate-list/
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head
    }
    let size = 0
    let pointer = head
    let tail = null
    while(pointer) {
        if (!pointer.next) {
            tail = pointer
        }
        pointer = pointer.next
        size++
    }
    k = (k % size)
    if (k === 0) {
        return head
    }
    k = size - k
    let count = 0
    pointer = head
    while(true) {
        // 目标的前一个结点
        if (count === k - 1) {
            let temp = pointer.next
            pointer.next = null
            pointer = temp
            break
        }
        pointer = pointer.next
        count++
    }
    tail.next = head
    return pointer

};

const n4 = new ListNode(4)
const n3 = new ListNode(3, n4)
const n2 = new ListNode(2, n3)
const n1 = new ListNode(1, n2)

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
function Node(val, next, random) {
    this.val = val
    this.next = next
    this.random = random
}
/**
 * 138. 复制带随机指针的链表
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return head
    }
    let pointer = head
    let map = new Map()
    while(pointer) {
        let clone = new Node(pointer.val, null, null)
        map.set(pointer, clone)
        pointer = pointer.next
    }
    pointer = head
    while(pointer) {
        map.get(pointer).next = map.get(pointer.next) || null
        map.get(pointer).random = map.get(pointer.random) || null
        pointer = pointer.next
    }
    return map.get(head)
};

var node2 = new Node(2, null, null)
node2.random = node1
var node1 = new Node(1, node2, node2)

copyRandomList(node1)
