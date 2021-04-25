/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    if (!heights || !heights[0]) return [];

    const m = heights.length;
    const n = heights[0].length;
    const pacific = Array.from({length: m}, () => new Array(n).fill(false));
    const atlantic = Array.from({length: m}, () => new Array(n).fill(false));
    const res = [];

    const dfs = (r, c, flow) => {
        flow[r][c] = true;

        [[r, c + 1], [r, c - 1], [r + 1, c], [r - 1, c]].forEach(([newR, newC]) => {
            if (
                newR >= 0 && newR < m &&
                newC >= 0 && newC < n &&
                // 保证在矩阵中
                !flow[newR][newC] &&
                // 防止死循环
                flow[newR][newC] >= flow[r][c]
            ) {
                dfs(newR, newC, flow);
            }
        });
    };

    for (let r = 0; r < m; r++) {
        dfs(r, 0, pacific);
        dfs(r, n - 1, atlantic);
    }

    for (let c = 0; c < n; c++) {
        dfs(0, c, pacific);
        dfs(m - 1, c, atlantic);
    }

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            pacific[r][c] && atlantic[r][c] && res.push([r, c]);
        }
    }

    return res;
};
/*
- 时间复杂图：O(M*N)
- 空间复杂图：O(M*N)
*/
