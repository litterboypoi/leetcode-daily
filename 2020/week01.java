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