class Queue {
    constructor(arr) {
        this.arr = arr;
    }

    push(item) {
        this.arr[this.arr.length] = item;
        return this.arr.length;
    }

    unshift(item) {
        this.arr = [item, ...this.arr];
        return this.arr.length;
    }

    shift() {
        return this.arr.splice(0, 1)[0];
    }

    pop() {
        return this.splice(this.arr.length - 1, 1)[0];
    }

    peek() {
        return this.arr[this.arr.length - 1];
    }

    splice(start, length) {
        let res = [];
        let newArr = [];

        this.arr.forEach((v, k) => {
            if (k >= start && k <= start + length) {
                res[res.length] = v;
            } else {
                newArr[newArr.length] = v;
            }
        });

        this.arr = newArr;
        return res;
    }

    getArray() {
        return this.arr;
    }

    getLength() {
        return this.arr.length;
    }
}
