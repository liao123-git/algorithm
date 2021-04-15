/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return [];
    const res = [];
    const stack = [];

    const preorder = n=>{
        if(!n) return;
        res.push(n.val);
        preorder(n.left);
        preorder(n.right);
    };

    preorder(root);

    return res;
};

/* 迭代算法 */
var preorderTraversal2 = function (root) {
    if (!root) return [];
    const res = [];
    const stack = [root];

    while (stack.length) {
        let first = stack.shift();
        res.push(first.val);
        first.right && stack.unshift(first.right);
        first.left && stack.unshift(first.left);
    }

    return res;
};
