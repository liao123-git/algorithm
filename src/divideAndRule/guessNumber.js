/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return                -1 if num is lower than the guess number
 *                         1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    const rec = (min, max)=>{
        const mid = Math.floor((min + max) / 2);
        const res = guess(mid);

        if(res === 1) return rec(mid + 1, max);
        else if(res === -1) return rec(min, mid - 1);
        else return mid;
    };

    return rec(1,n);
};
/*
* - 时间复杂度：O(logN)
* - 空间复杂度：O(logN)
* */

