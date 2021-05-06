/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
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
        let pop = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = pop;
            this.shiftDown(0);
        }
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return [];
    let heap = new MinHeap();
    let res = [];
    let next = {};

    const dfs = node => {
        heap.insert(node)
        node.next && dfs(node.next);
    };

    lists.forEach(item => {
        dfs(item);
    });

    heap.size() && (res = new ListNode(heap.peek()));
    heap.pop();
    next = res.next;

    while (heap.size() > 0) {
        console.log(heap.size())
        next = new ListNode(heap.peek());
        heap.pop();
        next = next.next;
    }

    return res;
};
