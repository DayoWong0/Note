# SpringMVC-NG.md

## 十一周课

### 常见注解

配置文件搭配注解

- @Component

- @Repository

- @Service

- @Controller

- @RequestMapping

  url 地址，可位于 class 也可以在 method 上，

  xml 配置文件中对应 `<mvc:annotation-driven/>`

  - value

    url 地址

  - method

    GET POST

  - consumes

    定义请求提交内容的类型

  AJAX 请求的 JSON

  - RequestParagm

  - ResponseBody

    响应结果设置为 xml 或 JSON，可以将方法返回值（例如 list、map ）自动转为字符串

  - ...

    其他不常用

### 编码转换

web.xml 配置文件中的 filter 

### 包装

包装类型

是对象，如果没有传入值，则为 NULL，不会报错（相比于 int float 等）

### 开发环境配置

- JDK 大于等于 1.8

- Tomcat 大于等于 8.0

- Maven 

  - 配置阿里云镜像

    一定记得配置镜像，否则等你头发白了 maven 大概跑好了

    [maven替换中央仓库- 阿里云 - 简书](https://www.jianshu.com/p/80384612ee1d)

    [Maven Repository: Search/Browse/Explore（ Maven 官方仓库）](https://mvnrepository.com/)

- 配置文件

  - pom.xml

    主要是 dependencies

  - web.xml 配置文件

    - filter

  - springMVC.xml 配置文件

    - component scan

    - bean 

      id 可以不写

- Java 代码
  
- 注解
  
- Docker（可选）
  
  - 使用 MySQL

#### Maven

[仓库服务（阿里云）](https://maven.aliyun.com/mvn/guide)

[IntelliJ IDEA上创建maven Spring MVC项目 - Fururur - 博客园](https://www.cnblogs.com/sinte-beuve/p/5730553.html)

~~Maven dependence 看老师的文档~~ 暂时没有相关内容

- spring core
- spring mvc
- mysql
- jackson
  - [Jackson Core](https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core) » [2.10.2](https://mvnrepository.com/artifact/com.fasterxml.jackson.core/jackson-core/2.10.2)

```xml

```



[使用IntelliJ IDEA开发SpringMVC网站（一）开发环境 - 知乎](https://zhuanlan.zhihu.com/p/70888663)

[idea搭建springmvc（maven版） - 北城墨白 - 博客园（同学推荐的）](https://www.cnblogs.com/bcmb/p/12252591.html)

## 十二周课 MyBatis

写 MyBastis 配置文件即可

作业

- MyBatis Maven 依赖

pom.xml

- spring 建议定义变量`spring_version`，方便修改版本
- junit：单元测试
- log4j：现在用版本 2，spring5 不支持 1 版本

### 开发环境配置

- 创建 maven 项目

- pom.xml 添加依赖包

  - maven 设置阿里云镜像

    [maven替换中央仓库- 阿里云 - 简书](https://www.jianshu.com/p/80384612ee1d)

- 创建项目配置文件

  - jdbc.properties
  - log4j2.xml 或 log4j2.peoperties
  - myBatis
  - 与 Spring 集成
    - Spring-mybatis.xml
  - 与 SpringMVC 集成
    - web.xml
    - SpringMVC.xml

除了 web.xml 名字不能变，其他配置文件都可以自己修改

- tomcat 配置文件
- 用次新版本，最新版本可能有 bug，仅当尝鲜

### 第 13 周

- 监听器
- 服务 service 类供 controller 类调用，代码分离。

## 第十四周 MyBatis

[mybatis – MyBatis 3 | 简介](https://mybatis.org/mybatis-3/zh/index.html)

[mybatis – MyBatis 3 | XML 映射器](https://mybatis.org/mybatis-3/zh/sqlmap-xml.html)

- Mybatis mapper.xml 中 ${变量名} 和 #{变量名} 区别

  `$` 不会增加其他符号，直接替换变量值。

  `#` 会加引号，用于参数值

  ```sql
  select * from t_user where userName = 'Wang';
  select * from t_user where ${userName} = #{userName};
  ```

- MyBatis if 语句

- 单条记录用 get 多条用 query

  getByField

### 代码编写顺序

1.  vo 类
2. 建立数据库
3. service 接口
4. DAO 类
5. MyBatis mapper
6. service impl
7. Controller

## 结课

17 周答辩