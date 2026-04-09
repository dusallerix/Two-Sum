/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//решение с двумя указателями
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) return [i, j];
        }
    }
    return [];
};

//решение с indexOf
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let search = target - nums[i];
        if (nums.indexOf(search, i + 1) != -1) {
            search = nums.indexOf(search, i + 1);
            return [i, search];
        }
    }
};
