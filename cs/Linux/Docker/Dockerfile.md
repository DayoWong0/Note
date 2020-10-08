# Dockerfile

### 上下文路径

上一节中，有提到指令最后一个 **.** 是上下文路径，那么什么是上下文路径呢？

```shell
docker build -t nginx:test .
```

上下文路径，是指 docker 在构建镜像，有时候想要使用到本机的文件（比如复制），docker build 命令得知这个路径后，会将路径下的所有内容打包。

如果未说明最后一个参数，那么默认上下文路径就是 Dockerfile 所在的位置。

## Dockerfile 指令

- COPY

- ADD

  添加并解压 官方推荐优先使用 COPY 命令

- CMD

  CMD 在 docker run 时运行

**作用**：为启动的容器指定默认要运行的程序，程序运行结束，容器也就结束。CMD 指令指定的程序可被 docker run 命令行参数中指定要运行的程序所覆盖。

**注意**：如果 Dockerfile 中如果存在多个 CMD 指令，仅最后一个生效。

- RUN

  RUN 是在 docker build

- ### ENTRYPOINT
