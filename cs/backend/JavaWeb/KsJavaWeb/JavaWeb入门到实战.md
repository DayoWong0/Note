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
