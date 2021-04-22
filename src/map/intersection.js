/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const map1 = new Map();
    nums1.forEach(item => {
        map1.set(item, true);
    });
    const res = [];

    nums2.forEach(item => {
        if(map1.get(item)){
            res.push(item);
            map1.delete(item);
        }
    });

    return res;
};

/*
- 时间复杂度：O(N+M)
- 空间复杂度：O(N)
*/
