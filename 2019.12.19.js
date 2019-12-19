/**
 * https://leetcode-cn.com/problems/design-linked-list/
 * 707. 设计链表
* Initialize your data structure here.
*/
var MyLinkedList = function() {
  this.head = null
};

var SinglyListNode = function(val) {
  this.next = null
  this.val = val
}

/**
* Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function(index) {
  if (!this.head) {return -1}
  let cur = this.head
  for (let i  = 1; i <= index; i++) {
      cur = cur.next
      if (!cur) {
          return -1
      }
  }
  return cur.val
};

/**
* Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function(val) {
  const newHead = new SinglyListNode(val)
  newHead.next = this.head
  this.head = newHead
};

/**
* Append a node of value val to the last element of the linked list. 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function(val) {
  const newHead = new SinglyListNode(val)
  if (!this.head) {
      this.head = newHead
      return
  }
  let cur = this.head
  while (cur.next) {
      cur = cur.next
  }
  cur.next = newHead
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
  let newNode = new SinglyListNode(val)
  let cur = this.head
  let prev = null
  for (let i = 1; i <= index; i++) {
      if (!cur) {
          return
      }
      prev = cur
      cur = cur.next
  }
  prev.next = newNode
  newNode.next = cur
};

/**
* Delete the index-th node in the linked list, if the index is valid. 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index === 0 ) {
      this.head = this.head.next
      return
  }
  let cur = this.head
  let prev = null
  for (i = 1; i <= index; i++) {
      if (!cur) {
          return
      }
      prev = cur
      cur = cur.next
  }
  prev.next = cur && cur.next || null
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

/**
 * 160. 相交链表
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) { return null }
  let pA = headA, pB = headB
  while(pA !== pB) {
      pA = pA ? pA.next : headB
      pB = pB ? pB.next : headA
  }
  return pA
};