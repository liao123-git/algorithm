Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            let next = i + 1 < this.length ? this[j + 1] : false;
            let now = this[j];

            if (next !== false && next < now) {
                this[j] = next;
                this[j + 1] = now;
            }
        }
    }
};
let arr = [8888888, 44, 5, 89, 2, 8, 6564, 4654, 654687, 32135];
arr.bubbleSort();
console.log(arr);
