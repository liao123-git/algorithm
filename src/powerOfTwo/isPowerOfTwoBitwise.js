/**
 * @param {number} num
 * @return {boolean}
 */
var intersection = function (num) {
    if (!num || num < 2) return false;

    let bit = 0;

    for (let i = 0; i < 32; i++) {
        if (num & 1) bit++;
        if (bit > 1) return false;
        num = num >> 1;
    }

    return bit === 1;
};

/*
- 时间复杂度：O(N) N 为 32
- 空间复杂度：O(1)
*/
