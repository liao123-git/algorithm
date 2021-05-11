/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];

    const backtrack = (path) => {
        if (path.length >= nums.length) return;
        let lastItem = !path.length;
        res.push(path);
        nums.forEach(n => {
            if (lastItem) backtrack(path.concat(n));
            lastItem |= (path[path.length - 1] === n);
        });
    };
    backtrack([]);

    return res;
};
/*
* - 时间复杂度：O(N!)
* - 空间复杂度：O(N)
* */
