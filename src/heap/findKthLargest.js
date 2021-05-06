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


        if (left >= 0 && this.heap[index] > this.heap[left]) {
            this.swap(index, left);
            this.shiftDown(left);
        }
        if (right >= 0 && this.heap[index] > this.heap[right]) {
            this.swap(index, right);
            this.shiftDown(right);
        }
    }

    shiftUp(index) {
        const parentIndex = this.getParentIndex(index);

        if (parentIndex >= 0 && this.heap[index] < this.heap[parentIndex]) {
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 *
 * 解题思路
 * * 看到 “第 K 个最大元素”
 * * 考虑选择使用最小堆
 *
 * 解题步骤
 * * 构建一个最小堆，并依次把数组的值插入堆中
 * * 当堆的容量超过 K ，就删除堆顶
 * * 插入结束后，堆顶就是第 K 个最大元素
 */
var findKthLargest = function (nums, k) {
    let heap = new MinHeap();
    nums.forEach(item => {
        heap.insert(item);
        if (heap.size() >= k) heap.pop();
    });
    return heap.peek();
};
/*
* - 时间复杂度：O(N * logK)
* - 空间复杂度：O(K)
* */

var findKthLargest2 = function (nums, k) {
    nums.sort((a, b) => {
        return b - a;
    });
    return nums[k - 1];
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(1)
* */
