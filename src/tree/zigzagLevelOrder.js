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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let result = [];

    const dfs = (n, level) => {
        if (!n) return;

        !result[level] && (result[level] = []);
        level % 2 !== 0 ? result[level].unshift(n.val) : result[level].push(n.val);

        n.left && dfs(n.left, level + 1);
        n.right && dfs(n.right, level + 1);
    };

    dfs(root, 0);

    return result;
};

/* 迭代算法 */
var zigzagLevelOrder2 = function (root) {
    const stack = [[root, 0]];
    let result = [];

    while (stack.length) {
        let [n, level] = stack.shift();

        if (!n) continue;
        !result[level] && (result[level] = []);
        level % 2 !== 0 ? result[level].unshift(n.val) : result[level].push(n.val);

        n.left && stack.push([n.left, level + 1]);
        n.right && stack.push([n.right, level + 1]);
    }

    return result;
};
