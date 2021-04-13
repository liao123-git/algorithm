/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    const tree = [];
    let leftLength = 0;
    let rightLength = 0;

    const a = (rootK) => {
        tree.push(preorder[rootK]);
    };

    if (inorder[0]) {
        preorder.forEach((v, k) => v === inorder[0] && (leftLength = k));
        rightLength = preorder - leftLength - 1;
        a(leftLength);
    }


    return tree;
};
