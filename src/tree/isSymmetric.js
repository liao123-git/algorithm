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
    const dfs = (q, p) => {
        if (!q || !p) return q === p;
        return q.val === p.val && dfs(q.left, p.right) && dfs(q.right, p.left);
    };

    return dfs(root.left, root.right);
};
/*
- 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
- 空间复杂度：这里的空间复杂度和递归使用的栈空间有关，这里递归层数不超过 n，故渐进空间复杂度为 O(n)。
*/

/* 迭代算法 */
var isSymmetric2 = function (root) {
    const stack = [root.left, root.right];

    while (stack.length) {
        let q = stack.shift();
        let p = stack.shift();

        if (!q && !p) continue;
        else if ((!q || !p) || q.val !== p.val) return false;

        stack.push(q.left, p.right);
        stack.push(q.right, p.left);
    }

    return true;
};
/*
- 时间复杂度：这里遍历了这棵树，渐进时间复杂度为 O(n)。
- 空间复杂度：这里需要用一个队列来维护节点，每个节点最多进队一次，出队一次，队列中最多不会超过 n 个点，故渐进空间复杂度为 O(n)。
*/
