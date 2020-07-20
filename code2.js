/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftEdge = 0
  let rightEdge = height.length - 1
  while(height[leftEdge] === 0 && leftEdge < height.length) leftEdge++;
  while(height[leftEdge] === 0 && leftEdge < height.length) leftEdge++;

  let left = leftEdge
  let right = rightEdge
  let prevHeight = 0
  let result = 0
  while(left < right) {
      if (left === leftEdge && right === rightEdge) {
          result += (rightEdge - leftEdge - 1) * (Math.min(height[leftEdge], height[rightEdge]) - prevHeight)
          prevHeight = Math.min(height[leftEdge], height[rightEdge])
          if (height[leftEdge] > height[rightEdge]) {
            right--
          } else {
            left++
          }
          continue
      }
      if (left > leftEdge) {
          result -= Math.min(height[left], prevHeight)
          if (height[left] > height[leftEdge]) {
              leftEdge = left
          } else {
              left++
          }
      }
      if (right < rightEdge) {
          result -= Math.min(height[right], prevHeight)
          if (height[right] > height[rightEdge]) {
              rightEdge = right
          } else {
              right--
          }
      }
  }
  return result
};

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid || obstacleGrid.length === 0 || obstacleGrid[0][0] === 1) {
      return 0
  }
  const dp = Array(obstacleGrid.length)
  for (let i = 0; i < obstacleGrid.length; i++) {
      dp[i] = []
  }
  function dfs(n, m) {

      let res = 0
      if (n < 0 || m < 0) {
          return 0
      }
      if (dp[n][m] !== undefined) {
          return dp[n][m]
      }
      if (obstacleGrid[n][m] === 1) {
          res = 0
      } else {
          if (n === 0 && m === 0) {
              res = 1
          } else {
              res = dfs(n, m - 1) + dfs(n - 1, m)
          }
      }
      dp[n][m] = res
      return res
  }
  const result = dfs(obstacleGrid.length - 1, obstacleGrid[0].length - 1)
  console.log(dp)
  return result
};

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])