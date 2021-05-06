Array.prototype.selectSort = function () {
    for (let i = 0; i < this.length; i++) {
        let minKey = i;
        for (let j = i; j < this.length; j++) {
            if (this[j] <= this[minKey]) minKey = j;
        }
        this.splice(i, 0, this.splice(minKey, 1)[0]);
    }
};
let arr = [8888888, 44, 5, 89, 2, 8, 6564, 4654, 654687, 32135];
arr.selectSort();
console.log(arr);
