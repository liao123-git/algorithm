# algorithm
程序 = 数据结构 + 算法
## 时间复杂度
- 一个函数，用大 O 表示，比如 O(1)、O(2)
- 定性描述该算法的运行时间
## 时间复杂度
- 一个函数，用大 O 表示，比如 O(1)、O(2)
- 算法在运行过程中临时占用储存空间大小的量度
## 栈
- 一个后进先出的数据结构
- JS 中没有栈，但是可以用 Array 实现栈的所有功能
### 应用场景
- 十进制转二进制
- 判断字符串的括号是否有效
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/index.js#L11)
- 函数调用堆栈
    - 最后调用的函数，最先执行完
    - JS 解释器使用栈来控制函数的调用顺序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/callStack.js)
## 树
- 一种分层数据的抽象模型
- 前端工作中常见的树包括：DOM 树，级联选择，树形控件
- JS 中没有树，但是可以用 Object 和 Array 构建树
- 树的常用操作：深度/广度优先遍历、先中后序遍历
- 深度优先遍历
    - 尽可能深的搜索树的分支
    - 算法口诀
        - 访问根节点
        - 对根节点的 children 挨个进行深度优先遍历
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/dfs.js#L33)
- 广度优先遍历
    - 先访问离根节点最近的节点
    - 算法口诀
        - 新建一个队列，把根节点入队
        - 把队头出队并访问
        - 把队头的 children 挨个入队
        - 重复第二三步，直到队列为空
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/bfs.js#L33)
### 二叉树
- 树中每个节点最多只能有两个子节点
- 在 JS 中通常用 Object 来模拟二叉树
- 先序遍历算法口诀
    - 访问根节点
    - 对根节点的左子树进行先序遍历
    - 对根节点的右子树进行先序遍历
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/preorder.js#L31)
- 中序遍历算法口诀
    - 对根节点的左子树进行中序遍历
    - 访问根节点
    - 对根节点的右子树进行中序遍历
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/inorder.js#L31)
- 后序遍历算法口诀
    - 对根节点的左子树进行后序遍历
    - 对根节点的右子树进行后序遍历
    - 访问根节点
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/postorder.js#L31)
