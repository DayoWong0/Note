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

-----

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

----

```shell
gcc -o v46 v46.c -std=c99 
```

---

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

## 1.2 Windows 下 TCP 编程

### 1.2.1 基本代码

server.c

```c
// client.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include "stdafx.h"
#include <stdio.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")

int _tmain(int argc, _TCHAR* argv[])
{
	sockaddr_in server;
	SOCKET fd; 
	WSADATA wsaData;
	WSAStartup(MAKEWORD(2, 2), &wsaData);
	fd = socket(AF_INET, SOCK_STREAM, 0);

	memset(&server, 0 , sizeof(server));
	//memset(&server, 0 , sizeof(sockaddr_in));
	server.sin_family = AF_INET;
	server.sin_port = htons(1234);
	server.sin_addr.S_un.S_addr = inet_addr("127.0.0.1");
	// Windows should use last function inet_addr,inet_aton did not work
	// inet_aton("127.0.0.1", &server.sin_addr);

	connect(fd, (sockaddr *)&server, sizeof(server));

	closesocket(fd);

	getchar();

	return 0;
}

```

client.c

```C
// net01.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <stdio.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")
// <> header: find in system lib
// "" header: first find in project file if not find then to find in system lib

int _tmain(int argc, _TCHAR* argv[])
{
	int len;
	SOCKET fd, clientfd;
	WSADATA wsaData;
	SOCKADDR_IN server, client;
	WSAStartup(MAKEWORD(2, 2), &wsaData);
	fd = socket(AF_INET, SOCK_STREAM, 0);

	memset(&server, 0, sizeof(server));

	server.sin_family = AF_INET;
	// port 1234
	server.sin_port = htons(1234);
	server.sin_addr.S_un.S_addr = htonl(INADDR_ANY);

	bind(fd, (sockaddr*)&server, sizeof(server));

	listen(fd, 5);

	len = sizeof(client);

	clientfd = accept(fd, (sockaddr*)&client, &len);

	printf("%s\n\r", inet_ntoa(client.sin_addr));

	closesocket(clientfd);
	closesocket(fd);

	getchar();

	return 0;
}


```

### 1.2.2 在基本代码上修改

- client.c 在连接后 connect(...) 加入代码

  [在线查看差异-client.c](https://github.com/chengziqaq/Note/commit/97fe12120f81ce6f417bbfca52a1f9ac9342baf1#diff-9d9936830bb5c6ba0a8c19033d7bd4805a147e85e0b65a90ae0836412d8417de)

  ```c
  send(fd, "hello", 5, 0);
  ```

  

- server.c 改得较多。

  [在线查看差异-server.c](https://github.com/chengziqaq/Note/commit/34f9fbde14129218596575a093b52f380fa1e872#diff-9d9936830bb5c6ba0a8c19033d7bd4805a147e85e0b65a90ae0836412d8417de)

## 1.3 UDP

### 1.3.1 单收单发

server.c 

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <arpa/inet.h>

void main(){
    int fd;
    char buf[100];
    int len, num;
    struct sockaddr_in server, client;

    fd = socket(AF_INET, SOCK_DGRAM, 0);

    memset(&server, 0, sizeof(server));
    server.sin_family = AF_INET;
    server.sin_port = htons(9999);
    server.sin_addr.s_addr = htonl(INADDR_ANY);
    bind(fd, (struct sockaddr*)&server, sizeof(server));
    
    len = sizeof(client);
    num = recvfrom(fd, buf, 100, 0, (struct sockaddr*)&client, &len);
    buf[num] = 0;
    printf("%s\n\r", buf);
    close(fd);
}

```

---

client.c

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <arpa/inet.h>

void main(){
    int fd;
    char buf[100];
    int len, num;
    struct sockaddr_in server, client;

    fd = socket(AF_INET, SOCK_DGRAM, 0);

    memset(&server, 0, sizeof(server));
    server.sin_family = AF_INET;
    server.sin_port = htons(9999);
    server.sin_addr.s_addr = inet_addr("127.0.0.1");
    
    strcpy(buf, "hello");
    num = sendto(fd, buf, strlen(buf), 0, (struct sockaddr*)&server, sizeof(server));
    printf("over\n\r");
    close(fd);
}

```

### 1.3.2 双方均可收发

server.c

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <arpa/inet.h>

void main()
{
	int fd;
	char buf[100];
	int len, num;
	struct sockaddr_in server, client;

	fd = socket(AF_INET, SOCK_DGRAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port   = htons(9999);
	server.sin_addr.s_addr = htonl(INADDR_ANY);
	bind(fd, (struct sockaddr*)&server, sizeof(server));
	
	len = sizeof(client);
	num=recvfrom(fd, buf, 100, 0,(struct sockaddr*)&client, &len);
	if(fork()>0)
	while(1)
	{
		num=recvfrom(fd, buf, 100, 0,(struct sockaddr*)&client, &len);
		buf[num] = 0;
		printf("%s", buf);
	}
	else
	while(1)
	{	
		fgets(buf, 100, stdin);
		printf("%s",buf);
		sendto(fd, buf, strlen(buf),0, (struct sockaddr*)&client, sizeof(client));
	}
	close(fd);
}

```

---

client.c

```c
#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <stdlib.h>
#include <netinet/in.h>
#include <arpa/inet.h>

void main()
{
	int fd;
	char buf[100];
	int len, num;
	struct sockaddr_in server, client;

	fd = socket(AF_INET, SOCK_DGRAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port   = htons(9999);
	server.sin_addr.s_addr = inet_addr("127.0.0.1");
	
	sendto(fd, "start", 5, 0,(struct sockaddr*)&server, sizeof(server));
	if(fork()>0)
	while(1)
	{	
		fgets(buf, 100, stdin);
		sendto(fd, buf, strlen(buf), 0,(struct sockaddr*)&server, sizeof(server));
	}
	else
	while(1)
	{
		len = sizeof(server);
		num = recvfrom(fd, buf, 100, 0, (struct sockaddr*)&server, &len);
		buf[num] = 0;
		printf("RECV:%s", buf);
	}
	close(fd);
}

```

