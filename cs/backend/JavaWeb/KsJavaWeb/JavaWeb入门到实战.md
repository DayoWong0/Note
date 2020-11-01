# [【狂神说 Java】JavaWeb 入门到实战](https://www.bilibili.com/video/BV12J411M7Sj)

## TomCat 安装启动停止

- 官网下载 tomcat

- 赋予执行权限

  ```shell
  chmod +x /Users/xgt/IntelliJIDEAProjects/MarkdownNotes/backend/JavaWeb/apache-tomcat-9.0.37/bin/catalina.sh /Users/xgt/IntelliJIDEAProjects/MarkdownNotes/backend/JavaWeb/apache-tomcat-9.0.37/bin/shutdown.sh /Users/zx/IntelliJIDEAProjects/MarkdownNotes/backend/JavaWeb/apache-tomcat-9.0.37/bin/startup.sh
  ```

- 运行

  将 startup.sh 拖入到终端里, 再执行

  ```shell
  /Users/xgt/IntelliJIDEAProjects/MarkdownNotes/backend/JavaWeb/apache-tomcat-9.0.37/bin/startup.sh
  ```

- 停止

  ```shell
  /Users/xgt/IntelliJIDEAProjects/MarkdownNotes/backend/JavaWeb/apache-tomcat-9.0.37/bin/shutdown.sh
  ```

## Tomcat 目录结构

## HTTP

## Maven

Maven 核心思想: **约定大于配置**

## [IDEA 使用 Maven](https://www.bilibili.com/video/BV12J411M7Sj?p=6)

1. 新建 maven 项目, 选择 maven 开头的

2. 项目新建好之后, 在 main 下新建目录 java 和 resources

3. 配置 tomcat 服务器

4. 配置 maven 父模块

   子模块中的 pom.xml 中添加, 对应内容可能需要相应的修改

   ```xml
     <parent>
       <groupId>org.example</groupId>
       <artifactId>javaweb</artifactId>
       <version>1.0-SNAPSHOT</version>
       <relativePath>../pom.xml</relativePath>
     </parent>
   ```

- 编写 servlet 映射

  ```xml
  <!--  注册servlet-->
    <servlet>
      <servlet-name>hello</servlet-name>
  <!--    类名-->
      <servlet-class>com.kuang.servlet.HelloServlet</servlet-class>
    </servlet>
  <!--  servlet请求路径-->
    <servlet-mapping>
      <servlet-name>hello</servlet-name>
  <!--    虚拟路径-->
      <url-pattern>/hello</url-pattern>
    </servlet-mapping>
  ```

