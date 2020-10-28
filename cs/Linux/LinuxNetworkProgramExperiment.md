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

## 1.3 Linux 下 UDP编程

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

## 1.4 Windows下并发编程

### 1.4.1 简单例子

```c
// server.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <windows.h>
unsigned WINAPI Func(void *arg){
	while(1){
		Sleep(500);
		printf("thread\n");
	}
}

int _tmain(int argc, _TCHAR* argv[])
{
	CreateThread(NULL, 0,  (LPTHREAD_START_ROUTINE)Func, NULL, 0, NULL);
	while(1){
		Sleep(500);
		printf("main\n");

	}
	return 0;
}


```

---

### 1.4.2 烫烫烫烫

server.c

```c
// server.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <windows.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")

typedef struct _addr{
	SOCKET s;
	sockaddr_in client;
}ADDR;

__declspec(thread) SOCKET client_sock;
__declspec(thread) sockaddr_in client;

unsigned WINAPI SendFunc(void *arg)
{
	char buf[100];
	int len;
	SOCKET s = *((SOCKET*)arg);
	while(1)
	{
		fgets(buf, 100, stdin);
		len = strlen(buf);
		send(s, buf, len, 0);
	}
}

unsigned WINAPI Func(void * arg)
{
	char buf[100];
	int len;

	client_sock = ((ADDR*)arg)->s;
	memcpy(&client, &(((ADDR*)arg)->client), sizeof(client));
	printf("one client connected\n");
	CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)SendFunc, (LPVOID)&client_sock, 0, NULL);

	while(1){
		len = recv(client_sock, buf, 100, 0);
		buf[len] = 0;
		printf("%s", buf);
	}
	//closesocket(client_sock);
	return 0;
}

int _tmain(int argc, _TCHAR* argv[])
{
	WSADATA wsaData;
	SOCKET server_sock;
	int sock_len;
	sockaddr_in server;
	ADDR addr;

	WSAStartup(MAKEWORD(2, 2), &wsaData);

	server_sock = socket(AF_INET, SOCK_STREAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port = htons(9999);
	server.sin_addr.s_addr = htonl(INADDR_ANY);
	bind(server_sock, (sockaddr*)&server, sizeof(server));

	listen(server_sock, 128);
	
	sock_len = sizeof(client);
	while(1)
	{
		client_sock = accept(server_sock, (sockaddr*)&client,&sock_len);
		addr.s = client_sock;
		memcpy(&addr.client, &client, sizeof(client));
		CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)Func, (LPVOID)&addr, 0, NULL);
	}


	return 0;
}

```

---

client.c

```
// client.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <windows.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")

unsigned WINAPI recvFunc(void *arg)
{
	char buf[100];
	int len;
	SOCKET s = *((SOCKET*)arg);
	while(1)
	{
		len = recv(s, buf, 100, 0);
		buf[len] = 0;
		printf("%s", buf);
	}
}

int _tmain(int argc, _TCHAR* argv[])
{
	char buf[100];
	int len;
	WSADATA wsaData;
	SOCKET server_sock;
	sockaddr_in server;

	WSAStartup(MAKEWORD(2, 2), &wsaData);

	server_sock = socket(AF_INET, SOCK_STREAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port = htons(9999);
	server.sin_addr.s_addr = inet_addr("127.0.0.1");

	connect(server_sock, (sockaddr*)&server, sizeof(server));
	CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)recvFunc, (LPVOID)&server_sock, 0, NULL);


	while(1)
	{
		fgets(buf, 100, stdin);
		len = strlen(buf);
		send(server_sock, buf, len, 0);
	}
	closesocket(server_sock);
	return 0;
}


```

---

```c
// server.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <windows.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")

typedef struct _addr{
	SOCKET s;
	sockaddr_in client;
}ADDR;

__declspec(thread) SOCKET client_sock;
__declspec(thread) sockaddr_in client;

unsigned WINAPI SendFunc(void *arg)
{
	char buf[100];
	int len;
	SOCKET s = *((SOCKET*)arg);
	while(1)
	{
		fgets(buf, 100, stdin);
		len = strlen(buf);
		send(s, buf, len, 0);
	}
}

unsigned WINAPI Func(void * arg)
{
	char buf[100];
	int len;

	client_sock = ((ADDR*)arg)->s;
	memcpy(&client, &(((ADDR*)arg)->client), sizeof(client));
	printf("one client connected\n");
	CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)SendFunc, (LPVOID)&client_sock, 0, NULL);

	while(1){
		len = recv(client_sock, buf, 100, 0);
		buf[len] = 0;
		printf("%s", buf);
	}
	//closesocket(client_sock);
	return 0;
}

int _tmain(int argc, _TCHAR* argv[])
{
	WSADATA wsaData;
	SOCKET server_sock;
	int sock_len;
	sockaddr_in server;
	ADDR addr;

	WSAStartup(MAKEWORD(2, 2), &wsaData);

	server_sock = socket(AF_INET, SOCK_STREAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port = htons(9999);
	server.sin_addr.s_addr = htonl(INADDR_ANY);
	bind(server_sock, (sockaddr*)&server, sizeof(server));

	listen(server_sock, 128);
	
	sock_len = sizeof(client);
	while(1)
	{
		client_sock = accept(server_sock, (sockaddr*)&client,&sock_len);
		addr.s = client_sock;
		memcpy(&addr.client, &client, sizeof(client));
		CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)Func, (LPVOID)&addr, 0, NULL);
	}


	return 0;
}


```

