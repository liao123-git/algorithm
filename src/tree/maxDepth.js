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
console.log(maxDepth([3, 9, 20, null, null, 15, 7]));
