# algorithm
程序 = 数据结构 + 算法
## 时间复杂度
- 一个函数，用大`O`表示，比如`O(1)`、`O(2)`
- 定性描述该算法的运行时间
## 空间复杂度
- 一个函数，用大`O`表示，比如`O(1)`、`O(2)`
- 算法在运行过程中临时占用储存空间大小的量度
## 栈
- 一个后进先出的数据结构 
- `JS`中没有栈，但是可以用`Array`实现栈的所有功能
### Leetcode 
- [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/preorderTraversal.js)
### 应用场景
- 十进制转二进制
- 判断字符串的括号是否有效
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/index.js#L11)
- 函数调用堆栈
    - 最后调用的函数，最先执行完
    - `JS`解释器使用栈来控制函数的调用顺序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/stack/callStack.js)
## 队列
- 一个先进先出的数据结构 
- `JS`中没有队列，但是可以用`Array`实现队列的所有功能
### 应用场景
- 需要先进先出的场景
- 比如：食堂排队打饭、`JS`异步中的任务队列、计算最近请求次数
- 先进先出，保证有序
### Leetcode 
- [144. 二叉树的前序遍历](https://leetcode-cn.com/problems/binary-tree-preorder-traversal/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/queue/RecentCounter.js)
### 前端与队列
- `JS`异步中的任务队列
    - 事件循环与任务队列 
        - `JS`引擎 -> `WebAPIs` -> `Callback Queue`
        - 一段`JS`代码刚执行的时候会有一个匿名的主事件会丢到`Callback Queue`里。
        `JS`引擎会去任务队列里面取一个事件执行，因为`JS`是单线程的，每次只能执行一个事件，
        在执行这个事件的过程中里面的异步任务`JS`引擎会丢给`WebAPIs`来执行。
        `WebAPIs`在异步任务执行结束之后会把回调函数放到任务队列中。
## 链表
- 多个元素组成的列表 
- 元素储存不连续，用`next`指针连在一起
- `JavaScript`中没有链表
- 可以用`Object`模拟链表
### 数组 vs 链表
- 数组：增删非首位元素时往往需要移动元素
- 链表：增删非首位元素，不需要移动元素，只需要更改`next`的指向即可
### Leetcode 
- [237. 删除链表中的节点](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/deleteNode.js)
- [203. 移除链表元素](https://leetcode-cn.com/problems/remove-linked-list-elements/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/removeElements.js)
- [206. 反转链表](https://leetcode-cn.com/problems/reverse-linked-list/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/reverseList.js)
- [2. 两数相加](https://leetcode-cn.com/problems/add-two-numbers/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/reverseList.js)
- [83. 删除排序链表中的重复元素](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/deleteDuplicates.js)
- [141. 环形链表](https://leetcode-cn.com/problems/linked-list-cycle/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/hasCycle.js)
### 前端与链表
- JS 中的原型链
    - 原型链的本质是链表
    - 原型链上的节点是各种原型对象，比如
        - > Function.prototype 
        - > Object.prototype
    - 原型链通过`_proto_`属性连接各种原型对象 
    - 原型链长啥样
        - > obj -> Object.prototype -> null
        - > func -> Function.prototype -> Object.prototype -> null
        - > arr -> Array.prototype -> Object.prototype -> null
    - 原型链知识点
        - 如果`A`沿着原型链能找到`B.prototype`，那么`A instanceof B`为`true`
        - 如果在`A`对象上没有找到`x`属性，那么会沿着原型链找 x 属性
    - 面试题
        - `instanceof`的原理，用代码实现
            - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/prototype.js#12)
        - [第二题](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/prototype.js#25)
-  使用链表指针获取`JSON`的节点值
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/linkedList/json.js)
## 集合
- 集合是一种无序且唯一的数据结构
- `ES6`中有集合，名为`SET`
- 集合的常规操作：去重、判断某元素是否在集合中、求交集
### Leetcode 
- [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/set/intersection.js)
- [846. 一手顺子](https://leetcode-cn.com/problems/hand-of-straights/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/set/isNStraightHand.js)
### 前端与集合
- [实例](https://github.com/liao123-git/algorithm/blob/main/src/set/set.js)
## 字典
- 与集合类似，字典也是一种存储唯一值的数据结构，但它是以键值对的形式来储存
- `ES6`中有字典，名为`Map`
- 字典的常用操作：键值对的增删改查
### Leetcode 
- [349. 两个数组的交集](https://leetcode-cn.com/problems/intersection-of-two-arrays/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/map/intersection.js)
- [20. 有效的括号](https://leetcode-cn.com/problems/valid-parentheses/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/map/isValid.js)
- [1. 两数之和](https://leetcode-cn.com/problems/two-sum/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/map/twoSum.js)
- [76. 最小覆盖子串](https://leetcode-cn.com/problems/minimum-window-substring/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/map/minWindow.js)
## 树
- 一种分层数据的抽象模型
- 前端工作中常见的树包括：`DOM`树，级联选择，树形控件
- `JS`中没有树，但是可以用`Object`和`Array`构建树
- 树的常用操作：深度/广度优先遍历、先中后序遍历
- 深度优先遍历
    - 尽可能深的搜索树的分支
    - 算法口诀
        - 访问根节点
        - 对根节点的`children`挨个进行深度优先遍历
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/dfs.js#L33)
- 广度优先遍历
    - 先访问离根节点最近的节点
    - 算法口诀
        - 新建一个队列，把根节点入队
        - 把队头出队并访问
        - 把队头的`children`挨个入队
        - 重复第二三步，直到队列为空
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/bfs.js#L33)
### 二叉树
- 树中每个节点最多只能有两个子节点
- 在`JS`中通常用`Object`来模拟二叉树
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
- 遍历`JSON`的所有节点值
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/tree/json.js)
- [用 React 或 Vue 编写一个省市区级联选择。](https://github.com/liao123-git/algorithm/blob/main/src/tree/CascadeSelection)
## 图
- 图是网络结构的抽象模型，是一组由边连接的节点
- 图可以表示任何二元关系，比如道路、航班
- `JS`中没有图，但是可以用`Object`和`Array`构建图
- 图的表示法：邻接矩阵、邻接表、关联矩阵
### 图的深度广度优先遍历
- 深度优先遍历
    - 尽可能深的搜索图的分支
    - 算法口诀
        - 访问根节点
        - 对根节点的没访问过的相邻节点挨个进行深度优先遍历
- 广度优先遍历
    - 先访问离根节点最近的节点
    - 算法口诀
        - 新建一个队列，把根节点入队
        - 把队头出队并访问
        - 把队头的没访问过的相邻节点入队
### Leetcode                                                                                                                                                 吧                      
- [65. 有效数字](https://leetcode-cn.com/problems/valid-number/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/graph/isNumber.js)
    - [解题思路](https://github.com/liao123-git/algorithm/blob/main/src/graph/解题思路.jpg)
- [417. 太平洋大西洋水流问题](https://leetcode-cn.com/problems/pacific-atlantic-water-flow/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/graph/pacificAtlantic.js)
- [133. 克隆图](https://leetcode-cn.com/problems/clone-graph/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/graph/cloneGraph.js)
    - 这题注意官方的坑，原本的测试用例有三个
## 堆
- 堆是一种特殊的完全二叉树
- 所有的节点都大于等于（最大堆）或小于等于（最小堆）它的子节点
- JS 中通常用数组表示堆
- 左侧子节点的位置是`2 * index + 1`
- 右侧子节点的位置是`2 * index + 2`
- 父节点的位置是`(index - 1) / 2`
### Leetcode 
- [215. 数组中的第K个最大元素](https://leetcode-cn.com/problems/kth-largest-element-in-an-array/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/heap/findKthLargest.js)
- [347. 前 K 个高频元素](https://leetcode-cn.com/problems/top-k-frequent-elements/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/heap/topKFrequent.js)
- [23. 合并K个升序链表](https://leetcode-cn.com/problems/merge-k-sorted-lists/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/heap/mergeKLists.js)
## 排序和搜索
- 排序：把某个乱序的数组变成升序或者降序的数组
- 搜索：找出数组中某个元素的下标
- `JS`中的排序：数组的`sort`方法
- `JS`中的搜索：数组的`indexOf`方法
### 排序算法
- 冒泡排序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/bubbleSort.js)
    - 时间复杂度：`O(N^2)`
- 选择排序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/selectSort.js)
    - 时间复杂度：`O(N^2)`
- 插入排序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/insertSort.js)
    - 时间复杂度：`O(N^2)`
- 归并排序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/mergeSort.js)
    - 时间复杂度：`O(N*logN)`
- 快速排序
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/quickSort.js)
    - 时间复杂度：`O(N*logN)`
### 搜索算法
- 顺序搜索
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/search/sequentialSearch.js)
    - 时间复杂度：`O(N)`
- 二分搜索
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/search/sequentialSearch.js)
    - 时间复杂度：`O(N)`
    - 必须是有序数组
### Leetcode                                                                                                                                                                       
- [21. 合并两个有序链表](https://leetcode-cn.com/problems/merge-two-sorted-lists/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/sort/mergeTwoLists.js)
- [374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/search/guessNumber.js)
## 算法设计思想之 “分而治之”
- 分而治之是算法设计中的一种方法
- 它将一个问题分成多个和源问题相似的小问题，递归解决小问题，再将结果合并以解决原来的问题
### Leetcode                                                                                                                                                 
- [374. 猜数字大小](https://leetcode-cn.com/problems/guess-number-higher-or-lower/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/divideAndRule/guessNumber.js)                      
- [226. 翻转二叉树](https://leetcode-cn.com/problems/invert-binary-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/divideAndRule/invertTree.js)
- [101. 对称二叉树](https://leetcode-cn.com/problems/symmetric-tree/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/divideAndRule/isSymmetric.js)
## 算法设计思想之 “动态规划”
- 动态规划是算法设计中的一种方法
- 它将一个问题分解成相互重叠的子问题，通过反复求解子问题，来解决原来的问题
### Leetcode                                                                                   
- [70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/dynamicProgramming/climbStairs.js)
- [198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/dynamicProgramming/rob.js)   
## 算法设计思想之 “贪心算法”
- 贪心算法是算法设计中的一种方法
- 期盼通过每个阶段的局部最优选择，从而达到全局的最优
- 结果并不一定是最优
### Leetcode                                                                                   
- [70. 爬楼梯](https://leetcode-cn.com/problems/assign-cookies/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/greedyAlgorithm/findContentChildren.js)
- [122. 买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/greedyAlgorithm/maxProfit.js)
## 算法设计思想之 “回溯算法”
- 回溯算法是算法设计中的一种方法
- 回溯算法是一种渐进式寻找并构建问题解决方式的策略
- 回溯算法会先从一个可能的动作开始解决问题，如果不行，就回溯并选择另一个动作，知道将问题解决
### 适合用回溯算法解决的问题
- 有很多路
- 这些路里，有死路，也有出路
- 通常需要递归来模拟所有的路
### Leetcode                                                                                   
- [46. 全排列](https://leetcode-cn.com/problems/permutations/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/backtrackingAlgorithm/permute.js)
- [78. 子集](https://leetcode-cn.com/problems/subsets/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/backtrackingAlgorithm/subsets.js)    
## 位运算
[详情](https://github.com/liao123-git/algorithm/blob/main/src/bits/detail.docx)
### Leetcode                                                                                   
- [1356. 根据数字二进制下 1 的数目排序](https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/bits/sortByBits.js)
- [191. 位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/bits/hammingWeight.js)
- [461. 汉明距离](https://leetcode-cn.com/problems/hamming-distance/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/bits/hammingDistance.js)
- [1290. 二进制链表转整数](https://leetcode-cn.com/problems/convert-binary-number-in-a-linked-list-to-integer/)
    - [实例](https://github.com/liao123-git/algorithm/blob/main/src/bits/getDecimalValue.js)
## 阶乘
在数学上, 一个正整数`n`的阶乘 (写作`n!`), 就是所有小于等于`n`的正整数的乘积. 比如:
> 5! = 5 * 4 * 3 * 2 * 1 = 120
## 素数检测
素数是自然数大于`1`不能由相乘两个较小的自然数来形成。大于自然数`1`而不是质数的自然数称为复合数。例如，`5`之所以成为质数，是因为将其编写为产品`1 × 5`或的唯一方法`5 × 1`涉及`5`自身。但是，`6`之所以是复合的，是因为它是两个`(2 × 3)`均小于的两个数的乘积`6`。  
- [素数检测](https://github.com/liao123-git/algorithm/blob/main/src/primalityTest/trialDivision.js)
### 斐波那契数
在数学中，斐波那契数是以下整数序列（称为斐波那契数列）中的数字，其特征在于前两个数字之后的每个数字都是前两个数字的和：
```
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
```
边长为连续斐波纳契数的正方形平铺  
斐波那契螺旋：通过绘制连接斐波那契平铺中正方形的相对角的圆弧而创建的金色螺旋的近似值； [4]该三角形使用大小为`1、1、2、3、5、8、13`和`21`的正方形。
## 欧几里得算法
在数学中，欧几里得算法或欧几里得算法是一种有效的方法，可以计算两个数字的最大公约数（GCD），
最大公约数可将两个数除而无余数。  
欧几里得算法基于这样的原理：如果将较大的数字替换为较小的数字，则两个数字的最大公约数不变。
例如，`21`是的GCD`252`和 `105`（如`252 = 21 × 12`和`105 = 21 × 5`），
和相同数量`21`也是的GCD`105`和`252 − 105 = 147`。由于此替换减少了两个数字中的较大者，
因此重复此过程将得出连续较小的数字对，直到两个数字相等为止。发生这种情况时，它们就是原始两个数字的GCD。
- [欧几里得算法](https://github.com/liao123-git/algorithm/blob/main/src/euclidean/euclideanAlgorithm.js)
## 最小公倍数
在算术和数论，最小公倍数，最小公倍数，或两个整数的最小公倍数`a`和`b`，
通常由表示`LCM(a, b)`，是最小的正整数来既通过整除`a`和`b`。由于整数除以`0`是未定义的，
因此仅当`a`和`b`都不同于零时，此定义才有意义。然而，一些作者定义`lcm(a,0)` 为`0`所有`a`，
这是服用的结果`lcm`是至少在上部整除的晶格约束。
### 例子
4和6的LCM是多少？  
`4`的倍数是：
```
4 , 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, ...
```
`6`的倍数是：
```
6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72, ...
```
两个列表中既是`4`的倍数同时也是`6`的倍数的数：
```
12, 24, 36, 48, 60, 72, ....
```
所以，`4`和`6`的前几个公倍数列表中，它们的最小公倍数是`12`。
### 计算最小公倍数
以下公式将计算最小公倍数的问题减少到计算最大公约数（GCD）的问题，也称为最大公因子：
```
lcm(a, b) = |a * b| / gcd(a, b)
```
- [最小公倍数](https://github.com/liao123-git/algorithm/blob/main/src/euclidean/euclideanAlgorithm.js)
## 素数筛
素数筛是一种寻找所有素数到某个极限`n`的算法。  
它被认为是古希腊数学家古勒内的埃拉托斯特涅斯创造的。
### 工作原理
1. 创建一个`n+1`位置的布尔数组（表示数字`0`到`n`）
2. 将位置`0`和`1`设置为`false`，其余设置为`true`
3. 从位置`p=2`（第一个素数）开始
4. 将`p`的所有倍数（即位置`2*p`,`3*p`,`4*p`...直到你到达阵列的末端）
5. 找到数组中第一个大于`p`的真位置。如果没有这样的位置，停止。否则，让`p`等于这个新数字（它是下一个素数），并从步骤4开始重复
当算法终止时，数组中保持为真的数都是`n`以下的素数。
该算法的一个改进是，在步骤4中，从`p*p`开始标记`p`的倍数，而不是从`2*p`开始。之所以这样做是因为，在这一点上，`p`的较小倍数已经被标记为`false`。
- [素数筛](https://github.com/liao123-git/algorithm/blob/main/src/sieveEratosthenes/sieveOfEratosthenes.js)
## 判断 2 次方数
给定一个正整数，编写一个函数来确定它是否是2的幂
### 简单的解决方案
在简单的解决方案中，我们只需将数字除以2，除非数字变为1，并且每次这样做时，我们都检查除法后的余数始终为0。否则，数字不能是2的幂。
### 逐位解
二进制形式的二次幂总是只有一个位集。唯一的例外是有符号整数（例如，值为-128的8位有符号整数看起来像：10000000）  
因此，在检查了这个数字是否大于零之后，我们可以使用按位破解来测试这个数字，并且只设置了一个位。
```
number & (number - 1)
```
## 杨辉三角形
