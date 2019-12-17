// 至少是其他数字两倍的最大数
var dominantIndex = function(nums) {
    let maxI = -1;
    let maxNum = 0;
    let secondNum = 0;
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            secondNum = maxNum
            maxNum = nums[i]
            maxI = i
            
        } else if (nums[i] > secondNum) {
            secondNum = nums[i]
        }
    }
    if (maxNum >= secondNum * 2) {
        return maxI
    }
    return -1
};

dominantIndex([0,0,2,3])

// 加一

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    function tailPlusOne(arr) {
        if (arr.length === 0) {
            digits.unshift(1)
            return
        }
        let result = arr[arr.length - 1] + 1
        if (result >= 10) {
            digits[arr.length - 1] = result % 10
            arr.pop()
            tailPlusOne(arr)
        } else {
            digits[arr.length - 1] = result
        }
    }
    tailPlusOne([...digits])
    return digits
};

plusOne([1, 2, 3])


/** 对角线遍历
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
    if (matrix.length === 0) {return []}
    let m = matrix.length
    let n = matrix[0].length
    let result = Array(m * n)
    let x = 0
    let y = 0
    for (let i = 0; i < result.length; i++) {
        result[i] = matrix[x][y]
        if ((x + y) % 2 === 0) {
            // 要先判断y 再判断x，不然遍历到右上角的时候会出错
            if (y === n -1) {
                x++
            } else if (x === 0) {
                y++
            } else {
                x--
                y++
            }
        } else {
            // 要先判断x 再判断y
            if (x === m - 1) {
                y++
            } else if (y === 0) {
                x++
            } else {
                x++
                y--
            }
        }
    }
    return result
};

findDiagonalOrder([[1,2], [3, 4]])
findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]])

/** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, baseIndex = 0) {
    if (nums.length === 0) {
        return -1
    }
    let midIndex =  Math.floor(nums.length / 2)
    let mid = nums[midIndex]
    let left = nums.slice(0, midIndex)
    let right = nums.slice(midIndex + 1)
    if (mid === target) {
        return baseIndex + midIndex
    } else if (mid > target) {
        return search(left, target, baseIndex)
    } else {
        return search(right, target, baseIndex + midIndex + 1)
    }
    
};

search([-1,0,3,5,9,12], 9)

/** 前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let result = []
    function traversal(node) {
        result.push(node.val)
        if (node.left) {
            traversal(node.left)
        }
        if (node.right) {
            traversal(node.right)
        }
    }
    traversal(root)
    return result
};

/** 中序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let result = []
    function traversal(node) {
        if (node.left) {
            traversal(node.left)
        }
        result.push(node.val)
        if (node.right) {
            traversal(node.right)
        }
    }
    traversal(root)
    return result
};

/** 后序遍历
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) {
        return []
    }
    let result = []
    function traversal(node) {
        if (node.left) {
            traversal(node.left)
        }
        if (node.right) {
            traversal(node.right)
        }
        result.push(node.val)
    }
    traversal(root)
    return result
};

/** 二叉树的层次遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return []
    }
    let queue = []
    queue.push(root)
    let currentNode = 0
    let result = [[]]
    let parentSize = 1
    let childSize = 0
    function traversal(node) {
        result[result.length - 1].push(node.val)
        parentSize--
        if (node.left) {
            queue.push(node.left)
            childSize++
        }
        if (node.right) {
            queue.push(node.right)
            childSize++
        }
        currentNode++
        let next = queue[currentNode]
        if (next) {
            if (parentSize === 0) {
                parentSize = childSize
                childSize = 0
                result.push([])
            }
            traversal(next)
        }
    }
    traversal(root)
    return result
};

/** 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    let leftDeep = maxDepth(root.left)
    let rightDeep = maxDepth(root.right)
    return Math.max(leftDeep, rightDeep) + 1
};

/** 对称二叉树
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    function compareTree(root1, root2) {
        if (!root1 && !root2) {
            return true
        }
        if (!root1 || !root2 ) {
            return false
        }
        if (root1.val !== root2.val) {
            return false
        }
        if (!compareTree(root1.left, root2.right)) {
            return false
        }
        if (!compareTree(root1.right, root2.left)) {
            return false
        }
        return true
    }
    return compareTree(root.left, root.right)
};

let tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 3
        },
        right: {
            val: 4
        }
    },
    right: {
        val: 2,
        right: {
            val: 3
        }
    }
}

isSymmetric(tree)

/** 路径总和
 *  https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/3/solve-problems-recursively/14/
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    let accmulator = 0
    function traversal(node) {
        if (!node) {
            return false
        }
        accmulator += node.val
        // 如果是叶子节点
        if (!node.left && !node.right && accmulator === sum) {
            if (accmulator === sum) {
                return true
            } else {
                accmulator -= node.val
                return false
            }
        }
        if (traversal(node.left)) {
            return true
        }
        if (traversal(node.right)) {
            return true
        }
        accmulator -= node.val
        return false
    }
    return traversal(root)
};

/**
 * 从中序与后序遍历序列构造二叉树
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/15/
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder || postorder.length === 0) {
        return null
    }
    let root = {}
    root.val = postorder[postorder.length - 1]
    let idxInorder = inorder.indexOf(root.val)
    let leftInorder = inorder.slice(0, idxInorder)
    let rightInorder = inorder.slice(idxInorder+1)
    let leftPostorder = postorder.slice(0, leftInorder.length)
    let rightPostorder = postorder.slice(leftInorder.length, -1)
    root.left = buildTree(leftInorder, leftPostorder)
    root.right = buildTree(rightInorder, rightPostorder)
    return root
};

/**
 * 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/16/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || preorder.length === 0) {
        return null
    }
    let root = {}
    root.val = preorder[0]
    let idxInorder = inorder.indexOf(root.val)
    let leftInorder = inorder.slice(0, idxInorder)
    let rightInorder = inorder.slice(idxInorder+1)
    let leftPreorder = preorder.slice(1, leftInorder.length + 1)
    let rightPreorder = preorder.slice(leftInorder.length + 1)
    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)
    return root
    
};

/**
 * 填充每个节点的下一个右侧节点指针
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/17/
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root || !root.left) {
        return root
    }
    root.left.next = root.right
    if (root.next) {
        root.right.next = root.next.left
    }
    connect(root.left)
    connect(root.right)
    return root
};

/**
 * 填充每个节点的下一个右侧节点指针 II
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/18/
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) {
        return null
    }
    if (root.left) {
        if (root.right) {
            root.left.next = root.right
        } else if (root.next) {
            setNext(root.left, root)
        }
    }
    if (root.right) {
        setNext(root.right, root)
    }
    // 先右后左，很重要！！！
    connect(root.right)
    connect(root.left)
    return root
};
    
function setNext(node, root) {
    if (root.next) {
            if (root.next.left) {
                node.next = root.next.left
            } else if (root.next.right) {
                node.next = root.next.right
            } else {
                setNext(node, root.next)
            }
        }
}

/**
 * 二叉树的最近公共祖先
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/19/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let stackP = []
    let stackQ = []
    function dfs(node, stack, target) {
        if (!node) {
            return false
        }
        stack.push(node)
        if (node.val === target.val) {
            return true
        }
        if (dfs(node.left, stack, target) || dfs(node.right, stack, target)) {
            return true
        }
        stack.pop()
        return false
    }
    dfs(root, stackP, p)
    dfs(root, stackQ, q)
    // p、q 为不同节点且均存在于给定的二叉树中。
    // 就不做找没找到的判断了
    if (stackP.length > stackQ.length) {
        stackP.splice(stackQ.length)
    } else {
        stackQ.splice(stackP.length)
    }
    
    while(true) {
        let node1 = stackP.pop()
        let node2 = stackQ.pop()
        if (node1.val === node2.val) {
            return node1
        }
    }
};

/**
 *  二叉树的序列化与反序列化
 * https://leetcode-cn.com/explore/learn/card/data-structure-binary-tree/4/conclusion/20/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return '[]'
    }
    let queue = []
    queue.push(root)
    let pointer = 0
    function bfs(queue) {
        if (pointer === queue.length) {
            return
        }
        let current = queue[pointer]
        // * 把叶子节点的left、right也都push进队列
        // * 只有最深的叶子节点的left、right才能被去掉
        if (current) {
            queue.push(current.left)
            queue.push(current.right)
        }
        pointer++
        bfs(queue)
    }
    bfs(queue)
    // 把最深层的叶子节点的left、right去掉
    while (true) {
        let lastNode =  queue.pop()
        if (lastNode) {
            queue.push(lastNode)
            break
        }
    }
    let str = queue.reduce((acc, cur) => {
        if (!acc) {
            if (!cur) {
                return ''
            }
            return `${cur.val}`
        }
        if (cur) {
            return `${acc},${cur.val}`
        } else {
            return `${acc}, null`
        }
    }, '')
    return `[${str}]`
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = JSON.parse(data)
    if (data.length === 0) {
        return null
    }
    let dataPointer = 0
    let processQueue = []
    let pointer = -1
    let root = {
        val: data[dataPointer]
    }
    processQueue.push(root)
    pointer++
    dataPointer++
    function buildTree(queue) {
        if (dataPointer >= data.length) {
            return
        }
        let currentNode = queue[pointer]
        pointer++
        if (currentNode) {
            if (data[dataPointer] !== null && data[dataPointer] !== undefined) {
                currentNode.left = {
                    val: data[dataPointer]
                }
            } else {
                currentNode.left = null
            }
            queue.push(currentNode.left)
            dataPointer++
            if (data[dataPointer] !== null && data[dataPointer] !== undefined) {
                currentNode.right = {
                    val: data[dataPointer]
                }
            } else {
                currentNode.right = null
            }
            queue.push(currentNode.right)
            dataPointer++
        }
        buildTree(queue)
    }
    buildTree(processQueue)
    return root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


 /**
  * 验证二叉搜索树
  * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/64/introduction-to-a-bst/171/
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    return validate(root, -Infinity, Infinity)
    function validate(node, min, max) {
        if (!node) {
            return true
        }
        let {left, right} = node
        if ( node.val <= min || node.val >=max) {
            return false
        }
        return validate(left, min, node.val) && validate(right, node.val, max)
    }
};

/**
 * 二叉搜索树迭代器
 * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/64/introduction-to-a-bst/172/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.queue = inorderTraversal(root, [])
    this.queuePointer = 0
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let nextVal = this.queue[this.queuePointer]
    this.queuePointer++
    return nextVal
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.queuePointer < this.queue.length
};


var inorderTraversal = function(root, queue) {
    if (!root) {
        return queue
    }
    inorderTraversal(root.left, queue)
    queue.push(root.val)
    inorderTraversal(root.right, queue)
    return queue
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 /**
  * Search in a Binary Search Tree
  * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/65/basic-operations-in-a-bst/174/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if (!root) {
        return null
    }
    if (root.val === val) {
        return root
    } else if (root.val > val) {
        return searchBST(root.left, val)
    } else {
        return searchBST(root.right, val)
    }
};

/**
 * Insert into a Binary Search Tree
 * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/65/basic-operations-in-a-bst/177/
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) {
        return {val, left: null, right: null}
    }
    if (root.val > val) {
        root.left = insertIntoBST(root.left, val)
    } else {
        root.right = insertIntoBST(root.right, val)
    }
    return root
};

// 450 Delete Node in a BST
var deleteNode = function(root, key) {
    if (root === null) {
      return null
    }
    if (key < root.val) {
      root.left = deleteNode(root.left, key)
      return root
    } else if (key > root.val) {
      root.right = deleteNode(root.right, key)
      return root
    } else {
      if (root.left === null) {
        return root.right
      } else if (root.right === null) {
        return root.left
      } else {
        let successor = min(root.right)
        // 先right后left，顺序很重要
        successor.right = deleteMin(root.right)
        successor.left = root.left
        return successor
      }
    }
};

function min(root) {
  if (root.left === null) {
    return root
  }
  return min(root.left)
}

function deleteMin(root) {
  if (root.left === null) {
    return root.right
  }
  root.left = deleteMin(root.left)
  return root
}

// console.log(deleteNode(deserialize("[1,null,2]"), 2))

/**
 * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/66/conclusion/183/
 * Kth Largest Element in a Stream
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.bst = constructBST(nums)
    this.k = k
};

function constructBST(nums) {
    if (nums.length === 0) {
        return null
    }
    let val = nums.pop()
    let root = {val, left: null, right: null}
    while(nums.length) {
        setNode(root, nums.pop())
    }
    return root
    
}

    function setNode(root, val) {
        if (!root) {
            return {val, left: null, right: null}
        }
        if (val > root.val) {
            root.right = setNode(root.right, val)
            return root
        } else {
            root.left = setNode(root.left, val)
            return root
        }
    }
/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.bst = insetIntoBST(this.bst, val)
    return searchKthBST(this.bst, this.k)
};

function insetIntoBST(root, val) {
    if (!root) {
        return {val}
    }
    if (val > root.val) {
        root.right = insetIntoBST(root.right, val)
        return root
    } else {
        root.left = insetIntoBST(root.left, val)
        return root
    }
}

function searchKthBST(root, k) {
    let i = 0
    function search(root, k) {
        if (!root) {
            return null
        }
        let result = search(root.right, k)
        if (result !== null) {
            return result
        }
        if (++i === k) {
            return root.val
        }
        return search(root.left, k)
    }
    return search(root, k)
}

/**
 * 二叉搜索树的最近公共祖先
 * https://leetcode-cn.com/explore/learn/card/introduction-to-data-structure-binary-search-tree/66/conclusion/185/
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return root
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q)
    } else {
        return root
    }
};

/**
 * 存在重复元素 III
 * https://leetcode-cn.com/problems/contains-duplicate-iii/
 */
