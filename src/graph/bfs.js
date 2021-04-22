const graph = {
    0: [1, 2],
    1: [2],
    2: [0, 3],
    3: [3],
};


const bfs = (n) => {
    const stack = [n];
    const visited = new Set(stack);

    while (stack.length) {
        let first = stack.shift();
        console.log(first);
        graph[first].forEach(item => {
            !visited.has(item) && stack.push(item);
            visited.add(item);
        });
    }
};

bfs(2);
