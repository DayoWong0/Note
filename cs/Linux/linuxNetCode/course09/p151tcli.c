// tcli.c.cpp : �������̨Ӧ�ó������ڵ㡣
//

#include"stdafx.h"
#include<time.h>
#include <stdlib.h>
#include<stdio.h>
#include<winsock2.h>
#include<string.h>
#define BUFLEN 255

int _tmain(int argc, char** argv)
{
	struct sockaddr_in localaddr;
	int sockfd ,n;
	char msg[BUFLEN+1];
	if(argc!=2)
	{
		printf("usage :%s<port>\n",argv[0]);
		exit(0);
	}
	sockfd = socket(AF_INET,SOCK_DGRAM,0);
	if(sockfd<0)
	{
		fprintf(stderr,"socket creating error in tcli.c\n");
		exit(1);
	}
	memset(&localaddr,0,sizeof(struct sockaddr_in));
	localaddr.sin_port = htons(atoi(argv[1]));
	localaddr.sin_addr.s_addr=htonl(INADDR_ANY);
	int opt = SO_REUSEADDR;
	setsockopt(sockfd,SOL_SOCKET,SO_REUSEADDR,&opt,sizeof(opt));
	if(bind(sockfd,(struct sockaddr*)&localaddr,sizeof(struct sockaddr_in))<0)
	{
		fprintf(stderr,"socket creating error in tcli.c\n");
		exit(2);
	}
	n = read(sockfd,msg,BUFLEN);
	if(n==-1)
	{
		fprintf(stderr,"read error in tcli.c\n");
		exit(3);
	}
	else{
		msg[n]=0;
		printf("%s",msg);
	}
}

