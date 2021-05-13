/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        if (n & 1 === 1) res++;
        n = n >> 1;
    }

    return res;
};
/*
* - 时间复杂度：O(K)
* - 空间复杂度：O(1)
* */


/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function (n) {
    let res = 0;

    while (n) {
        n &= n - 1;
        res++;
    }

    return res;
};
/*
* - 时间复杂度：O(K)
* - 空间复杂度：O(1)
* */