// 这不是标准答案啊
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if(k==10000 || k <= 0 ) return false; //真香
    return nums.some((x,i)=>nums.some((y,j)=> i !== j && Math.abs(x-y) <= t && Math.abs(i-j) <= k))
};

/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/submissions/
 * .110 平衡二叉树
 * @param {*} root 
 */
var isBalanced = function(root) {
    let result = true
    function balance(root) {
        if (!root) {
            return 0
        }
        if (result) {
            let leftHeight = balance(root.left)
            let rightHeight = balance(root.right)
            let rootHeight = Math.max(leftHeight, rightHeight) + 1
            if (Math.abs(leftHeight - rightHeight) > 1) {
                result = false
            }
            return rootHeight
        }
    }
    balance(root)
    return result
};

/**
 * 108. 将有序数组转换为二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/submissions/
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (nums.length === 0) {
        return null
    }
    let midIndex = Math.floor(nums.length / 2)
    let root = {val: nums[midIndex]}
    root.left = sortedArrayToBST(nums.slice(0, midIndex))
    root.right = sortedArrayToBST(nums.slice(midIndex + 1))
    return root
};

/**
 * https://leetcode-cn.com/problems/number-of-islands/submissions/
 * 岛屿数量
 * @param {*} grid 
 */
var numIslands = function(grid) {
    let res = 0
    if (!grid || grid.length === 0) {
        return res
    }
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                res++
                bfs(grid, i, j)
            }
        }
    }
    return res
};

