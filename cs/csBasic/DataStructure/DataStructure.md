# [数据结构-浙江大学](https://www.bilibili.com/video/BV1JW411i731?p=3&t=69)

## 参考资料

[数据结构-浙江大学](https://www.bilibili.com/video/BV1JW411i731?p=3&t=69)

## 第一章 算法

### 1.1.3 关于算法效率

### 1.1.4 抽象数据类型

### 1.2.1 算法的定义

算法不关心具体细节

### 1.2.2 什么是好的算法

- 空间复杂度

  执行算法时占用的存储单元长度

- 时间复杂度

  算法执行时间长度

#### 递归调用

调用其他函数时, 会将当前函数保存到内存中, 当内层函数执行之后再执行外层函数. 若递归调用函数数量过多时, 会造成 堆栈溢出, 使得程序异常退出.

#### 例 3

- 计算机做加减法速度远快于乘除法, 粗略估计复杂度看计算乘除法的次数

#### 分析一般算法

关注:

- 最坏情况复杂度 T_worst(n)
- 平均复杂度 T_avg(n)

平均复杂度不好区分, 最关心的是最坏情况复杂度

### 1.2.3 复杂度的渐进表示法

不对算法复杂度最精细的分析, 只分析出, 在 n 很大时, n 的多少次方起主要作用. 这就是渐进式表示法

![image-20200907143445874](DataStructure.assets/image-20200907143445874.png)

上面的内容简单来说:

我们算法有一个时间复杂度

O(f(n))可以取很多个, 但是我们一般取最接近此算法时间复杂度的上界

Ω(f(n))可以取很多个, 但是我们取最接近此算法时间复杂度下界

若此算法的时间复杂度可找到一条接近的线, 则用 θ(h(n))表示

#### 输入规模

![image-20200907144454206](DataStructure.assets/image-20200907144454206.png)

![image-20200907144606663](DataStructure.assets/image-20200907144606663.png)

![image-20200907144822852](DataStructure.assets/image-20200907144822852.png)

#### 复杂度分析小窍门

![image-20200907145103910](DataStructure.assets/image-20200907145103910.png)

- 两个算法相加, 总时间复杂度取时间复杂度最大的一个
- 两个算法相乘(算法嵌套): 时间复杂度相乘

### 1.3.1 应用实例算法 1&2: 最大子列和问题

最大子列和问题 : ![image-20200912105621460](DataStructure.assets/image-20200912105621460.png)

### 1.3.2 应用实例算法 3: 最大子列和问题

### 1.3.3 应用实例算法 4: 最大子列和问题

## 第二章 线性表

### 2.2.1 引子: 多项式表示

![image-20200912112452782](DataStructure.assets/image-20200912112452782.png)

![image-20200912112736246](DataStructure.assets/image-20200912112736246.png)

![image-20200912113049647](DataStructure.assets/image-20200912113049647.png)

![image-20200912113226526](DataStructure.assets/image-20200912113226526.png)

### 2.1.2 线性表及其顺序存储

![image-20200912122411718](DataStructure.assets/image-20200912122411718.png)

### 2.1.3 顺序存储的插入和删除

![image-20200912123407232](DataStructure.assets/image-20200912123407232.png)

![image-20200912123525328](DataStructure.assets/image-20200912123525328.png)

![image-20200912123758154](DataStructure.assets/image-20200912123758154.png)

### 2.1.4 链式存储及查找

![image-20200912154919164](DataStructure.assets/image-20200912154919164.png)

![image-20200912155136158](DataStructure.assets/image-20200912155136158.png)

![image-20200912155614534](DataStructure.assets/image-20200912155614534.png)

### 2.1.5 链式存储的插入和删除

![image-20200912160634487](DataStructure.assets/image-20200912160634487.png)

![image-20200912161158592](DataStructure.assets/image-20200912161158592.png)

- 插入在表头和其他位置有区别, 要分开写
- s -> Next =p ->Next 和 p -> Next =s; 顺序不能交换.

![image-20200912162007672](DataStructure.assets/image-20200912162007672.png)

![image-20200912162455785](DataStructure.assets/image-20200912162455785.png)

### 2.1.6 广义表与多重链表

#### 广义表

![image-20200912230653681](DataStructure.assets/image-20200912230653681.png)

![image-20200912230832388](DataStructure.assets/image-20200912230832388.png)

#### 多重链表

![image-20200912231112979](DataStructure.assets/image-20200912231112979.png)

例子

![image-20200912231442246](DataStructure.assets/image-20200912231442246.png)

### 2.2.1 什么是堆栈

#### 中缀表达式

人们书写的表达式

#### 后缀表达式

计算机使用的, 运算符在数字后面

![image-20200912233512633](DataStructure.assets/image-20200912233512633.png)

![image-20200912233646465](DataStructure.assets/image-20200912233646465.png)

#### 堆栈的抽象数据类型描述

![image-20200912233816269](DataStructure.assets/image-20200912233816269.png)

![image-20200912233905973](DataStructure.assets/image-20200912233905973.png)

![image-20200912234149536](DataStructure.assets/image-20200912234149536.png)

### 2.2.2 栈的顺序存储实现

![image-20200913001816883](DataStructure.assets/image-20200913001816883.png)

![image-20200913002045030](DataStructure.assets/image-20200913002045030.png)

2.2.3 栈的链式存储实现

用单向链表表示时, Top 应该位于表头.

若位于表尾, 由于是单向链表,

做插入操作时, 没问题;

做删除操作时, 找不到前一个节点, 只能找到后一个节点.

#### 创建和判断是否为空操作

![image-20200913084731669](DataStructure.assets/image-20200913084731669.png)

#### Push

![image-20200913085115325](DataStructure.assets/image-20200913085115325.png)

#### Pop

链表实现的队列不用判断是否为满, 因为是每次插入节点时申请空间, 不像数组那样, 元素个数固定.

![image-20200913090059839](DataStructure.assets/image-20200913090059839.png)

### 2.2.4 堆栈的应用: 表达式求值

![image-20200913091308912](DataStructure.assets/image-20200913091308912.png)

#### 中缀表达式转后缀表达式

![image-20200913091757522](DataStructure.assets/image-20200913091757522.png)

![image-20200913092003834](DataStructure.assets/image-20200913092003834.png)

![image-20200913092137171](DataStructure.assets/image-20200913092137171.png)

#### 堆栈的其他应用

- 函数调用以及递归实现
- 深度优先搜索
- 回朔算法(迷宫问题)

### 2.3.1 队列及顺序存储实现

#### 什么是队列

![image-20200913092805271](DataStructure.assets/image-20200913092805271.png)

#### 队列的抽象数据类型描述

![image-20200913092922964](DataStructure.assets/image-20200913092922964.png)

![image-20200913093150196](DataStructure.assets/image-20200913093150196.png)

![image-20200913101209154](DataStructure.assets/image-20200913101209154.png)

顺环队列能造成空和满无法判断的情况 Rear 和 Front 指针重合时 既可以为空 也可以为满. 这里用的方法 2 解决

![image-20200913101647714](DataStructure.assets/image-20200913101647714.png)

![image-20200913103315003](DataStructure.assets/image-20200913103315003.png)

### 2.3.2 队列的链式存储实现

用单向链表:

- 链表头做队列 front(出队列的地方)
- 链表尾做队列 rear(入队列的地方)

因为链表尾删除有问题, 不能找到上一个的指针(单向链表的原因, 只能找到后一个指针, 不能找到前面的指针), 所以选择链表头当队列 front

![image-20200913104805278](DataStructure.assets/image-20200913104805278.png)

![image-20200913105549442](DataStructure.assets/image-20200913105549442.png)

![image-20200913110121688](DataStructure.assets/image-20200913110121688.png)

### 2.4 多项式的加减运算实现

#### 多项式加法运算

![image-20200913110330650](DataStructure.assets/image-20200913110330650.png)

![image-20200913110449691](DataStructure.assets/image-20200913110449691.png)

![image-20200913111638445](DataStructure.assets/image-20200913111638445.png)

![image-20200913112612511](DataStructure.assets/image-20200913112612511.png)

![image-20200913112923610](DataStructure.assets/image-20200913112923610.png)

### 多项式计算小白专场

1. 数据结构设计![image-20200913114215040](DataStructure.assets/image-20200913114215040.png)

2. ![image-20200913171054983](DataStructure.assets/image-20200913171054983.png)

3. 未完待续

   https://www.bilibili.com/video/BV1JW411i731?p=25

## [P24 1.题意理解与多项式表示](https://www.bilibili.com/video/BV1JW411i731?p=24)
## [P25 2.程序框架及读入多项式](https://www.bilibili.com/video/BV1JW411i731?p=25)
## [P26 3.加法、乘法运算及多项式输出](https://www.bilibili.com/video/BV1JW411i731?p=26)
## [P27 3.1.1 引子(顺序查找)](https://www.bilibili.com/video/BV1JW411i731?p=27)
## [P28 3.1.2 引子(二分查找梨子)](https://www.bilibili.com/video/BV1JW411i731?p=28)
## [P29 3.1.3 引子(二分查找实现)](https://www.bilibili.com/video/BV1JW411i731?p=29)
## [P30 3.1.4 树的定义和术语](https://www.bilibili.com/video/BV1JW411i731?p=30)
## [P31 3.1.5 树的表示](https://www.bilibili.com/video/BV1JW411i731?p=31)
## [P32 3.2.1 二叉树的定义及性质](https://www.bilibili.com/video/BV1JW411i731?p=32)
## [P33 3.2.3 二叉树的存储结构](https://www.bilibili.com/video/BV1JW411i731?p=33)
## [P34 3.3.1 先序中序后序遍历](https://www.bilibili.com/video/BV1JW411i731?p=34)
## [P35 3.3.2 中序非递归遍历](https://www.bilibili.com/video/BV1JW411i731?p=35)
## [P36 3.3.3 层序遍历](https://www.bilibili.com/video/BV1JW411i731?p=36)
## [P37 3.3.4 遍历应用的例子](https://www.bilibili.com/video/BV1JW411i731?p=37)
## [P38 1.题意理解及二叉树表示](https://www.bilibili.com/video/BV1JW411i731?p=38)
## [P39 2.程序框架、建树及同构判别](https://www.bilibili.com/video/BV1JW411i731?p=39)
## [P40 4.1.1 二叉搜索树及查找](https://www.bilibili.com/video/BV1JW411i731?p=40)
## [P41 4.1.2 二叉搜索树的插入](https://www.bilibili.com/video/BV1JW411i731?p=41)
## [P42 4.1.3 二叉搜索树的删除](https://www.bilibili.com/video/BV1JW411i731?p=42)
## [P43 4.2.1 什么是二叉平衡树](https://www.bilibili.com/video/BV1JW411i731?p=43)
## [P44 4.2.2 平衡二叉树的调整](https://www.bilibili.com/video/BV1JW411i731?p=44)
## [P45 线性结构习题.1 什么是抽象的链表](https://www.bilibili.com/video/BV1JW411i731?p=45)
## [P46 线性结构习题.2 链表逆转算法](https://www.bilibili.com/video/BV1JW411i731?p=46)
## [P47 线性结构习题.3 测试数据](https://www.bilibili.com/video/BV1JW411i731?p=47)
## [P48 1. 题意理解及搜索树表示](https://www.bilibili.com/video/BV1JW411i731?p=48)
## [P49 2. 程序框架及建树](https://www.bilibili.com/video/BV1JW411i731?p=49)
## [P50 3. 搜索树是否一样的判别](https://www.bilibili.com/video/BV1JW411i731?p=50)
## [P51 5.1.1 什么是堆](https://www.bilibili.com/video/BV1JW411i731?p=51)
## [P52 5.1.2 堆的插入](https://www.bilibili.com/video/BV1JW411i731?p=52)
## [P53 5.1.3 堆的删除](https://www.bilibili.com/video/BV1JW411i731?p=53)
## [P54 5.1.4 堆的建立](https://www.bilibili.com/video/BV1JW411i731?p=54)
## [P55 5.2.1 什么是哈夫曼树](https://www.bilibili.com/video/BV1JW411i731?p=55)
## [P56 5.2.2 哈夫曼树的构造](https://www.bilibili.com/video/BV1JW411i731?p=56)
## [P57 5.2.3 哈夫曼编码](https://www.bilibili.com/video/BV1JW411i731?p=57)
## [P58 5.3.1 集合的表示及查找](https://www.bilibili.com/video/BV1JW411i731?p=58)
## [P59 5.3.2 集合的并运算](https://www.bilibili.com/video/BV1JW411i731?p=59)
## [P60 小白-FT.1 集合的简化表示](https://www.bilibili.com/video/BV1JW411i731?p=60)
## [P61 小白-FT.2 题意理解与TSSN的实现](https://www.bilibili.com/video/BV1JW411i731?p=61)
## [P62 小白-FT.3 按秩归并](https://www.bilibili.com/video/BV1JW411i731?p=62)
## [P63 小白-FT.4 路径压缩](https://www.bilibili.com/video/BV1JW411i731?p=63)
## [P64 堆中的路径](https://www.bilibili.com/video/BV1JW411i731?p=64)
## [P65 6.1.1 什么是图-定义](https://www.bilibili.com/video/BV1JW411i731?p=65)
## [P66 6.1.2 什么是图-邻接矩阵表示法](https://www.bilibili.com/video/BV1JW411i731?p=66)
## [P67 6.1.3 什么是图-邻接表表示法](https://www.bilibili.com/video/BV1JW411i731?p=67)
## [P68 6.2.1 图的遍历-DFS](https://www.bilibili.com/video/BV1JW411i731?p=68)
## [P69 6.2.2 图的遍历-BFS](https://www.bilibili.com/video/BV1JW411i731?p=69)
## [P70 6.2.3 图的遍历-为什么需要两种遍历](https://www.bilibili.com/video/BV1JW411i731?p=70)
## [P71 6.2.4 图的遍历=图连不通怎么办](https://www.bilibili.com/video/BV1JW411i731?p=71)
## [P72 6.3 应用实例：拯救007](https://www.bilibili.com/video/BV1JW411i731?p=72)
## [P73 6.4 六度空间](https://www.bilibili.com/video/BV1JW411i731?p=73)
## [P74 1、小白-BG.1 邻接矩阵表示的图节点结构](https://www.bilibili.com/video/BV1JW411i731?p=74)
## [P75 2、小白-BG.2 邻接矩阵表示的图-初始化](https://www.bilibili.com/video/BV1JW411i731?p=75)
## [P76 3、小白-BG.3 邻接矩阵表达的图-插入边](https://www.bilibili.com/video/BV1JW411i731?p=76)
## [P77 4、小白-BG.4 邻接矩阵表示的图-建立图](https://www.bilibili.com/video/BV1JW411i731?p=77)
## [P78 5、小白-BG.5 邻接表表示的图节点的结构](https://www.bilibili.com/video/BV1JW411i731?p=78)
## [P79 6、小白-BG.6 邻接表表示的图-建立图](https://www.bilibili.com/video/BV1JW411i731?p=79)
## [P80 7.1.1 概述](https://www.bilibili.com/video/BV1JW411i731?p=80)
## [P81 7.1.2 无权图的单源最短路径](https://www.bilibili.com/video/BV1JW411i731?p=81)
## [P82 7.1.3 有权图的单源最短路](https://www.bilibili.com/video/BV1JW411i731?p=82)
## [P83 7.1.3-s 有权图的单源最短路示例](https://www.bilibili.com/video/BV1JW411i731?p=83)
## [P84 7.1.4 多源最短路算法](https://www.bilibili.com/video/BV1JW411i731?p=84)
## [P85 树练习-HC.2 计算最优编码长度](https://www.bilibili.com/video/BV1JW411i731?p=85)
## [P86 树习题-HC.1 题意理解](https://www.bilibili.com/video/BV1JW411i731?p=86)
## [P87 树习题-HC.3 检查编码](https://www.bilibili.com/video/BV1JW411i731?p=87)
## [P88 练习题-TTA.1 题意理解](https://www.bilibili.com/video/BV1JW411i731?p=88)
## [P89 树习题-TTA.2 核心算法](https://www.bilibili.com/video/BV1JW411i731?p=89)
## [P90 树习题-CBST.1 数据结构的选择](https://www.bilibili.com/video/BV1JW411i731?p=90)
## [P91 树习题-CBST.2 核心算法](https://www.bilibili.com/video/BV1JW411i731?p=91)
## [P92 树习题-CBST.3 计算左子树的规模](https://www.bilibili.com/video/BV1JW411i731?p=92)
## [P93 小白-HP.1 题意理解](https://www.bilibili.com/video/BV1JW411i731?p=93)
## [P94 小白-HP.2 程序框架的搭建](https://www.bilibili.com/video/BV1JW411i731?p=94)
## [P95 小白-HP.3 模块的引用与裁剪](https://www.bilibili.com/video/BV1JW411i731?p=95)
## [P96 小白-HP.3 选择动物](https://www.bilibili.com/video/BV1JW411i731?p=96)
## [P97 8.1.1 Prim算法](https://www.bilibili.com/video/BV1JW411i731?p=97)
## [P98 8.1.2 Kruskal算法](https://www.bilibili.com/video/BV1JW411i731?p=98)
## [P99 8.2.1 拓扑排序](https://www.bilibili.com/video/BV1JW411i731?p=99)
## [P100 8.2.2 关键路径](https://www.bilibili.com/video/BV1JW411i731?p=100)
## [P101 图习题1 核心算法](https://www.bilibili.com/video/BV1JW411i731?p=101)
## [P102 图习题2 其他推广](https://www.bilibili.com/video/BV1JW411i731?p=102)
## [P103 9.1.1 概述](https://www.bilibili.com/video/BV1JW411i731?p=103)
## [P104 9.1.2 冒泡排序](https://www.bilibili.com/video/BV1JW411i731?p=104)
## [P105 9.1.3 插入排序](https://www.bilibili.com/video/BV1JW411i731?p=105)
## [P106 9.1.4 时间复杂度下界](https://www.bilibili.com/video/BV1JW411i731?p=106)
## [P107 9.2 希尔排序](https://www.bilibili.com/video/BV1JW411i731?p=107)
## [P108 9.3.1 选择排序](https://www.bilibili.com/video/BV1JW411i731?p=108)
## [P109 9.3.2 堆排序](https://www.bilibili.com/video/BV1JW411i731?p=109)
## [P110 9.4.1 有序子列的归并](https://www.bilibili.com/video/BV1JW411i731?p=110)
## [P111 9.4.2 归并算法](https://www.bilibili.com/video/BV1JW411i731?p=111)
## [P112 9.4.3 非递归算法](https://www.bilibili.com/video/BV1JW411i731?p=112)
## [P113 10.1.1 算法概述](https://www.bilibili.com/video/BV1JW411i731?p=113)
## [P114 10.1.2 选主元](https://www.bilibili.com/video/BV1JW411i731?p=114)
## [P115 10.1.3 子集划分](https://www.bilibili.com/video/BV1JW411i731?p=115)
## [P116 10.1.4 算法实现](https://www.bilibili.com/video/BV1JW411i731?p=116)
## [P117 10.2.1 算法概述](https://www.bilibili.com/video/BV1JW411i731?p=117)
## [P118 10.2.2 物理排序](https://www.bilibili.com/video/BV1JW411i731?p=118)
## [P119 10.3.1 桶排序](https://www.bilibili.com/video/BV1JW411i731?p=119)
## [P120 10.3.2 基数排序](https://www.bilibili.com/video/BV1JW411i731?p=120)
## [P121 10.3.3 多关键字排序](https://www.bilibili.com/video/BV1JW411i731?p=121)
## [P122 10.4 排序算法的比较](https://www.bilibili.com/video/BV1JW411i731?p=122)
## [P123 11.1.1 引子：散列的基本思路](https://www.bilibili.com/video/BV1JW411i731?p=123)
## [P124 11.1.2 什么是散列表](https://www.bilibili.com/video/BV1JW411i731?p=124)
## [P125 11.2.1 数字关键词的散列函数构造](https://www.bilibili.com/video/BV1JW411i731?p=125)
## [P126 11.2.2 字符串关键词的散列函数构造](https://www.bilibili.com/video/BV1JW411i731?p=126)
## [P127 11.3.1开放定址法](https://www.bilibili.com/video/BV1JW411i731?p=127)
## [P128 11.3.2 线性探测](https://www.bilibili.com/video/BV1JW411i731?p=128)
## [P129 11.3.3 线性探测-字符串的例子](https://www.bilibili.com/video/BV1JW411i731?p=129)
## [P130 11.3.4 平方探测法](https://www.bilibili.com/video/BV1JW411i731?p=130)
## [P131 11.3.5 平方探测法的实现](https://www.bilibili.com/video/BV1JW411i731?p=131)
## [P132 11.3.6 分离链接法](https://www.bilibili.com/video/BV1JW411i731?p=132)
## [P133 11.4 散列表的性能分析](https://www.bilibili.com/video/BV1JW411i731?p=133)
## [P134 11.5 文件中单词词频统计](https://www.bilibili.com/video/BV1JW411i731?p=134)
## [P135 小白-PM.1 题意理解与解法分析](https://www.bilibili.com/video/BV1JW411i731?p=135)
## [P136 小白-PM.2 程序框架搭建](https://www.bilibili.com/video/BV1JW411i731?p=136)
## [P137 小白-PM.3 输出狂人](https://www.bilibili.com/video/BV1JW411i731?p=137)
## [P138 小白-PM-4 模块的引用与裁剪](https://www.bilibili.com/video/BV1JW411i731?p=138)
## [P139 习题-HHV 算法思路概述](https://www.bilibili.com/video/BV1JW411i731?p=139)
## [P140 习题-IOM.1 插入排序的判断](https://www.bilibili.com/video/BV1JW411i731?p=140)
## [P141 习题-IOM.2 归并段的判断](https://www.bilibili.com/video/BV1JW411i731?p=141)
## [P142 习题-SWS.1 环的分类](https://www.bilibili.com/video/BV1JW411i731?p=142)
## [P143 习题-SWS.2 算法示例](https://www.bilibili.com/video/BV1JW411i731?p=143)