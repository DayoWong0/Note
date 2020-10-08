# linux

## 文件系统

### 目录

1. bin: 二进制可执行文件
2. home: 用户目录
3. lib: 共享库目录
4. etc: 系统管理和配置文件, host 和 dns 密码等都在这
5. dev: 设备相关的
6. tmp: 临时文件, 重启后里面的文件消失
7. usr: 软件一般安装在这里

### 文件链接

文件链接类似于 windows 下面的快捷方式

### 路径

- 相对路径
- 绝对路径

## 常用命令

### grep

Linux grep 命令用于查找文件里符合条件的字符串

grep [OPTION] "查找的字符串" 查找的文件名

参数

- -n: 显示找到的文本的行数
- -i: 忽略大小写

### cp

cp [OPTION] 源文件 目标文件

使用通配符:

cp hello\* ./dir1

将以 hello 开头的所有文件复制到当前目录下 dir1 目录下

### rm

参数

- -f

  强制删除 不给提示

- -i

- -r

### find

find [路径][表达式]

表达式

-name 文件/目录?名字

-type d

找目录

-type

```bash
find ./dir5 -name *.c
```

找到 dir5 下的所有的文件名带.c 的文件

```bash
find . -type d
```

### tar

tar -czf 打包文件名.tar.gz 目录

tar -zxvf 需要解包的文件名字

### gzip

解压:

```bahs
gzip -d 压缩文件名
```

### chmod

chmod [who][opt] [mode] 文件名

who:

u: 文件所有者

g: 本人所在. 组成员

o: 系统中的其他的用户

a: 所有用户

opt:

+: 增加

-: 减少

=: 使存储权限等于

mode 表示权限:

r: 读权限

w: 写权限

x: 执行权限

对目录使用需要 -R 选项

取消本用户对 chmodcmd 目录的读权限

```bash
chmod u-r chmodcmd/
```

### ln

建立符号链接(类似于 windows 快捷方式)

```bash
ln -s 源文件 符号链接(快捷方式)名称
```

# 第三次课

## 系统管理命令

### shutdown

```//bash
shutdown -h now //立即关机
```

```bash
shutdown +5 //五分钟后关机
```

```bash
shutdown -r now/23:59 // 现在/23:59分 关闭系统再重启
```

### halt

```bash
halt -f //强制关机, 危险
```

```bash
halt -p //关机
```

### reboot

立刻重启

## 用户管理

用户的增删改查, 暂时用不到, 不做笔记

### 切换用户命令 sudo

切换用户是 su(switch user)

简写: sudo

## Linux 设备管理

所有设备皆文件

### 设备标识

#### 主设备号

- tty: 终端设备
- lp: 打印机
- hd: IDE 硬盘
- sd: SCSI 硬盘

#### 次设备号

如 hda hdb tty0 lp0

用于区分多个设备, 比如多个硬. 打印机

## 磁盘和分区管理

### fdisk

## 进程管理

- Linux 系统上所有运行的东西都可以称为进程
- 进程三种状态: **运行态** **就绪态** **阻塞态**

- 进程大致可以分为: **系统进程** **用户进程**

### 命令

进程查看

```bash
ps aux
```

- at 命令

  at -f /home/user/pwd_script 03:15

- wait 命令

- kill [-s 信号 | -p][-a] 进程号

  kill -l [信号]

## 日志

- /var/log/dmesg

  内核启动信息

- /var/log/messages

  内核错误和应用程序错误

- /var/log/wtmp 和 /var/run/utmp

  用户登录和操作的记录

# 第四次课

## shell 编程

### 输入输出重定向

- 输入: 文件中读入

  小于符号 <

- 输出: > 符号. 可以将控制台的内容输出到文件

  ```bash
  ls > 1.txt
  ```

  追加: >> 在源文件后增加内容

  用一个 > 会覆盖原文件

- 错误信息输出

  cmd [参数] 2 文件名

### 管道命令

命令的输出做另一个命令的输入 符号 | 表示

### shell 基础 特殊字符

1. 通配符

   ```bash
   * 任何字符串
   ? 单个字符
   [] 字符组中的一部分
   ```

2. 引号

   ```bash
   单引号: 特殊字符变为普通字符
   双引号: 除 $ \ '  " 这几个依然是特殊字符 其他字符变为普通字符
   ```

   \$ 变量命名

3. 反引号

   反引号括起来的会被 shell 解释为命令 并且首先执行 并用标准输出结果代替反引号里的内容

4. 注释

   #

5. 别名

   alias alias-name='origin cmd'

## shell 脚本

shell 是按行一条接着一条的解释并执行 shell 脚本中的命令

### 命令执行

```bash
sh 脚本名字
bash 脚本名字
./脚本名字 /*当前路径下*/
```

sh 方法不需要脚本有执行权限

./ 方法必须有

- sh 启动新的 shell 执行脚本
- ./ 当前 shell 执行脚本

## shell 变量

一个 shell 终端就是一个进程

### shift

使命令行输入的位置参数左移

- env 命令查看当前 shell 环境变量
- 用户提示符 # root \$普通用户

### read [变量名]: 读入键盘输入 赋值给变量

### echo

echo 默认换行

### export

父 shell 导入 变量给子 shell

