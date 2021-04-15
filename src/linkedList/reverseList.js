/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let curr = head;
    let prev = null;

    while(curr){
        const backup = curr.next;
        curr.next = prev;
        prev = curr;
        curr = backup;
    }

    return prev;
};

/*
- 时间复杂度：O(N)
- 空间复杂度：O(1)
* */
