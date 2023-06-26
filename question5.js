/* Q 5:
Given an integer array nums, find three numbers whose product is
 maximum and return the maximum product.

 Example 1:
Input: nums = [1,2,3]
Output: 6 */

function maxProduct(nums){
    nums.sort((a,b)=>a-b);

 const prod1=nums[nums.length-1]* nums[nums.length-2]*nums[nums.length-3];
const prod2=nums[0]*nums[1]*nums[nums.length-1];

return Math.max(prod1,prod2);
}

const nums=[1,2,3];
console.log(maxProduct(nums));