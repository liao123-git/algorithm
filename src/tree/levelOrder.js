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
let levelOrder = function (root) {
    let result = [];

    const dfs = (root1, level) => {
        if (!root1) return;
        !result[level] ? result[level] = [root1.val] : result[level].push(root1.val);
        dfs(root1.left, level + 1);
        dfs(root1.right, level + 1);
    };

    dfs(root, 0);

    return result;
};

/*广度优先遍历解法*/
let levelOrder2 = function (root) {
    if (!root) return [];
    let result = [];
    const q = [[root, 0]];

    while (q.length) {
        let [n, l] = q.shift();
        if (!n) break;
        !result[l] ? result[l] = [n.val] : result[l].push(n.val);
        n.left && q.push([n.left, l + 1]);
        n.right && q.push([n.right, l + 1]);
    }

    return result;
};

/*广度优先遍历解法2*/
let levelOrder3 = function (root) {
    if (!root) return [];
    let result = [];
    const q = [root];

    while (q.length) {
        let length = q.length;
        result.push([]);

        while (length--) {
            let n = q.shift();
            result[result.length-1].push(n.val);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
    }

    return result;
};

/*
- 时间复杂度：每个点进队出队各一次，故渐进时间复杂度为 O(n)。
- 空间复杂度：队列中元素的个数不超过 n 个，故渐进空间复杂度为 O(n)。
*/
