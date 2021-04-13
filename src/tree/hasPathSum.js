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
let hasPathSum = function (root, targetSum) {
    let result = false;

    const dfs = (n, sum = false) => {
        if (!n.left && !n.right && sum + n.val === targetSum) {
            result = true;
        }
        n.left && dfs(n.left, sum + n.val);
        n.right && dfs(n.right, sum + n.val);
    };

    root && dfs(root);

    return result;
};
/*
- 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
- 空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。
*/
