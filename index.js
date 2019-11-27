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

console.log(deleteNode(deserialize("[1,null,2]"), 2))
