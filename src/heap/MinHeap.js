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

let heap = new MinHeap();
heap.insert(5);
heap.insert(3);
heap.insert(2);
heap.insert(1);
heap.insert(10);
heap.insert(8);
heap.insert(11);
heap.insert(9);
heap.pop();
console.log(heap.heap);
heap.pop();
console.log(heap.heap);
console.log(heap.peek(),heap.size());
