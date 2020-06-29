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
trap([4,2,3])