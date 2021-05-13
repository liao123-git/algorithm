/**
 * @param {number} num
 * @return {boolean}
 *
 * 解题思路
 ** 素数不能整除 1 和 自身 外的数
 */
var trialDivision = function (num) {
    if (!num || num <= 1) return false;

    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(1)
* */
