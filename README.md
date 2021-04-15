# algorithm
程序 = 数据结构 + 算法
## 时间复杂度
- 一个函数，用大 O 表示，比如 O(1)、O(2)
- 定性描述该算法的运行时间
## 空间复杂度
- 一个函数，用大 O 表示，比如 O(1)、O(2)
- 算法在运行过程中临时占用储存空间大小的量度
## 栈
- 一个后进先出的数据结构 
- JS 中没有栈，但是可以用 Array 实现栈的所有功能
### Leetcode 
- [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/preorderTraversal.js)
### 应用场景
- 十进制转二进制
- 判断字符串的括号是否有效
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/index.js#L11)
- 函数调用堆栈
    - 最后调用的函数，最先执行完
    - JS 解释器使用栈来控制函数的调用顺序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/callStack.js)
## 队列
- 一个先进先出的数据结构 
- JS 中没有队列，但是可以用 Array 实现队列的所有功能
### 应用场景
- 需要先进先出的场景
- 比如：食堂排队打饭、JS 异步中的任务队列、计算最近请求次数
- 先进先出，保证有序
### Leetcode 
- [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/queue/RecentCounter.js)
### 前端与队列
- JS 异步中的任务队列
    - 事件循环与任务队列 
        - JS 引擎 -> WebAPIs -> Callback Queue
        - 一段 JS 代码刚执行的时候会有一个匿名的主事件会丢到 Callback Queue 里。
        JS 引擎会去任务队列里面取一个事件执行，因为 JS 是单线程的，每次只能执行一个事件，在执行这个事件的过程中里面的异步任务 JS 引擎会丢给 WebAPIs 来执行。
        WebAPIs 在异步任务执行结束之后会把回调函数放到任务队列中。
## 链表
- 多个元素组成的列表 
- 元素储存不连续，用 next 指针连在一起
- JavaScript 中没有链表
- 可以用 Object 模拟链表
### 数组 vs 链表
- 数组：增删非首位元素时往往需要移动元素
- 链表：增删非首位元素，不需要移动元素，只需要更改 next 的指向即可
### Leetcode 
- [237. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/deleteNode.js)
- [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/removeElements.js)
- [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/reverseList.js)
- [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/reverseList.js)
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
### Leetcode 
- [104. 二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/maxDepth.js)
- [111. 二叉树的最小深度](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/minDepth.js)
- [102. 二叉树的层序遍历](https://leetcode-cn.com/problems/binary-tree-level-order-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/levelOrder.js)
- [94. 二叉树的中序遍历](https://leetcode-cn.com/problems/binary-tree-inorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/inorderTraversal.js)
- [112. 路径总和](https://leetcode-cn.com/problems/path-sum/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/hasPathSum.js)
- [100. 相同的树](https://leetcode-cn.com/problems/same-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/isSameTree.js)
- [100. 相同的树](https://leetcode-cn.com/problems/symmetric-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/isSameTree.js)
- [103. 二叉树的锯齿形层序遍历](https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/zigzagLevelOrder.js)
- [105. 从前序与中序遍历序列构造二叉树](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/buildTree.js)
### 前端与树 
- 遍历 JSON 的所有节点值
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/json.js)
- [用 React 或 Vue 编写一个省市区级联选择。](https://github.com/liao123-git/algorithm/blob/main/src/tree/CascadeSelection)
