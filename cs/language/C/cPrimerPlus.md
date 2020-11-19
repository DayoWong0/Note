# C Primer Plus

## 第 9 章 函数

- 将需求分为具体步骤
- 分别设计和编写函数
- 测试每个函数。

## 第 12 章 内存分配等

- [malloc，calloc区别_rrr2的博客-CSDN博客_malloc和calloc的区别](https://blog.csdn.net/qq_35608277/article/details/79467539)

  看这个描述，calloc 貌似使用起来更方便。

## 第 14 章 结构和其他数据形式

### 指向结构的指针

用以下两个表达一样

```c
pointer->结构变量 
(*pointer).结构变量
```

- 结构的名字和数组名字不一样，不是结构的首地址，所有需要用  `&` 取地址
- 结构指针用  `++` 运算符是指向下一个结构

