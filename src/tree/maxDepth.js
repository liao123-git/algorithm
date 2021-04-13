/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 /**
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * @param {TreeNode} root
 * @return {number}
 */
let maxDepth = function (root) {
    let res = 0;

    const dfs = (n, level) => {
        if (!n) return;
        else if (!n.left && !n.right) res = Math.max(level, res);
        dfs(n.left, level + 1);
        dfs(n.right, level + 1);
    };

    dfs(root, 1);

    return res;
};
/*
- 时间复杂度：O(n)，其中 n 为二叉树节点的个数。每个节点在递归中只被遍历一次。
- 空间复杂度：O(height)，其中 height 表示二叉树的高度。递归函数需要栈空间，而栈空间取决于递归的深度，因此空间复杂度等价于二叉树的高度。
*/
