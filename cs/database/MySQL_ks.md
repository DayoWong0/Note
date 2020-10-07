# MySQL

参考资料: 

[【狂神说Java】MySQL最新教程通俗易懂](https://www.bilibili.com/video/BV1NJ411J79W)

## 数据库分类

- 关系型数据库 (SQL)

  MySQL SQLlite

- 非关系型数据库(NoSQL) Not only SQL

  对象存储

  Redis, MongDB

## MySQL Docker配置

- MySQL版本: 5.7.19

- 首次运行

  端口: 3306

  root密码: 123456

  ```shell
  docker run -itd --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7.19
  ```

- 启动

  ```shell
  docker start 实例id
  ```

- 停止

  ```shell
  docker stop 实例id
  ```

- 进入MySQL命令行

  ```shell
  docker exec -it 实例id mysql -u root -p
  ```

##  MySQL命令

``` shell
show databases; 	--查看所有数据库
```

```shell
use school; --切换到 school数据库
```

```shell
describe student; --查看表的信息
```

```shell
creat database school; --创建数据库school
```

```shell
exit;--退出 
```

- if语句

  如果不存在数据库school则创建数据库school

```sql
CREATE DATABASE IF NOT EXISTS school;
```

- 如果表名或者字段名为SQL保留字, 用反单引号Tab键上面那个引起来

  ```sql
  USE `user`;
  ```

- 从已经建好的表中获取新建表的命令

  可以先用软件手动建好表, 再导出

  ```SQL
  SHOW CREATE DATABASE 数据库名字
  ```

  ```sql
  	SHOW CREATE TABLE 数据表名称
  ```

  - 例子

  ```sql
  CREATE DATABASE `school` /*!40100 DEFAULT CHARACTER SET utf8 */
  ```

  - ```sql
    student	CREATE TABLE `student` (↵  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '学员id',↵  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '姓名',↵  `age` int(3) NOT NULL COMMENT '年龄',↵  PRIMARY KEY (`id`)↵) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8
    ```

- DESC  表名: 显示表的结构.
- 修改表名
- 增加表的字段
- 修改表的字段

![image-20200803163902871](MySQL-狂神.assets/image-20200803163902871.png)

- 删除

  ![image-20200803164123498](MySQL-狂神.assets/image-20200803164123498.png)

  



## 数据类型

- 数值

  ![image-20200803154158082](MySQL-狂神.assets/image-20200803154158082.png)

- 字符串

  ![image-20200803154348120](MySQL-狂神.assets/image-20200803154348120.png)

- 时间日期

  ![image-20200803154504626](MySQL-狂神.assets/image-20200803154504626.png)

- null

  ![image-20200803154533902](MySQL-狂神.assets/image-20200803154533902.png)

## 数据库字段属性(重要)

![image-20200803155010463](MySQL-狂神.assets/image-20200803155010463.png)

![image-20200803155801960](MySQL-狂神.assets/image-20200803155801960.png)

拓展: 

![image-20200803160202166](MySQL-狂神.assets/image-20200803160202166.png)

## 数据表的类型

![image-20200803162526360](MySQL-狂神.assets/image-20200803162526360.png)

![image-20200803162656197](MySQL-狂神.assets/image-20200803162656197.png)

![image-20200803162957726](MySQL-狂神.assets/image-20200803162957726.png)

### 字符集编码

![image-20200803163403639](MySQL-狂神.assets/image-20200803163403639.png)

## 3. MySQL数据管理

### 3.1 外键(了解即可)

![image-20200803165416189](MySQL-狂神.assets/image-20200803165416189.png)



### 3.2 DML语言(全部记住)



### 3.3 添加

![image-20200803174239682](MySQL-狂神.assets/image-20200803174239682.png)

![image-20200803174309679](MySQL-狂神.assets/image-20200803174309679.png)



### 3.4 修改

![image-20200803174720506](MySQL-狂神.assets/image-20200803174720506.png)

![image-20200803175135070](MySQL-狂神.assets/image-20200803175135070.png)

![image-20200803175444440](MySQL-狂神.assets/image-20200803175444440.png)

### 3.5 删除

![image-20200803175657313](MySQL-狂神.assets/image-20200803175657313.png)

- 两者删除方法的不同

  ![image-20200803180136888](MySQL-狂神.assets/image-20200803180136888.png)

## 4. DQL查询数据(最重点)

### 4.1 DQL

(Data Query Language: 数据查询语言)

- 所有的查询操作都用它 Select
- 简单的查询, 复杂的查询它都能做
- 数据库中最核心的语言, 最重要的语句

- 使用频率最高的

### 4.2 查询所有字段

![image-20200803182329603](MySQL-狂神.assets/image-20200803182329603.png)

### 4.3

https://www.bilibili.com/video/BV1NJ411J79W?p=17

