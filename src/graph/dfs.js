const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
};

const visited = new Set();

const dfs = (n) => {
    console.log(n);
    visited.add(n);
    graph[n].forEach(item => {
        !visited.has(item) && dfs(item);
    });
};

dfs(2);
