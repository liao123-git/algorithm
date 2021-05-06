Array.prototype.insertSort = function () {
    for (let i = 0; i < this.length; i++) {
        const temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            j--;
        }
        this[j] = temp;
    }
};
let arr = [8888888, 44, 5, 89, 2, 8, 6564, 4654, 654687, 32135];
arr.insertSort();
console.log(arr);
