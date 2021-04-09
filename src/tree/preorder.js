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

const preorder = root => {
    if(!root) return;
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
};

preorder(bt);


/*非递归*/
const preorder2 = root => {
    const stack = [root];
    while (stack.length) {
        let top = stack.pop();
        console.log(top.val);
        top.right && stack.push(top.right);
        // 栈后进先出
        top.left && stack.push(top.left);
    }
};

preorder2(bt);