---

```c
// client.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <windows.h>
#include <winsock2.h>
#pragma comment(lib, "ws2_32.lib")

unsigned WINAPI recvFunc(void *arg)
{
	char buf[100];
	int len;
	SOCKET s = *((SOCKET*)arg);
	while(1)
	{
		len = recv(s, buf, 100, 0);
		buf[len] = 0;
		printf("%s", buf);
	}
}

int _tmain(int argc, _TCHAR* argv[])
{
	char buf[100];
	int len;
	WSADATA wsaData;
	SOCKET server_sock;
	sockaddr_in server;

	WSAStartup(MAKEWORD(2, 2), &wsaData);

	server_sock = socket(AF_INET, SOCK_STREAM, 0);
	memset(&server, 0, sizeof(server));
	server.sin_family = AF_INET;
	server.sin_port = htons(9999);
	server.sin_addr.s_addr = inet_addr("127.0.0.1");

	connect(server_sock, (sockaddr*)&server, sizeof(server));
	CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)recvFunc, (LPVOID)&server_sock, 0, NULL);


	while(1)
	{
		fgets(buf, 100, stdin);
		len = strlen(buf);
		send(server_sock, buf, len, 0);
	}
	closesocket(server_sock);
	return 0;
}


```
## Linux 下多线程网络编程
netcat TCP/IP的瑞士军刀

[代码地址](https://github.com/DayoWong0/Note/tree/master/cs/Linux/linuxNetCode/course04)

## Windows 

[代码地址](https://github.com/DayoWong0/Note/tree/master/cs/Linux/linuxNetCode/course05)

获取 域名信息

```c
// name.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"
#include <stdlib.h>
#include <winsock2.h>

#pragma comment(lib, "ws2_32.lib")

int main(int argc, char* argv[])
{
	WSADATA wsaData;
	WSAStartup(MAKEWORD(2, 2), &wsaData);
	
	struct hostent  *hp;
	char **p;
	unsigned int addr;
	char name[1024];

	//hp = gethostbyname("www.taobao.com");
	addr = inet_addr("211.67.48.2");
	hp = gethostbyaddr((char*)&addr,4, AF_INET );
	gethostname(name, sizeof(name));
	puts(name);

	if(hp == NULL)
	{
		exit(2);
	}
	for(p = hp->h_addr_list; *p!=0; p++)
	{
		struct in_addr in;
		char **q;
		memcpy(&in.s_addr, *p, sizeof(in.s_addr));
		printf("%s\t%s", inet_ntoa(in), hp->h_name);
		for(q=hp->h_aliases; *q!=0; q++)
			printf("%s", *q);
		putchar('\n');
	}


	getchar();
	return 0;
}


```

---

```c
// getaddrinfo.cpp : 定义控制台应用程序的入口点。
//

#include "stdafx.h"

#include <stdio.h>
#include <WinSock2.h>
#include <WS2tcpip.h>

#pragma comment(lib,"ws2_32.lib")

int main(int argc, char *argv[])
{
	//初始化环境
	WSADATA ws;
	WSAStartup(MAKEWORD(2, 2), &ws);


	struct addrinfo hints;
	struct addrinfo *res, *cur;
	struct sockaddr_in *addr;
	// 保存Ip地址信息 xxx.xxx.xxx.xxx
	char m_IpAddr[16];

	//初始化 hints
	memset(&hints, 0, sizeof(addrinfo));
	hints.ai_family = AF_INET;	//IPv4
	hints.ai_flags = AI_PASSIVE; //匹配所有 IP 地址
	hints.ai_protocol = 0;        //匹配所有协议
	hints.ai_socktype = SOCK_STREAM; //流类型

	//获取 ip address ， res 指向一个链表Address Information链表
	int ret = getaddrinfo("www.baidu.com", NULL, &hints, &res);
	if (ret == -1)
	{
		perror("getaddrinfo");
		exit(-1);
	}

	//输出获取的信息
	for (cur = res; cur != NULL; cur = cur->ai_next)
	{
		addr = (struct sockaddr_in *) cur->ai_addr; //获取当前 address

		sprintf(m_IpAddr, "%d.%d.%d.%d", addr->sin_addr.S_un.S_un_b.s_b1,
			addr->sin_addr.S_un.S_un_b.s_b2,
			addr->sin_addr.S_un.S_un_b.s_b3,
			addr->sin_addr.S_un.S_un_b.s_b4);

		printf("%s\n", m_IpAddr); //输出到控制台
	}
	//清除环境信息
	WSACleanup();
	system("pause");
	return 0;
}
```






