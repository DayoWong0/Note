# Android

## 2.1 布局管理器

线性布局和相对布局用的多，其他不常用。

### 2.1.1 线性布局（ LinearLayout ）

和前端类似

- 布局宽高度通常使用 dp 而不是 px，这样便于布局适配屏幕
- padding 和 css 的一样

- 这个什么意思？

  ```xml
  android:orientation="horizontal"
  ```

- 匹配父空间

  布局文件从上到下开始，把前面的分配好了，剩下的内容给匹配父空间的。

  ```xml
  <?xml version="1.0" encoding="utf-8"?>
  <LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
      android:layout_width="match_parent"
      android:layout_height="match_parent">
  
      <LinearLayout
          android:id="@+id/ll_1"
          android:layout_width="200dp"
          android:layout_height="200dp"
          android:orientation="horizontal"
          android:background="#000000"
          android:padding="20dp">
  
  
          <View
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:background="#FF0033"/>
      </LinearLayout>
  
      <LinearLayout
          android:layout_width="match_parent"
          android:layout_height="200dp"
          android:orientation="horizontal"
          android:background="#0066FF">
          
      </LinearLayout>
  
  
  </LinearLayout>
  
  ```

  第一个 LinearLayout 用了 父空间的 200dp 宽度，

  负空间剩下的宽度 =  父空间宽度 - 200dp，给第二个 LinearLayout

- LinearLayout 默认水平排列，改成垂直排列需要修改父布局的属性

  ```xml
  android:orientation="vertical">
  ```

  

- 设置两个子布局的边距

  用 margin 