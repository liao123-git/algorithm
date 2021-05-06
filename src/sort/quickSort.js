Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length <= 1) return arr;
        const left = [];
        const right = [];
        for (let i = 1; i < arr.length; i++) {
            if (arr[0] > arr[i]) left.push(arr[i]);
            else right.push(arr[i]);
        }
        return [...rec(left), arr[0], ...rec(right)];
    };
    const res = rec(this);
    res.forEach((item, key) => {
        this[key] = item;
    })
};
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
arr.quickSort();
console.log(arr);
