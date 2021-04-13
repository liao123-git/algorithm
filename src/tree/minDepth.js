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
/*
- 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
- 空间复杂度：O(H)，其中 H 是树的高度。空间复杂度主要取决于递归时栈空间的开销，最坏情况下，树呈现链状，空间复杂度为 O(N)。平均情况下树的高度与节点数的对数正相关，空间复杂度为 O(logN)。
*/


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
/*
- 时间复杂度：O(N)，其中 N 是树的节点数。对每个节点访问一次。
- 空间复杂度：O(H)，其中 N 是树的节点数。空间复杂度主要取决于队列的开销，队列中的元素个数不会超过树的节点数。
*/
