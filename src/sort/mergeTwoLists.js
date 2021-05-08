/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    const res = new ListNode(0);
    let k1 = l1;
    let k2 = l2;
    let k3 = res;

    while (k1 && k2) {
        if (k1.val > k2.val) {
            k3.next = k2;
            k2 = k2.next;
        } else {
            k3.next = k1;
            k1 = k1.next;
        }
        k3 = k3.next;
    }

    k1 && (k3.next = k1);
    k2 && (k3.next = k2);

    return res.next;
};
/*
- 时间复杂度：O(N)，N 为两个链表中最短的节点数目 * 2
- 空间复杂度：O(1)
* */
