/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
var euclideanAlgorithm = function (originalA, originalB) {
    const a = Math.abs(originalA);
    const b = Math.abs(originalB);

    return b === 0 ? a : euclideanAlgorithm(b, a % b);
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(1)
* */
