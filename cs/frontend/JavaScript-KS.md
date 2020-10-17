# JavaScript-KS

## 1. 介绍

一个好的后端得精通 JavaScript

## 2. 快速入门

###  2.2 引入

- 变量定义：弱类型，和 Python 定义变量类似。关键字 var let

- 条件控制
- JavaScript 严格区分大小写
- Chrome 控制台可以写 JavaScript ，可以调试 JavaScript 代码，短点等操作

### 2.3 数据类型

变量

```javascript
var a
```

不能以数字开头

number

- 不区分整数、小数

```javascript
123
123.1
1.123e3 // 科学记数法
NaN // not a number
Infinity // 无限大
```

字符串

```javascript
"abc"
'abc'
```

布尔值

​	true

​	false

逻辑运算

```javascript
&&
||
!  
```

比较运算符

```javascript
=
== 等于（类型不一样，值一样，也判断为 true）
	如 数字 1 会等于 字符串1：1 == "1"
=== 绝对等于:类型一样，值也一样。
	和其他语言两个等于一样。
```

​	<font color="red">这是 JavaScript 的缺陷，不要使用 == 进行比较</font>

​	<font color="red">NaN 与所有数值都不相等，包括它自己，判断是不是NaN 用方法 isNaN(NaN)</font>

浮点数问题：

```javascript
console.log( (1/3) === (1-2/3) )
```

尽量避免使用浮点数进行运算，存在精度问题。Java 中可用 bigdecimal 计算。

可以用绝对值差值小于 0.0000001 判断值一样。

```javascript
console.log( Math.abs((1/3) === (1-2/3)) < 0.00000001 )
```

null 和 undefined

- null 空
- undefined 未定义

数组

Java 的数组必须是相同数据类型的对象，JavaScript 中不需要这样

```javascript
var arr = [1,2,3."hello",null, true]
```

取数组下标，越界了返回 undefined



对象

对象是大括号，数组是中括号。

```javascript
// Person person = new Person(1,2,3,4,5)
var person = {
  name: "xxxx",
  age: 18,
  tags: ["js", "Java"]
}
```

### 2.4  严格检查模式

```javascript
"use strict";
let i = 1;
```

局部变量用 let 定义

"use strict"

## 3. 数据类型

### 3.1 字符串

1. 正常字符串用 单引号 或者 双引号

2. 注意转义字符 `\`

3. 多行字符串编写

   反引号

   ```javascript
   var msg = `
   	长字符串
   `
   ```

4. 模板字符串

   ```javascript
   var name = "Dayo"
   console.log(`hello ${name}`) // 注意要用反引号才能使用模板字符串
   ```

5. 字符串长度

   ```javascript
   str.length
   ```

6. 字符串的可变性，不可变，不可以再次赋值

7. 大小写转换

   这是方法不是属性，方法需要加括号

   ```javascript
   str.toUpperCase();
   str.toLowerCase();
   ```

8. str.indexOf();

   获取某个字符的下标

9. str.substing(1, 3)

   截取下标为 1 到 3 之间的字符串，左闭右开区间，

### 3.2 数组

1. 长度

   ```javascript
   arr.length
   ```

2. indexOf, 通过元素获得下标索引

   ```javascript
   arr.indexOf(2)
   ```

    字符串的 ”1“ 和 1 是不同的

3. slice() 截取 Array的一部分，用法同 str.substring()，返回一个新数组

   

4. push，pop 尾部

   向数组里 push pop 元素

5. unshift（压入到头部） shift（弹出头部元素） 向 Array 头部操作，与push pop 作用位置不同

6. sort() 排序

7. reverse 元素反转

8. concat 拼接

   返回的是新数组，不修改原数组

9. join 连接符

   打印拼接数组，使用特定的字符串连接

   ```javascript
   ["c","b","a"]
   arr.join("-")
   "c-b-a"
   ```

10. 多维数组

### 3.3 对象

```javascript
var 对象名 = {
  
}
```