- 例子

  - 父 shell 文件

    father.sh

    ```sh
    #! /bin/bash
    var1="the first var"
    export var2="the second var" //export命令 不加这个不会输出到son.sh shell中
    sh son.sh //运行之后会运行son.sh脚本的内容. sh 后面的是子shell文件名 类似函数传参(这样说不是特别准确). 不过这是在两个文件中传递（说成在两个shell中传递更准）
    ```

  - 子 shell 文件

    son.sh

    ```sh
    #! /bin/bash
    echo $var1
    echo $var2
    ```

  - 运行 father.sh

    命令: sh father.sh

    运行之后会运行 son.sh 脚本的内容.

    输出为:

    ```
    			//由于 var1没有被传入 输出为空
    the second var //var2传递过来了 有输出内容
    ```

#    第五次课

## OR 运算

|| 连接多条命令, 依次执行, 若有一条指令执行返回值为 false, 后面的指令就停止执行.

## 计算

- expr

- let

  ```sh
  let "a=2" "b=3"
  let c=a*b
  ```

  使用 let 命令时, 变量前的

## if_script:

```sh
#! bin/bsah
# this script is about if
echo " abc is the username? input yes or no"
read name
if [ "$name"="yes" ]
then
	echo "hello abc!"
else
	echo "abc is not your name"
fi
exit 0
```

```sh
#! /bin/bash
echo "yes or no"
read name
if [ "$name" = "yes" ]
then
        echo "hello abc!"
elif [ "$name" = "no" ]
then
        echo "you inputed no"
else
        echo "error"
fi
exit 0

```

```sh
#! bin/bash
echo "enter the week number"
read number
case $number in
        1) echo "zhou yi";;
        2) echo "er";;
        3) echo "san";;
        *) echo "number must between 1 and 7";;
esac

```

# 第六次课

## 6.1 gcc

```shell
gcc -o 程序名字 源文件.c 头文件.h ...
```

头文件在其他目录

```shell
gcc -o -I头文件目录名 程序名字 源文件.c 头文件.h ...
```

例子

```shell
gcc -o -I./head 程序名字 源文件.c 头文件.h ...
```

当前文件夹下的 head 文件夹下寻找头文件

## 6.2 Makefile

make 命令会检测一个大型程序, 代码改变后哪些部分需要重新编译.

简单来说: gcc 命令的集合

流程

1. 读入 **Makefile** 文件
2. 初始化变量
3. 待补充

### 6.2.1 内容

1. 显式规则

2. 隐含规则

   makefile 自带的规则

#### 6.2.1.1 显示 格式

目标: 依赖

​ 命令

例子

1. 新建 makefile 文件

   vi makefile

```makefile
hello: hello.c
	gcc -o hello hello.c
```

​ hello(可执行文件) 依赖于 hello.c(源文件)

​ 下面的命令时编译命令.

1. vi hello.c

```CQL
#include <stdio.h>
int main(){
     printf("hello world changed \n");
}
```

执行命令 make 可以自动编译为可执行文件

修改 hello.c 再执行 make

### 6.3 命令

#### clean

clean:

​ rm ...

清理文件

#### make

```shell
make 可执行文件名字
```

只对 这个可执行文件执行 make 命令

### 6.4 变量

变量可代表命令

1. 大小写敏感

2. 内部定义

   - \$@

     目标文件

   - \$^

     所有依赖文件

   - \$<

     第一个依赖文件

例子

```makefile
#makefile

```

###    6.5 隐含规则

C 程序 .o 文件由 .c 生成

C++ 由 .cc 生成

将 gcc 名字设置为变量, 方便以后切换版本

隐含条件简化命令

```makefile
main.o: main.c **.h
```

### 6.3 Makefile 使用

#### make 执行过程

- 查找顺序

  1. GNUmake

     ...

     makefile

## 6.4 GDB 调试器

编译错误

运行错误时用 GDB 调试

## 6.5 库 lib

### 定义

### 库函数：

系统提供，供程序员调用，完成特定功能的函数，一般是 .o 文件。

### 静态库

- 一般以 .a 结尾。
- 编译时：库函数合并在可执行文件中
- 执行时：提供程序即可
- 可执行文件会变大

### 共享库

- 以 .so .so.x 结尾

- 其他性质与静态库相反

  编译不加入

  执行时要提供库文件

  执行文件较小。多个可执行文件可以共享，适合大型程序。

### 制作静态库

gcc 生成 .o 文件 再用 ar -rc 打包

```shell
gcc -c stack.c
```

```shell
ar -rc libstack.a stack.o
```

源文件 stack.c

gcc 命令生成 stack.o 文件

打包后的静态库：libstack.a

### 使用静态库

编译 main.c 时用 -L 参数加入静态库

```shell
gcc -o main main.c -L./ -lstack
```

然后运行 main

### 动态库

#### 制作

```shell
gcc stack.c -fPIC -shared -o libstack2.so
```

shared：共享库

-fPIC： f 为选项 PIC 为参数：位置无关代码。（待修改）

### 使用

编译 main.c 加 L 参数，和使用静态库命令一样

```shell
gcc -o main2 main.c -L./ -lstack2
```

main2 中没有共享库的代码。只复制 main2 给别人不能直接执行，除非同时提供库文件。

### 添加共享库

设置环境变量，告诉系统动态库在哪里。

```shell
export LD_LIBRARY_PATH=./; # 修改共享库路径环境变量为当前目录
$LD_LIBRARY_PATH # 查看环境变量
```
