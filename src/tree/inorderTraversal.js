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
let inorderTraversal = function(root) {
    const result = [];

    const inorder = root1 => {
        if (!root1) return;
        inorder(root1.left);
        result.push(root1.val);
        inorder(root1.right);
    };

    inorder(root);

    return result;
};


/*迭代算法*/
let inorderTraversal2 = function (root) {
    const result = [];
    const stack = [];
    let p = root;

    while (stack.length || p) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        result.push(n.val);
        p = n.right;
    }

    return result;
};
