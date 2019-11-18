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
        },
        left: {
            val: 4
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
