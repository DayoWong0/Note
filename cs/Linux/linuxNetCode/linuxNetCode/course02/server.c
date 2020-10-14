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

	return 0;
}
