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
 * @return {number}
 */
// 深度优先遍历
let dMinDepth = function (root) {
    let res = Math.pow(10, 5);
    const dfs = (n, level) => {
        if (!n) return;
        else if (!n.left && !n.right) res = Math.min(level, res);
        dfs(n.left, level + 1);
        dfs(n.right, level + 1);
    };

    dfs(root, 1);

    return root ? res : 0;
};


// 广度优先遍历
let bMinDepth = function (root) {
    if (!root) return 0;
    const q = [[root, 1]];

    while (q.length) {
        let [n, l] = q.shift();
        if (!n.left && !n.right) {
            return l;
        }
        n.left && q.push([n.left, l + 1]);
        n.right && q.push([n.right, l + 1]);
    }
};
