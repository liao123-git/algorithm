const bt = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
};

const postorder = root => {
    if (!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
};

postorder(bt);

const postorder2 = root => {
    const stack = [root];
    const outputStack = [];

    while (stack.length) {
        let top = stack.pop();
        outputStack.push(top);
        top.left && stack.push(top.left);
        top.right && stack.push(top.right);
    }

    while (outputStack.length) {
        let n = outputStack.pop();
        console.log(n.val);
    }
};

postorder2(bt);
