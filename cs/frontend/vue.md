# [VUE](https://www.bilibili.com/video/BV1U5411h7oH)

## 参考

[Vue API](https://cn.vuejs.org/v2/api/)

[Vue 教程](https://cn.vuejs.org/v2/guide/)

## 基本使用

- 没导入 vue

- 新建模板

  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Title</title>
      <script src="https://unpkg.com/vue"></script>
    </head>
    <body>
      <div id="app">
        <p>{{name}}</p>
      </div>
      <script>
        let vue = new Vue({
          //控制区域
          el: "#app",
          //被控制区域的数据
          data: {
            name: "名字",
          },
        });
      </script>
    </body>
  </html>
  ```

  设置快捷键 vue.勾选 html 下使用

  模板使用方法:

  新建 html-->删除所有内容-->输入 vue--->按 tab 键

  ## vue 数据传递

  MVVM 设计模式

  支持数据双向传递

## [vue 常用指令](https://cn.vuejs.org/v2/api/index.html#指令)

### v-model

只有少数几个标签能用 双向绑定 数据双向传输. data 数据区改变 网页中的改变 网页中的改变 数据区的也改变

### v-once

只渲染一次, 若以后有数据改变依然不变

### v-cloak

这个指令保持在元素上直到关联实例结束编译。

和 CSS 规则如 [v-cloak] { display: none } 一起用时，

这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

### v-text 和 v-html

两者都会覆盖原文本

前者当成纯文本解析

后者会解析 html

### v-if

可加选项

```vue
<p v-if="score >= 80">优秀</p>
<p v-else-if="score > 60">良好</p>
<p v-else>差</p>
```

为 true 显示 false 不显示

### v-show

和 v-if 用法一样,区别如下

### v-if 和 v-show 控制显示区别

v-if 为假不加到 dom 上,每次都要重新创建和删除(渲染),性能要求高些

v-show 是给元素添加显示和隐藏属性(类似 css 控制的那种)

### v-for

```vue
<li v-for="(value, index) in list">{{index+1}}--{{value}}</li>
<li v-for="(value, index) in 'abcdefg'">{{index+1}}--{{value}}</li>
<li v-for="(value, key) in obj">{{key}}--{{value}}</li>
```

```vue
data: { list: ["张三", "李四", "王5", "赵6"], obj: { name: "Tse Awak", age: 15,
sex: "男" } }
```

可以循环 列表 字符串 JSON 对象

value index 和 value key 位置不能换

### v-bind

```vue
    <input type="text" v-bind:value="name">
<!--    简写方法-->
    <input type="text" :value="name">

    <input type="text" :value="age">
<!--    赋值语句可以为合法的js表达式-->
    <input type="text" :value="age + 1">
```

原写法

```vue
<input type="text" v-bind:value="name">
```

简写将 v-bind: ---> :

```vue
    <input type="text" :value="name">
```

### v-bind 绑定类名

```vue
<p :class="['size']">我是段落</p>
<p :class="['size', 'color', 'active']">我是段落</p>
```

size color active 为类名

通过 v-bind 绑定类名 那么在绑定的时候可以编写一个三木运算符来实现按需绑定

```
<p :class="['size','color',flag? 'active':'']">我是段落</p>
```

## [Class 与 Style 绑定 — Vue.js](https://cn.vuejs.org/v2/guide/class-and-style.html)

这可用于动态改变元素 CSS 样式
