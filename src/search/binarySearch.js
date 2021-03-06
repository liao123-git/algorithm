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
    let res = new ListNode();
    let k1 = l1;
    let k2 = l2;
    let k3 = res.next;

    while (k1 || k2) {
        if (k1 && k2) {
            k3 = new ListNode(k1 > k2 ? k2 : k1);
            k1 > k2 ? K2 = K2.next : K1 = K1.next;
        } else if (k1) {
            k3 = new ListNode(k1);
            K1 = K1.next;
        } else if (k2) {
            k3 = new ListNode(k2);
            K2 = K2.next;
        }
        k3 = k3.next;
    }

    return res.next;
};
