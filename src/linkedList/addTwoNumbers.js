/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let num = 0;
    let res = new ListNode();
    let l3 = res;

    while (l1 || l2) {
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const v3 = v1 + v2 + num;

        num = Math.floor(v3 / 10);
        l3.next = new ListNode(v3 % 10);

        l1 && (l1 =  l1.next);
        l2 && (l2 =  l2.next);
        l3 = l3.next;
        num && !l1 && !l2 && (l3.next = new ListNode(1));
    }

    return res.next;
};
