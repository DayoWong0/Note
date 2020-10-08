# electron 学习笔记

## 参考

[Electron 免费视频教程-从基础到实战](https://www.bilibili.com/video/BV177411s7Lt?p=3)

## 安装

1. node.js 安装

   官网下载 mac 版安装即可

2. Electron 安装

   ```sh
   sudo npm install electron -g --unsafe-perm=true --allow-root
   ```

   npm 命令前都要加 sudo, 不然会权限不足.

3. 官方的例子

   ```sh
   git clone https://github.com/electron/electron-quick-start
   cd electron-quick-start
   npm install
   npm start
   ```

   ![](./electron.assets/image-20200920021951852.png)
