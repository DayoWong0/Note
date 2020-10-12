# Linux 网络编程上机实验

## 参考

[代码和提交文件 on Github ](https://github.com/chengziqaq/Note/tree/master/cs/Linux/linuxNetCode)

## 1.1 IP 地址转换函数

P18

```c
#include <arpa/inet.h>
#include <stdio.h>
#include <stdlib.h>
int main(int argc, char **argv){
    in_addr_t t;
    char *str;
    struct in_addr numstr;

    if (argc < 2 )
    {
        /* code */
        printf("Please input IP Address");
        exit(1);
    }

    t = inet_addr(argv[1]);
    printf("%x\n\r", t);
    inet_aton(argv[1], &numstr);
    printf("%x\n\r", numstr.s_addr);

    str = inet_ntoa(numstr);
    printf("%x\n\r", str);
    
}
```



```c
#include <arpa/inet.h>
#include <stdio.h>

void main(){
    char buf[64];
    struct in_addr *in;
    // ipv6
    struct in6_addr *in6;

    inet_pton(AF_INET, "1.2.34.5", buf);
    in = (struct in_addr*)buf;
    printf("%x\n\r", in->s_addr);

    inet_pton(AF_INET6, "1234:5678::", buf);
    in6 = (struct in6_addr*)buf;

    for ( int i = 0; i < 16; i++)
    {
        printf("%02x", in6->s6_addr[i]);
        if ((i&&1) && (i<15) ){
             printf(":");
        }
    }
    printf("\n");
}
```

```shell
gcc -o v46 v46.c -std=c99 
```

.bash-history

```shell
ls
vi conv.c
cat conv.c
gcc -o conv conv.c
./conv 114.114.114.114
./conv 144.34.211.34
clear
vi v46.c
cat v46.c
gcc -o v46 v46.c
gcc -o v46 v46.c -std=c99
./v46 
./v46 
cp .bash_history bash.txtbsaftp
```

