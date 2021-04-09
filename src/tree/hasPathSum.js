/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let hasPathSum = function(root) {
    const result = [];

    const inorder = root1 => {
        if (!root1) return;
        inorder(root1.left);
        result.push(root1.val);
        inorder(root1.right);
    };

    inorder(root);

    return result;
};
