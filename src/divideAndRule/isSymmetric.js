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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) return true;

    const dfs = (left, right) => {
        if (!left && !right) return true;
        if (left.val !== right.val) return false;
        return dfs(left.left, right.right) && dfs(left.right, right.left);
    };

    return dfs(root.left, root.right);
};
/*
* - 时间复杂度：O(N) N 为树的节点数量
* - 空间复杂度：O(N) N 为树的高度
* */
