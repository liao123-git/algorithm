/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let res = 0;

    for (let i = 0; i < 32; i++){
        res += (x & 1) !== (y & 1);
        x = x >> 1;
        y = y >> 1;
    }

    return res;
};
/*
* - 时间复杂度：O(K)
* - 空间复杂度：O(1)
* */
