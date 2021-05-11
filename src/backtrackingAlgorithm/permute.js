/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];

    const backtrack = (path, lastI = 0) => {
        res.push(path);
        if (path.length >= nums.length) return;
        nums.forEach((n, i) => {
            if (!path.length || lastI < i) backtrack(path.concat(n), i);
        });
    };
    backtrack([]);

    return res;
};
/*
* - 时间复杂度：O(N*2)
* - 空间复杂度：O(N)
* */
