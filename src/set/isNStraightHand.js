/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isNStraightHand = function(nums, k) {
    nums.sort((a,b)=>{
        return a-b;
    });

    while(nums.length){
        const first = nums.shift();
        let s = 0;
        while(++s<k){
            const key = nums.findIndex(item=>{return item===first+s});
            if(key===-1) return false;
            nums.splice(key,1);
        }
    }

    return true;
};

/*
- 时间复杂度：O(K*N)
- 空间复杂度：O(N)
*/
