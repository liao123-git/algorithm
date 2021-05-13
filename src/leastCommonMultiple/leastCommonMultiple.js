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



/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number}
 */
var leastCommonMultiple = function (originalA, originalB) {
    return ((originalA === 0) || (originalB===0)) ? 0 : Math.abs(originalA * originalB) / euclideanAlgorithm(originalA, originalB);
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(1)
* */
