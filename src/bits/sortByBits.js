/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const res = [];
    const allNum = [];

    arr.forEach((n, i)=>{
        let j = 32;
        let num = n;
        let sum = 0;
        while(j-->0){
            sum += num & 1;
            num = num >> 1;
        }
        allNum[sum] ||= [];
        allNum[sum].push(n);
    });

    allNum.forEach((n)=>{
        n.sort((a,b)=>{return a-b});
        res.push(...n);
    });

    return res;
};
/*
* - 时间复杂度：O(N*M*logM)
* - 空间复杂度：O(N)
* */
