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
