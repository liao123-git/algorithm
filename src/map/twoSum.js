/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/*
- 时间复杂度：O(N*M)
- 空间复杂度：O(N)
*/

var twoSum2 = function (nums, target) {
    const map = new Map();

    for (let i=0;i<nums.length;i++){
        const num = nums[i];
        const newTarget = target - num;

        if (map.has(newTarget)) {
            return [i, map.get(newTarget)];
        } else {
            map.set(num, i);
        }
    }
};
/*
- 时间复杂度：O(N)
- 空间复杂度：O(N)
*/
