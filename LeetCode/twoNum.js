/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    var arr = [];
    for (var i = 0; i < nums.length; i++) {
        var index = nums.indexOf(target - nums[i]);
        if (index != -1 && index != i) {

            arr = [i, index];
            break;
        } else {

            continue;
        }
    }
    return arr;
};

var nums = [3, 2, 4], target = 6;

var result = twoSum(nums, target);
console.log(result)