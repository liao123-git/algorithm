/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
    if (!node) return;
    const visited = new Map();

    const dfs = (n) => {
        const nCopy = new Node(n.val);
        visited.set(n, nCopy);
        (n.neighbors || []).forEach(item => {
            if(!visited.has(item) ){
                dfs(item)
            }
            nCopy.neighbors.push(visited.get(item));
        });
        return nCopy;
    };

    return dfs(node);
};
/*
- 时间复杂图：O(N)
- 空间复杂图：O(N)
*/
