Array.prototype.binarySearch = function (item) {
    let low = 0;
    let high = this.length - 1;

    while (low <= high) {
        const mid = ~~((low + high) / 2);
        const element = this[mid];
        if (element < item) {
            low = mid + 1;
        } else if (element > item) {
            high = mid - 1;
        } else if (element === item) {
            return mid;
        }
    }

    return -1;
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.binarySearch(2));
