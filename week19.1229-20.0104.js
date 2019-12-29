/**
 * 设计哈希集合
 * Initialize your data structure here.
 */
var MyHashSet = function() {
  this.mySet = {}
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.add = function(key) {
  !this.mySet[key] && (this.mySet[key] = true)
};

/** 
* @param {number} key
* @return {void}
*/
MyHashSet.prototype.remove = function(key) {
  this.mySet[key] && (delete this.mySet[key])
};

/**
* Returns true if this set contains the specified element 
* @param {number} key
* @return {boolean}
*/
MyHashSet.prototype.contains = function(key) {
  return !!this.mySet[key]
};

/** 
* Your MyHashSet object will be instantiated and called as such:
* var obj = new MyHashSet()
* obj.add(key)
* obj.remove(key)
* var param_3 = obj.contains(key)
*/

/**
 * 设计哈希映射
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.myMap = {}
};

/**
* value will always be non-negative. 
* @param {number} key 
* @param {number} value
* @return {void}
*/
MyHashMap.prototype.put = function(key, value) {
  this.myMap[key] = value
};

/**
* Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
* @param {number} key
* @return {number}
*/
MyHashMap.prototype.get = function(key) {
  return typeof this.myMap[key] === 'undefined' ? -1 : this.myMap[key]
};

/**
* Removes the mapping of the specified value key if this map contains a mapping for the key 
* @param {number} key
* @return {void}
*/
MyHashMap.prototype.remove = function(key) {
  delete this.myMap[key]
};

/** 
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/

/**
 * 217. 存在重复元素
 * https://leetcode-cn.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const mySet = new Set()
  for (let i = 0; i < nums.length; i++) {
      if (mySet.has(nums[i])) {
          return true
      } else {
          mySet.add(nums[i])
      }
  }
  return false
};

/**
 * 136. 只出现一次的数字
 * 使用集合
 * https://leetcode-cn.com/problems/single-number/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber_1 = function(nums) {
  const mySet = new Set()
  for (let i = 0; i < nums.length; i++) {
      if (mySet.has(nums[i])) {
          mySet.delete(nums[i])
      } else {
          mySet.add(nums[i])
      }
  }
  for (let [key, val] of mySet.entries()) {
      return val
  }
};
// 使用异或运算符
var singleNumber_2 = function(nums) {
  let n = 0
  for (let i = 0; i < nums.length; i++) {
      n ^= nums[i]
  }
  return n
};

/**
 * 349. 两个数组的交集
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)
  let result = []
  for (let [key, val] of set1.entries()) {
      if (set2.has(val)) {
          result.push(val)
      }
  }
  return result
};
