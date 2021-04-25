/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set = new Set(nums2);
    let res = new Set([...nums1.filter(item=>set.has(item))]);

    return [...res];
};

/*
- 时间复杂度：O(N)
- 空间复杂度：O(N)
*/



var intersection2 = function(nums1, nums2) {
    return [...new Set(nums1)].filter(item=>nums2.includes(item));
};
/*
- 时间复杂度：O(M*N)
- 空间复杂度：O(N)
*/
