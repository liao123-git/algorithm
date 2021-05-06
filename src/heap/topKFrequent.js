/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const map = new Map();
    nums.forEach(item => map.set(item, map.has(item) ? map.get(item) + 1 : 1));
    let list = Array.from(map).sort((a, b) => {
        return b[1] - a[1];
    });
    // sort 方法时间复杂度为 O(N log N)
    return list.slice(0, k).map(n => n[0]);
};
/*
* - 时间复杂度：O(N log N)
* - 空间复杂度：O(N)
* */


var topKFrequent2 = function (nums, k) {
    const map = new Map();
    nums.forEach(item => map.set(item, map.has(item) ? map.get(item) + 1 : 1));
    const heap = new MinHeap();
    map.forEach((value, key) => {
        heap.insert({value, key});
        heap.size() > k && heap.pop();
    });
    return heap.heap.map(n => n.key);
};

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(i) {
        return (i - 1) >> 1;
    }

    childrenIndex(i) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        return [left, right];
    }

    swap(i1, i2) {
        let backup = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = backup;
    }

    shiftDown(index) {
        const [left, right] = this.childrenIndex(index);


        if (left >= 0 && this.heap[index].value > this.heap[left].value) {
            this.swap(index, left);
            this.shiftDown(left);
        }
        if (right >= 0 && this.heap[index].value > this.heap[right].value) {
            this.swap(index, right);
            this.shiftDown(right);
        }
    }

    shiftUp(index) {
        const parentIndex = this.getParentIndex(index);

        if (parentIndex >= 0 && this.heap[index].value < this.heap[parentIndex].value) {
            this.swap(index, parentIndex);
            this.shiftUp(parentIndex);
        }
    }

    insert(item) {
        this.heap.push(item);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
/*
* - 时间复杂度：O(N log K)
* - 空间复杂度：O(N)
* */
