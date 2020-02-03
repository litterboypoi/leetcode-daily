/**
 * 240. 搜索二维矩阵 II
 * https://leetcode-cn.com/problems/search-a-2d-matrix-ii/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let direction = 1
    let i = j = 0
    while(j >= 0 && i < matrix.length) {
        if (matrix[i][j] === target) {
            return true
        } else if (matrix[i][j] < target) {
            if (direction === 1) {
                j++
            } else {
                direction = -1
                i++
            }
        } else {
            if (direction === 1) {
                direction = -1
                i++
                j--
            } else {
                j--
            }
        }
    }
    return false
};