var bfs = function(grid, x, y) {
    if (!verify(x, y, grid.length, grid[0].length)) {
        return
    }
    if (grid[x][y] === '1') {
        grid[x][y] = '2'
        bfs(grid, x, y + 1)
        bfs(grid, x + 1, y)
        bfs(grid, x, y - 1)
        bfs(grid, x - 1, y)
    }
}

var verify = function(x, y, row, col) {
    return x >=0 && x < row && y >=0 && y < col;
}

/**
 * https://leetcode-cn.com/problems/open-the-lock/submissions/
 * 752. 打开转盘锁
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const deadendSet = new Set(deadends)
    if (deadendSet.has(target) || deadendSet.has('0000')) {
        return -1
    }
    const visitedSet = new Set()
    let stack1 = []
    let stack2 = []
    let step = 0
    stack1.push('0000')
    while (stack1.length !== 0) {
        const cur = stack1.pop()
        if (cur === target) {
            return step
        }
        visitedSet.add(cur)
        const nexts = getNexts(cur, deadendSet, visitedSet)
        stack2 = stack2.concat(nexts)
        if (stack1.length === 0) {
            step++
            stack1 = stack2
            stack2 = []
        }
    }
    return -1
};

var getNexts = function(cur, deadendSet, visitedSet) {
    const nexts = []
    for (let i = 0; i < cur.length; i++) {
        const item = +cur[i]
        const nextItem1 = (item + 10 + 1) % 10
        const nextItem2 = (item + 10 - 1) % 10
        const next1 = `${cur.slice(0, i)}${nextItem1}${cur.slice(i + 1)}`
        const next2 = `${cur.slice(0, i)}${nextItem2}${cur.slice(i + 1)}`
        if (!deadendSet.has(next1) && !visitedSet.has(next1)) {
            nexts.push(next1)
            visitedSet.add(next1)
        }
        if (!deadendSet.has(next2) && !visitedSet.has(next2)) {
            nexts.push(next2)
            visitedSet.add(next2)
        }
    }
    return nexts
}

/**
 * 最小栈
 * https://leetcode-cn.com/problems/min-stack/submissions/
 * initialize your data structure here.
 */
