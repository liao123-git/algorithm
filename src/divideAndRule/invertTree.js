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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root) return null;

    return new TreeNode(
        root.val,
        invertTree(root.right),
        invertTree(root.left),
    );
};
/*
* - 时间复杂度：O(N) N 为树的节点数量
* - 空间复杂度：O(N) N 为树高度
* */
