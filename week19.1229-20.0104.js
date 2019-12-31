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

/**
 * 202. 快乐数
 * https://leetcode-cn.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let mySet = new Set()
  mySet.add(n)
  while(true) {
      n = n.toString().split('').reduce((acc, cur) => acc += cur*cur, 0)
      if (n === 1) {
          return true
      } else if (mySet.has(n)) {
          return false
      }
      mySet.add(n)
  }
};

/**
 * 205. 同构字符串
 * https://leetcode-cn.com/problems/isomorphic-strings/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) {
      return false
  }
  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < s.length; i++) {
      map1.set(s[i], t[i])
      map2.set(t[i], s[i])
  }
  for (let i = 0; i < s.length; i++) {
      if (map1.get(s[i]) !== t[i] || map2.get(t[i]) !== s[i]) {
          return false
      }
  }
  return true
};

/**
 * 387. 字符串中的第一个唯一字符
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const m = new Map()
  for (let i = 0; i < s.length; i++) {
      m.set(s.charAt(i), m.get(s.charAt(i)) ? s.charAt(i) + 1 : 1)
  }
  for (let i = 0; i < s.length; i++) {
      if (m.get(s.charAt(i)) === 1) {
          return i
      }
  }
  return -1
};

/**
 * 350. 两个数组的交集 II
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const map1 = new Map()
  const map2 = new Map()
  for (let i = 0; i < nums1.length; i++) {
      let count = map1.has(nums1[i]) ? map1.get(nums1[i]) + 1 : 1
      map1.set(nums1[i], count)
  }
  for (let i = 0; i < nums2.length; i++) {
      let count = map2.has(nums2[i]) ? map2.get(nums2[i]) + 1 : 1
      map2.set(nums2[i], count)
  }
  let result = []
  for (let [key, val] of map1.entries() ) {
      let val2 = map2.get(key) || 0
      let count = Math.min(val, val2)
      result = [...result, ...Array(count).fill(key)]
  }
  return result
};

/**
 * 219. 存在重复元素 II
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (myMap.has(nums[i]) && i - myMap.get(nums[i]) <= k) return true;
      myMap.set(nums[i], i)
  }
  return false
};
