Array.prototype.sequentialSearch = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (item === this[i]) return i;
    }
    return -1;
};
let arr = [8888888, 44, 5, 89, 2, 8, 6564, 4654, 654687, 32135];
console.log(arr.sequentialSearch(32135));
