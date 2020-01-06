//https://leetcode-cn.com/problems/first-bad-version/
// 278. 第一个错误的版本
/* The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version); */

      public class Solution extends VersionControl {
        public int firstBadVersion(int n) {
            int l = 1, r = n;
            while (l < r) {
                int mid = l + (r - l) / 2;
                if (isBadVersion(mid)) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }
            return r;
        }
    }

    // https://leetcode-cn.com/problems/find-peak-element/
    // 162. 寻找峰值
    class Solution {
      public int findPeakElement(int[] nums) {
          int l = 0, r = nums.length - 1;
          while (l < r) {
              int mid = l + (r - l) / 2;
              if (nums[mid] > nums[mid + 1]) {
                  r = mid;
              } else {
                  l = mid + 1;
              }
          }
          return l;
      }
  }

  // 153. 寻找旋转排序数组中的最小值
  // https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
  class Solution {
    public int findMin(int[] nums) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            // 错误原因：当左右两边都是有序的时候，最小值应该在左边，然而现在的代码会优先把l推向右边，而不是把r推向左边
            if (nums[l] < nums[mid]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return nums[l];
    }
}
class Solution {
  public int findMin(int[] nums) {
      int l = 0, r = nums.length - 1;
      while (l < r) {
          int mid = l + (r - l) / 2;
          if (nums[mid] < nums[r]) {
              r = mid;
          } else {
              l = mid + 1;
          }
      }
      return nums[l];
  }
}