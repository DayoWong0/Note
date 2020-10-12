# 数据结构

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

## 第三章 树
