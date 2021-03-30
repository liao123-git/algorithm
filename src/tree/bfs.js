const tree = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: []
                },
                {
                    val: "e",
                    children: []
                }
            ]
        },
        {
            val: "c",
            children: [
                {
                    val: "f",
                    children: []
                },
                {
                    val: "g",
                    children: []
                }
            ]
        }
    ]
};

const bfs = root => {
    const q = [root];

    while (q.length) {
        let first = q.shift();
        console.log(first.val);
        first.children.forEach(child => q.push(child));
    }
};

bfs(tree);