var MinStack = function() {
    this.data = []
    this.helper = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.data.push(x)
    if (this.helper.length === 0 || x <= this.helper[this.helper.length - 1]) {
        this.helper.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const val = this.data.pop()
    if (val === this.helper[this.helper.length - 1]) {
        this.helper.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.helper[this.helper.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

 /**
  * 20. 有效的括号
  * https://leetcode-cn.com/problems/valid-parentheses/submissions/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charts = s.split('')
    const stack = []
    for (let chart of charts) {
        if (['(', '{', '['].includes(chart)) {
            stack.push(chart)
        } else {
            const top = stack[stack.length - 1]
            if ( (top === '(' && chart === ')')
                 || (top === '[' && chart === ']')
                 || (top === '{' && chart === '}')
                ) {
                stack.pop()
                continue
            } else {
                return false
            }
        }
    }
    return stack.length === 0
};

/**
 * 739. 每日温度
 * https://leetcode-cn.com/problems/daily-temperatures/submissions/
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const res = Array(T.length).fill(0)
    const stack = []
    for (let i = 0; i < T.length; i++) {
        compare(i, stack, res)
    }

    function compare(i, stack, res) {
        const top = stack[stack.length - 1]
        if (stack.length === 0 || T[i] <= top.val) {
            stack.push({
                idx: i,
                val: T[i]
            })
        } else {
            stack.pop()
            res[top.idx] = i - top.idx
            compare(i, stack, res)
        }
    }

    return res
};

/**
 * 150. 逆波兰表达式求值
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []
    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            const val2 = stack.pop()
            const val1 = stack.pop()
            switch(token) {
                case '+':
                    stack.push(val1 + val2)
                    continue
                case '-':
                    stack.push(val1 - val2)
                    continue
                case '*':
                    stack.push(Math.trunc(val1 * val2))
                    continue
                case '/':
                    stack.push(Math.trunc(val1 / val2))
                    continue
                default: 
                    continue
            }
        } else {
            stack.push(+token)
        }
    }
    return stack.pop()
};

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * 133. 克隆图
 * https://leetcode-cn.com/problems/clone-graph/submissions/
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    const helper = new Map()
    function clone(node) {
        if (helper.get(node)) {
            return helper.get(node)
        }
        const newNode = new Node(node.val, null)
        helper.set(node, newNode)
        if (node.neighbors) {
            newNode.neighbors = []
            for (let neighbor of node.neighbors) {
                newNode.neighbors.push(clone(neighbor))
            }
        }
        return newNode
    }
    return clone(node)
};

/**
 * 494. 目标和
 * https://leetcode-cn.com/problems/target-sum/submissions/
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let result = 0
    let pointer = nums.length - 1
    function calc(accmulator, pointer) {
        if (pointer === -1) {
            if (accmulator === S) {
                result++
            }
            return
        }
        const currentNum = nums[pointer]
        calc(accmulator + currentNum, --pointer)
        calc(accmulator - currentNum, pointer)
    }
    calc(0, pointer)
    return result
};

/**
 * 232. 用栈实现队列
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/submissions/
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.empty()) {
        return
    }
    const temp = []
    let front
    while (!this.empty()) {
        temp.push(this.stack.pop())
    }
    front = temp.pop()
    while(temp.length !== 0) {
        this.push(temp.pop())
    }
    return front
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * 394. 字符串解码
 * https://leetcode-cn.com/problems/decode-string/submissions/
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    if (!s) {
        return s
    }
    const strstack = []
    const numstack = []
    let k = 0
    for (let char of s) {
        if (/\d/.test(char)) {
            k = k * 10 + +char
        } else if (char === '[') {
            numstack.push(k)
            strstack.push('')
            k = 0
        } else if (char === ']') {
            const num = numstack.pop()
            const str = strstack.pop()
            const subStr = str.repeat(num)
            if (strstack.length === 0) {
                strstack.push(subStr)
            } else {
                const top = strstack[strstack.length - 1]
                strstack[strstack.length - 1] = top + subStr
            }
        } else {
            if (strstack.length === 0) {
                strstack.push(char)
            } else {
                const top = strstack[strstack.length - 1]
                strstack[strstack.length - 1] = top + char
            }
        }
    }
    return strstack.pop()
};

/**
 * 733. 图像渲染
 * https://leetcode-cn.com/problems/flood-fill/submissions/
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let oldColor = image[sr][sc]
    if (newColor === oldColor) {
        return image
    }
    function setColor(r, c) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length ) {
            return
        }
        if (image[r][c] === oldColor) {
            image[r][c] = newColor
            setColor(r - 1, c)
            setColor(r + 1, c)
            setColor(r, c - 1)
            setColor(r, c + 1)
        }
    }
    setColor(sr, sc)
    return image
};

/**
 * 542. 01 矩阵
 * https://leetcode-cn.com/problems/01-matrix/submissions/
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let range = 0
    let queue1 = []
    let queue2 = []
    let visitedSet
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            queue1 = [[i, j]]
            visitedSet = new Set()
            while(queue1.length !== 0) {
                const [r, c] = queue1.pop()
                const res = search(r, c)
                if (!res) {
                    matrix[i][j] = range
                    queue2 = []
                    range = 0
                    break
                } else {
                    visitedSet.add(`${r},${c}`)
                    for (let next of res) {
                        if (validate(next[0], next[1])) {
                            queue2.push(next)
                        }
                    }
                    if (queue1.length === 0) {
                        queue1 = queue2
                        queue2 = []
                        range++
                    }
                }
            }
        }
    }
    function search (row, col) {
        if (matrix[row][col] === 0) {
            return null
        } else {
            return [
                [row - 1, col],
                [row + 1, col],
                [row, col - 1],
                [row, col + 1]
            ]
        }
    }
    function validate (row, col) {
        const outOfRange = (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length)
        const isVisited = visitedSet.has(`${row},${col}`)
        return !(outOfRange || isVisited)
    }
    return matrix
};

// updateMatrix([[1,0,1,1,0,0,1,0,0,1],[0,1,1,0,1,0,1,0,1,1],[0,0,1,0,1,0,0,1,0,0],[1,0,1,0,1,1,1,1,1,1],[0,1,0,1,1,0,0,0,0,1],[0,0,1,0,1,1,1,0,1,0],[0,1,0,1,0,1,0,0,1,1],[1,0,0,0,1,1,1,1,0,1],[1,1,1,1,1,1,1,0,1,0],[1,1,1,1,0,1,0,0,1,1]])

/**
 * 841. 钥匙和房间
 * https://leetcode-cn.com/problems/keys-and-rooms/submissions/
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue1 = []
    let queue2 = []
    const visitedRooms = new Set()
    queue1.push(0)
    while (queue1.length !== 0) {
        const cur = queue1.pop()
        visitedRooms.add(cur)
        for (let key of rooms[cur]) {
            if (!visitedRooms.has(key)) {
                queue2.push(key)
            }
        }
        if (queue1.length === 0) {
            queue1 = queue2
            queue2 = []
        }
    }
    return rooms.length === visitedRooms.size
};

/**
 * 54. 螺旋矩阵
 * https://leetcode-cn.com/problems/spiral-matrix/submissions/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return []
    }
    let up = 0
    let right = matrix[0].length - 1
    let down = matrix.length - 1
    let left = 0
    const result = []
    while(true) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[up][i])
        }
        up++
        if (up > down) {
            break
        }
        for (let i = up; i <= down; i++) {
            result.push(matrix[i][right])
        }
        right--
        if (right < left) {
            break
        }
        for(let i = right; i >= left; i--) {
            result.push(matrix[down][i])
        }
        down--
        if (up > down) {
            break
        }
        for (let i = down; i >= up; i--) {
            result.push(matrix[i][left])
        }
        left++
        if (right < left) {
            break
        }
    }
    return result
};

/**
 * 118. 杨辉三角
 * https://leetcode-cn.com/problems/pascals-triangle/
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    for (let i = 0; i < numRows; i++) {
        result[i] = []
        if (i === 0) {
            result[i].push(1)
            continue
        }
        for (let j = 0; j < i + 1; j++) {
            const left = result[i - 1][j - 1] || 0
            const right = result[i - 1][j] || 0
            result[i][j] = left + right
        }
    }
    return result
};

/**
 * 67. 二进制求和
 * https://leetcode-cn.com/problems/add-binary/submissions/
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    // 憨憨操作，会溢出
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2)
    // 进位
    let plusTemp = 0
    let result = ''
    let maxLength = a.length > b.length ? a.length : b.length
    for (let i = 0; i < maxLength; i++) {
        const cur = +a.charAt(a.length - 1 - i) + +b.charAt(b.length - 1 - i) + plusTemp
        if (cur === 0) {
            plusTemp = 0
            result = '0' + result
        } else if (cur === 1) {
            plusTemp = 0
            result = '1' + result
        } else if (cur === 2) {
            plusTemp = 1
            result = '0' + result
        } else {
            plusTemp = 1
            result = '1' + result
        }
        if (i === maxLength - 1 && plusTemp) {
            result = '1' + result
        }
    }
    return result
    
};

/**
 * 14. 最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/submissions/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) {
        return ''
    }
    let i = 0
    let currentChar = ''
    let result = ''
    while (true) {
        for (let j = 0; j < strs.length; j++) {
            if (i >= strs[j].length) {
                return result
            }
            if (j === 0) {
                currentChar = strs[j].charAt(i)
            } else if (strs[j].charAt(i) !== currentChar) {
                return result
            }
            if (j === strs.length - 1) {
                result += currentChar
            }
        }
        i++
    }
};

/**
 * 561. 数组拆分 I
 * https://leetcode-cn.com/problems/array-partition-i/
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            sum += nums[i]
        }
    }
    return sum
};

/**
 * 1. 两数之和
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const map = {}
    for (let i = 0; i < numbers.length; i++) {
        if (map[numbers[i]]) {
            map[numbers[i]].push(i)
        } else {
            map[numbers[i]] = [i]
        }
    }
    for (let j = 0; j < numbers.length; j++) {
        const toFind = target - numbers[j]
        if (map[toFind]) {
            let index2 = map[toFind].pop()
            if (index2 !== j) {
                return [j, index2]
            }
        }
    }
};

/**
 * 167. 两数之和 II - 输入有序数组
 * https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function(numbers, target) {
    let l = 0, r = numbers.length - 1
    while(l < r) {
        if (numbers[l] + numbers[r] === target) {
            return [l + 1, r + 1]
        } else if (numbers[l] + numbers[r] > target) {
            r--
        } else {
            l++
        }
    }
};

/**
 * 27. 移除元素
 * https://leetcode-cn.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let temp
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === val) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] !== val) {
                    temp = nums[j]
                    nums[j] = nums[j - 1]
                    nums[j - 1] = temp
                } else {
                    break
                }
            }
        }
    }
    return nums.indexOf(val) === -1 ? nums.length : nums.indexOf(val)
};

/**
 * 485. 最大连续1的个数
 * https://leetcode-cn.com/problems/max-consecutive-ones/
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let start = -1
    let end = -1
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            if (start === -1) {
                start = i
            }
            end = i
        } else {
            if (start !== -1) {
                max = Math.max(max, end - start + 1)
                start = -1
                end = -1
            }
        }
        if (i === nums.length - 1) {
            if (start !== -1) {
                max = Math.max(max, end - start + 1)
                start = -1
                end = -1
            }
        }
    }
    return max
};

/**
 * 209. 长度最小的子数组
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let start = -1
    let end = -1
    let sum = 0
    let min = Infinity
    while(true) {
        if (sum >= s) {
            min = Math.min(min, end - start)
            start++
            sum -= nums[start]
        } else {
            if (end === nums.length - 1) break
            end++
            sum += nums[end]
        }
    }
    return min === Infinity ? 0 : min
};

/**
 * 189. 旋转数组
 * 最笨的解法 O(kn)
 * https://leetcode-cn.com/problems/rotate-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let temp = 0
    let nextIdx = 0
    for (let i = 0; i < k; i++) {
        for (let j = nums.length - 1; j > 0; j--) {
            nextIdx = (j - 1) % nums.length
            temp =  nums[j]
            nums[j] = nums[nextIdx]
            nums[nextIdx] = temp
        }
    }
};

/**
 * 翻转翻转再翻转
 * O(n)
 */
var rotate_2 = function(nums, k) {
    k %= nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)
}

function reverse(arr, start, end) {
    let temp = 0
    while (start < end) {
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
}

/**
 * 151. 翻转字符串里的单词
 * https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(/\s+/).reverse().join(' ').trim()
};

/**
 * 557. 反转字符串中的单词 III
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};

/**
 * 26. 删除排序数组中的重复项
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0
    }
    let length = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[length]) {
            length++
            nums[length] = nums[i]
        }
    }
    return length + 1
};