## [P1 javaweb-01：web的基本概念](https://www.bilibili.com/video/BV12J411M7Sj?p=1)
## [P2 javaweb-02：web服务器讲解](https://www.bilibili.com/video/BV12J411M7Sj?p=2)
## [P3 javaweb-03：Tomcat详解](https://www.bilibili.com/video/BV12J411M7Sj?p=3)
## [P4 javaweb-04：Http讲解](https://www.bilibili.com/video/BV12J411M7Sj?p=4)
## [P5 javaweb-05：Maven环境搭建](https://www.bilibili.com/video/BV12J411M7Sj?p=5)
## [P6 javaweb-06：IDEA中Maven的操作](https://www.bilibili.com/video/BV12J411M7Sj?p=6)
## [P7 javaweb-07：解决大家遇到的一些问题](https://www.bilibili.com/video/BV12J411M7Sj?p=7)
## [P8 javaweb-08：HelloServlet](https://www.bilibili.com/video/BV12J411M7Sj?p=8)
## [P9 javaweb-09：Servlet原理](https://www.bilibili.com/video/BV12J411M7Sj?p=9)
## [P10 javaweb-10：ServletContext对象](https://www.bilibili.com/video/BV12J411M7Sj?p=10)
## [P11 javaweb-11：ServletContext应用](https://www.bilibili.com/video/BV12J411M7Sj?p=11)
## [P12 javaweb-12：Response下载文件](https://www.bilibili.com/video/BV12J411M7Sj?p=12)
## [P13 javaweb-13：Response验证码实现](https://www.bilibili.com/video/BV12J411M7Sj?p=13)
## [P14 javaweb-14：Response重定向](https://www.bilibili.com/video/BV12J411M7Sj?p=14)
## [P15 javaweb-15：Request应用](https://www.bilibili.com/video/BV12J411M7Sj?p=15)
## [P16 javaweb-16：Cookie讲解](https://www.bilibili.com/video/BV12J411M7Sj?p=16)
## [P17 javaweb-17：Session讲解](https://www.bilibili.com/video/BV12J411M7Sj?p=17)
## [P18 javaweb-18：JSP原理剖析](https://www.bilibili.com/video/BV12J411M7Sj?p=18)
## [P19 javaweb-19：JSP基础语法和指令](https://www.bilibili.com/video/BV12J411M7Sj?p=19)
## [P20 javaweb-20：JSP内置对象及作用域](https://www.bilibili.com/video/BV12J411M7Sj?p=20)
## [P21 javaweb-21：JSP、JSTL标签](https://www.bilibili.com/video/BV12J411M7Sj?p=21)
## [P22 javaweb-22：JavaBean及作业](https://www.bilibili.com/video/BV12J411M7Sj?p=22)
## [P23 javaweb-23：MVC三层架构](https://www.bilibili.com/video/BV12J411M7Sj?p=23)
## [P24 javaweb-24：过滤器Filter](https://www.bilibili.com/video/BV12J411M7Sj?p=24)
## [P25 javaweb-25：监听器](https://www.bilibili.com/video/BV12J411M7Sj?p=25)
## [P26 javaweb-26：监听器GUI中理解](https://www.bilibili.com/video/BV12J411M7Sj?p=26)
## [P27 javaweb-27：Filter实现权限拦截](https://www.bilibili.com/video/BV12J411M7Sj?p=27)
## [P28 javaweb-28：JDBC复习](https://www.bilibili.com/video/BV12J411M7Sj?p=28)
## [P29 javaweb-29：JDBC事务](https://www.bilibili.com/video/BV12J411M7Sj?p=29)
## [P30 javaweb-30：smbms项目搭建](https://www.bilibili.com/video/BV12J411M7Sj?p=30)
## [P31 javaweb-31：smbms登录流程实现](https://www.bilibili.com/video/BV12J411M7Sj?p=31)
## [P32 javaweb-32：smbms注销及权限过滤](https://www.bilibili.com/video/BV12J411M7Sj?p=32)
## [P33 javaweb-33：smbms密码修改实现](https://www.bilibili.com/video/BV12J411M7Sj?p=33)
## [P34 javaweb-34：Ajax验证旧密码实现](https://www.bilibili.com/video/BV12J411M7Sj?p=34)
## [P35 javaweb-35：smbms用户管理底层实现](https://www.bilibili.com/video/BV12J411M7Sj?p=35)
## [P36 javaweb-36：smbms用户管理分页OK](https://www.bilibili.com/video/BV12J411M7Sj?p=36)
## [P37 javaweb-37：smbms架构分析及方法学习](https://www.bilibili.com/video/BV12J411M7Sj?p=37)
## [P38 javaweb-38：文件传输原理及介绍](https://www.bilibili.com/video/BV12J411M7Sj?p=38)
## [P39 javaweb-39：文件上传及拓展鸡汤](https://www.bilibili.com/video/BV12J411M7Sj?p=39)
## [P40 javaweb-40：邮件发送原理及实现](https://www.bilibili.com/video/BV12J411M7Sj?p=40)
## [P41 javaweb-41：网站注册发送邮件实现](https://www.bilibili.com/video/BV12J411M7Sj?p=41)
## [P42 javaweb-42：之后该怎么持续学习](https://www.bilibili.com/video/BV12J411M7Sj?p=42)