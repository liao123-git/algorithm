/**
 * @param {number} num
 * @return {boolean}
 */
var intersection = function (num) {
    if (!num || num < 2) return false;

    while (num > 1) {
        if (num % 2 !== 0) return false;
        num /= 2;
    }

    return true;
};

/*
- 时间复杂度：O(log N)
- 空间复杂度：O(1)
*/
