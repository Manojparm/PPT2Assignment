/* Q 3:
We define a harmonious array as an array where the difference
 between its maximum valueand its minimum value is exactly 1.

 Given an integer array nums, return the length of its longest
  harmonious subsequence among all its possible subsequences.

  A subsequence of an array is a sequence that can be derived from the 
  array by deleting some or no elements without changing the order of the 
  remaining elements.

  Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].*/


function findLHS(nums) {
    const frequencyMap = new Map();
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
  
    let maxLength = 0;
  
    for (const key of frequencyMap.keys()) {
      if (frequencyMap.has(key + 1)) {
        const length = frequencyMap.get(key) + frequencyMap.get(key + 1);
        maxLength = Math.max(maxLength, length);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  console.log(findLHS(nums)); // Output: 5
  