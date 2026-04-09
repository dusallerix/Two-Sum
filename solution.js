/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let search = target - nums[i];
        if (nums.indexOf(search, i + 1) != -1) {
            search = nums.indexOf(search, i + 1);
            return [i, search];
        }
    }
};
