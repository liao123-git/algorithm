/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    const dfs = (node)=>{
        if(!node.next){
            return [node.val, 1];
        }else{
            let [num, index] = dfs(node.next);
            node.val && (num += Math.pow(2, index));
            return [num , index + 1];
        }
    };

    return  dfs(head)[0];
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(N)
* */



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue2 = function(head) {
    let p = head;
    let res = 0;

    while (p){
        p = p * 2 + p.val;
        p = p.next;
    }

    return res;
};
/*
* - 时间复杂度：O(N)
* - 空间复杂度：O(1)
* */
